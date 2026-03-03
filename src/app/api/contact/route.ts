import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  experience: string;
  time: string;
  message: string;
  newsletter: boolean;
};

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: ContactBody) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #1a56db 0%, #1e40af 100%); padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">
          ✉️ Novo contato pelo site
        </h1>
        <p style="color: #dbeafe; margin: 8px 0 0; font-size: 14px;">
          Instituto Estrela Azul
        </p>
      </div>

      <div style="padding: 28px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 140px; vertical-align: top;">Nome</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 500;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">E-mail</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">
              <a href="mailto:${escapeHtml(data.email)}" style="color: #1a56db; text-decoration: none;">${escapeHtml(data.email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Telefone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">
              <a href="https://wa.me/55${data.phone.replace(/\D/g, "")}" style="color: #1a56db; text-decoration: none;">${escapeHtml(data.phone)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Motivo</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${escapeHtml(data.subject || "Não informado")}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Experiência</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${escapeHtml(data.experience || "Não informado")}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Horário</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${escapeHtml(data.time || "Não informado")}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Newsletter</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${data.newsletter ? "✅ Sim" : "Não"}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
          <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">Mensagem</p>
          <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
        </div>
      </div>

      <div style="padding: 16px 24px; background: #f3f4f6; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #9ca3af; font-size: 12px;">
          Enviado pelo formulário de contato — institutoestrelaazul.com.br
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY não configurada." },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL || "estrelaazulinstituto@gmail.com";

    const subjectLine = body.subject
      ? `[Contato Site] ${body.subject} — ${body.name}`
      : `[Contato Site] Nova mensagem de ${body.name}`;

    const { error } = await resend.emails.send({
      from: `Instituto Estrela Azul <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [recipientEmail],
      replyTo: body.email,
      subject: subjectLine,
      html: buildEmailHtml(body)
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar o e-mail." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message =
      err instanceof Error ? err.message : "Erro interno ao enviar.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

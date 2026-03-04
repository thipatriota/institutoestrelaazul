import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const secret = process.env.SANITY_WEBHOOK_SECRET;

        // Verifica a chave secreta enviada como query parameter do webhook
        // (exemplo da URL do webhook no Sanity: /api/revalidate?secret=SUA_CHAVE_SECRETA_AQUI)
        if (secret) {
            const urlSecret = req.nextUrl.searchParams.get("secret");
            if (urlSecret !== secret) {
                return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
            }
        }

        const body = await req.json();

        // O Sanity enviará no corpo (body) o _type e o slug do documento editado.
        const type = body._type;
        const slug = body.slug?.current || body.slug;

        console.log(`[Revalidate Webhook] Recebido pedido para limpar cache: ${type} - ${slug}`);

        if (!type) {
            return NextResponse.json({ message: "No document type provided" }, { status: 400 });
        }

        // 1. Sempre revalida a Home, as listagens do blog, e o sitemap
        revalidatePath("/");
        revalidatePath("/blog");
        revalidatePath("/blog/[slug]", "page");
        revalidatePath("/blog/category/[slug]", "page");
        revalidatePath("/sitemap.xml");
        revalidatePath("/feed.xml");

        // 2. Tenta ser exato revalidando as páginas específicas também
        if (type === "post") {
            if (slug) {
                revalidatePath(`/blog/${slug}`);
            }
        } else if (type === "category") {
            if (slug) {
                revalidatePath(`/blog/category/${slug}`);
            }
        }

        return NextResponse.json({
            status: "success",
            message: `Cache revalidated for ${type} ${slug || ""}`,
            now: Date.now()
        });

    } catch (err: any) {
        console.error("[Revalidate Webhook Error]", err);
        return NextResponse.json(
            { message: err.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

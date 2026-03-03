"use client";

import { useState, type FormEvent } from "react";

type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    experience: string;
    time: string;
    message: string;
    terms: boolean;
    newsletter: boolean;
    privacy: boolean;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const initial: FormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    time: "",
    message: "",
    terms: false,
    newsletter: false,
    privacy: false
};

const inputClass =
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

const selectClass =
    "border-input text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50";

const checkboxClass =
    "peer border-input dark:bg-input/30 checked:bg-primary checked:text-primary-foreground dark:checked:bg-primary checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px]";

export function ContactForm() {
    const [form, setForm] = useState<FormData>(initial);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    function update<K extends keyof FormData>(key: K, value: FormData[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    subject: form.subject,
                    experience: form.experience,
                    time: form.time,
                    message: form.message,
                    newsletter: form.newsletter
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Erro ao enviar mensagem.");
            }

            setStatus("success");
            setForm(initial);
        } catch (err) {
            setStatus("error");
            setErrorMsg(
                err instanceof Error ? err.message : "Erro ao enviar mensagem."
            );
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-green-600"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary">
                    Mensagem enviada com sucesso!
                </h3>
                <p className="text-muted-foreground max-w-md">
                    Recebemos sua mensagem e entraremos em contato o mais breve possível.
                    Obrigado pelo seu interesse!
                </p>
                <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all outline-none bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 mt-4"
                    onClick={() => setStatus("idle")}
                >
                    Enviar outra mensagem
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                        htmlFor="name"
                    >
                        Nome completo *
                    </label>
                    <input
                        id="name"
                        required
                        type="text"
                        disabled={status === "sending"}
                        className={inputClass}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                        htmlFor="email"
                    >
                        E-mail *
                    </label>
                    <input
                        id="email"
                        required
                        type="email"
                        disabled={status === "sending"}
                        className={inputClass}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                    htmlFor="phone"
                >
                    Telefone *
                </label>
                <input
                    id="phone"
                    required
                    type="tel"
                    disabled={status === "sending"}
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                    htmlFor="subject"
                >
                    Motivo do contato *
                </label>
                <select
                    id="subject"
                    required
                    disabled={status === "sending"}
                    className={selectClass}
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                >
                    <option value="" disabled>
                        Selecione uma opção
                    </option>
                    <option>Agendamento</option>
                    <option>Dúvidas</option>
                    <option>Outros</option>
                </select>
            </div>

            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                    htmlFor="experience"
                >
                    Já teve experiência com medicinas da floresta?
                </label>
                <select
                    id="experience"
                    disabled={status === "sending"}
                    className={selectClass}
                    value={form.experience}
                    onChange={(e) => update("experience", e.target.value)}
                >
                    <option value="" disabled>
                        Selecione uma opção
                    </option>
                    <option>Sim</option>
                    <option>Não</option>
                </select>
            </div>

            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                    htmlFor="time"
                >
                    Melhor horário para contato
                </label>
                <select
                    id="time"
                    disabled={status === "sending"}
                    className={selectClass}
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                >
                    <option value="" disabled>
                        Selecione uma opção
                    </option>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                </select>
            </div>

            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                    htmlFor="message"
                >
                    Mensagem *
                </label>
                <textarea
                    id="message"
                    rows={6}
                    required
                    disabled={status === "sending"}
                    placeholder="Conte-nos sobre suas intenções, dúvidas ou qualquer informação que considere importante..."
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                />
            </div>

            <div className="space-y-4">
                <div className="flex items-start space-x-2">
                    <input
                        id="terms"
                        required
                        type="checkbox"
                        disabled={status === "sending"}
                        className={checkboxClass}
                        checked={form.terms}
                        onChange={(e) => update("terms", e.target.checked)}
                    />
                    <label
                        className="flex items-center gap-2 font-medium select-none text-sm leading-relaxed"
                        htmlFor="terms"
                    >
                        Li e aceito que as informações fornecidas são verdadeiras e que
                        entendo a necessidade de conversa preparatória antes da participação
                        *
                    </label>
                </div>
                <div className="flex items-start space-x-2">
                    <input
                        id="newsletter"
                        type="checkbox"
                        disabled={status === "sending"}
                        className={checkboxClass}
                        checked={form.newsletter}
                        onChange={(e) => update("newsletter", e.target.checked)}
                    />
                    <label
                        className="flex items-center gap-2 font-medium select-none text-sm"
                        htmlFor="newsletter"
                    >
                        Desejo receber informações sobre eventos e novidades do instituto
                    </label>
                </div>
                <div className="flex items-start space-x-2">
                    <input
                        id="privacy"
                        required
                        type="checkbox"
                        disabled={status === "sending"}
                        className={checkboxClass}
                        checked={form.privacy}
                        onChange={(e) => update("privacy", e.target.checked)}
                    />
                    <label
                        className="flex items-center gap-2 font-medium select-none text-sm"
                        htmlFor="privacy"
                    >
                        Concordo com a Política de Privacidade *
                    </label>
                </div>
            </div>

            {status === "error" && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMsg || "Ocorreu um erro ao enviar. Tente novamente."}
                </div>
            )}

            <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full"
                type="submit"
                disabled={status === "sending"}
            >
                {status === "sending" ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Enviando...
                    </>
                ) : (
                    "Enviar mensagem"
                )}
            </button>
        </form>
    );
}

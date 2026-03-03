import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-pattern.jpg')] bg-repeat opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:py-20">
        <Image
          src="/logo.png"
          alt="Instituto Estrela Azul"
          width={160}
          height={160}
          priority
          className="h-28 w-28 sm:h-32 sm:w-32"
        />

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          INSTITUTO ESTRELA AZUL
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Ajuste este texto com a proposta do Instituto, missão e chamada
          principal.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Fale com a gente
          </a>
          <a
            href="/sobre"
            className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
          >
            Conheça o Instituto
          </a>
        </div>
      </div>
    </section>
  );
}


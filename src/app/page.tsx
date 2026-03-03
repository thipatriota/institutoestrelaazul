export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#EAF6F7]">
        <div
          className="h-40 md:h-44 w-full border-b border-border/60 bg-white"
          style={{
            backgroundImage: "url('/hero-pattern.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto"
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center pb-14 pt-8 text-center">
            <div className="-mt-24 md:-mt-28 mb-6">
              <img
                src="/logo.png"
                alt="Logo Instituto Estrela Azul"
                className="h-[210px] w-[210px] object-contain drop-shadow-sm md:h-[240px] md:w-[240px]"
              />
            </div>
            <h1 className="font-heading text-4xl leading-tight text-primary md:text-5xl lg:text-6xl text-balance">
              Instituto Estrela Azul
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl text-balance">
              Autocura e meditação com a sagrada medicina Ayahuasca
            </p>
          </div>
        </div>
      </section>

      <section className="biography py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bio-content max-w-6xl mx-auto">
            <div className="bio-text text-center max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
                Nossa Missão
              </h3>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p className="text-pretty">
                  Somos um Instituto Espiritualista e Universalista, isto é,
                  buscamos o desenvolvimento da espiritualidade sem nos
                  prendermos à dogmas, sistemas religiosos ou crenças
                  específicas. Prezamos pela genuína conexão com o divino que
                  nos habita através de experiências meditativas e de profunda
                  interação com a Natureza.
                </p>
                <div className="pt-6">
                  <a
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 py-3"
                    href="/agenda/"
                  >
                    Agende sua visita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Os Pilares da Transformação
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conheça os três pilares fundamentais que guiam nossa jornada de
              autoconhecimento e cura espiritual
            </p>
          </div>
          <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              data-slot="card"
              className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon text-center pb-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
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
                    className="lucide lucide-brain h-8 w-8 text-primary"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                </div>
                <div
                  data-slot="card-title"
                  className="font-semibold text-xl text-primary"
                >
                  Expansão da Consciência
                </div>
              </div>
              <div data-slot="card-content" className="px-6">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  A Ayahuasca é uma bebida sagrada utilizada há milênios por
                  povos originários da Amazônia para fins espirituais,
                  terapêuticos e de autoconhecimento. Sua principal função é
                  promover a expansão da consciência. Assim sendo, auxilia em
                  mudanças significativas de nossa percepção sensorial e de
                  nossa compreensão sobre quem somos, de onde viemos e para onde
                  vamos.
                </p>
              </div>
            </div>

            <div
              data-slot="card"
              className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon text-center pb-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
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
                    className="lucide lucide-heart h-8 w-8 text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div
                  data-slot="card-title"
                  className="font-semibold text-xl text-primary"
                >
                  Auto-Cuidado
                </div>
              </div>
              <div data-slot="card-content" className="px-6">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  A Ayahuasca é um instrumento eficaz de autoajuda e de profundo
                  mergulho interior voltado ao enfrentamento dos medos, traumas
                  e bloqueios emocionais de forma consciente. Contribui,
                  portanto, para um repensar sobre nossos padrões de pensamentos
                  e hábitos pela clareza mental e emocional que proporciona.
                </p>
              </div>
            </div>

            <div
              data-slot="card"
              className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon text-center pb-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
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
                    className="lucide lucide-sprout h-8 w-8 text-primary"
                  >
                    <path d="M7 20h10" />
                    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                  </svg>
                </div>
                <div
                  data-slot="card-title"
                  className="font-semibold text-xl text-primary"
                >
                  Crescimento
                </div>
              </div>
              <div data-slot="card-content" className="px-6">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  A consagração dessa antiga bebida sacramental possibilita
                  purificação energética de nossos corpos e ampliação de nossas
                  conexões espirituais, bem como o autoconhecimento e conexão
                  com o todo (Universo). É uma poderosa ferramenta para o
                  desenvolvimento espiritual e pessoal e o despertar para uma
                  vida mais autêntica e alinhada com os propósitos e missões das
                  pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16 text-balance">
              Explore Nosso Instituto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50 hover:border-primary/20 transition-all hover:shadow-lg"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
                >
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
                    className="lucide lucide-calendar h-12 w-12 text-primary mx-auto mb-4"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <div data-slot="card-title" className="font-semibold text-lg">
                    Agenda de Cerimônias
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm"
                  >
                    Confira nossa programação e participe de experiências
                    transformadoras
                  </div>
                </div>
                <div data-slot="card-content" className="px-6 text-center">
                  <a
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-transparent"
                    href="/agenda/"
                  >
                    Ver Agenda
                  </a>
                </div>
              </div>

              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50 hover:border-primary/20 transition-all hover:shadow-lg"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
                >
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
                    className="lucide lucide-users h-12 w-12 text-primary mx-auto mb-4"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div data-slot="card-title" className="font-semibold text-lg">
                    Depoimentos
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm"
                  >
                    Conheça as experiências transformadoras de nossos buscadores
                  </div>
                </div>
                <div data-slot="card-content" className="px-6 text-center">
                  <a
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-transparent"
                    href="/depoimentos/"
                  >
                    Ler Depoimentos
                  </a>
                </div>
              </div>

              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50 hover:border-primary/20 transition-all hover:shadow-lg"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
                >
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
                    className="lucide lucide-circle-help h-12 w-12 text-primary mx-auto mb-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div data-slot="card-title" className="font-semibold text-lg">
                    Perguntas Frequentes
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm"
                  >
                    Esclareça suas dúvidas sobre as cerimônias e medicinas da
                    floresta
                  </div>
                </div>
                <div data-slot="card-content" className="px-6 text-center">
                  <a
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-transparent"
                    href="/faq/"
                  >
                    Ver FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              Pronto para Sua Jornada de Autoconhecimento?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Entre em contato conosco para agendar uma conversa preparatória e
              dar o primeiro passo em sua jornada de transformação espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 text-lg px-8"
                href="/contato/"
              >
                Entre em Contato
              </a>
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 bg-transparent"
                href="/agenda/"
              >
                Ver Próximas Cerimônias
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


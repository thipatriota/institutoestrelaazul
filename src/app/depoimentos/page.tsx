import { TestimonialsCarousel } from "@/components/testimonials-carousel";

export default function DepoimentosPage() {
  const testimonials = [
    {
      quote:
        '"Bom dia madrinha! Nossa que coisa boa que foi ontem, muito obrigado pela experiência e pelo acolhimento."',
      author: "Buscador",
      subtitle: "Meditação com Ayahuasca"
    },
    {
      quote:
        '"Me senti acolhido do começo ao fim. Saí mais leve, com clareza e gratidão pelo cuidado de toda a equipe."',
      author: "Buscador",
      subtitle: "Trabalho espiritual"
    },
    {
      quote:
        '"Um espaço de respeito e disciplina. A condução foi firme e amorosa, e isso trouxe muita segurança durante o processo."',
      author: "Buscador",
      subtitle: "Cerimônia"
    }
  ];

  const transformations = [
    {
      title: "Cura Emocional",
      quote:
        '"As cerimônias me ajudaram a processar traumas profundos e encontrar paz interior."',
      icon: (
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
          className="lucide lucide-heart h-5 w-5 text-red-500"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      title: "Autoconhecimento",
      quote:
        '"Descobri aspectos de mim mesmo que não conhecia. A clareza mental foi impressionante."',
      icon: (
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
          className="lucide lucide-brain h-5 w-5 text-blue-500"
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
      )
    },
    {
      title: "Conexão Espiritual",
      quote:
        '"Senti uma conexão divina que nunca havia experimentado. Minha fé foi renovada."',
      icon: (
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
          className="lucide lucide-star h-5 w-5 text-yellow-500"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      )
    },
    {
      title: "Relacionamentos",
      quote:
        '"Aprendi a me relacionar melhor com as pessoas. Meus relacionamentos melhoraram significativamente."',
      icon: (
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
          className="lucide lucide-users h-5 w-5 text-green-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Propósito de Vida",
      quote:
        '"Encontrei meu verdadeiro propósito. Mudei de carreira e nunca fui tão feliz."',
      icon: (
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
          className="lucide lucide-target h-5 w-5 text-purple-500"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: "Vícios e Dependências",
      quote:
        '"Superei vícios que me acompanhavam há anos. Hoje sou uma pessoa livre."',
      icon: (
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
          className="lucide lucide-shield h-5 w-5 text-orange-500"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="page-banner bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Depoimentos
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Experiências transformadoras compartilhadas por nossos buscadores
            </p>
          </div>
        </div>
      </section>

      <section className="biography py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bio-content max-w-4xl mx-auto">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
                O que dizem os buscadores
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Conheça as experiências reais de transformação e cura de quem
                participou de nossas cerimônias
              </p>
            </div>

            <TestimonialsCarousel items={testimonials} />

            <div className="text-center mt-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 bg-transparent"
                href="https://www.instagram.com/institutoestrelaazulayaoficial/"
              >
                Veja mais depoimentos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Tipos de Transformação
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Descubra as diferentes formas de transformação que nossos
                buscadores experimentaram
              </p>
            </div>

            <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transformations.map((t) => (
                <div
                  key={t.title}
                  data-slot="card"
                  className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {t.icon}
                      </div>
                      <div
                        data-slot="card-title"
                        className="font-semibold text-lg text-primary"
                      >
                        {t.title}
                      </div>
                    </div>
                  </div>
                  <div data-slot="card-content" className="px-6">
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {t.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              Pronto para Sua Própria Transformação?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Junte-se aos nossos buscadores e inicie sua jornada de
              autoconhecimento e cura espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 text-lg px-8"
                href="/agenda/"
              >
                Ver Próximas Cerimônias
              </a>
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 bg-transparent"
                href="/contato/"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


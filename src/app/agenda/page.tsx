export default function AgendaPage() {
  return (
    <>
      <section className="page-banner bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Agenda de Cerimônias
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Confira nossa programação e venha participar de experiências
              transformadoras
            </p>
          </div>
        </div>
      </section>

      <section className="biography py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 card border-primary/20 shadow-xl"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4"
              >
                <div className="flex items-center justify-center mb-4">
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
                    className="lucide lucide-instagram h-12 w-12 text-primary"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div
                  data-slot="card-title"
                  className="font-semibold text-2xl lg:text-3xl text-primary mb-2"
                >
                  Agenda Mensal Completa
                </div>
                <div
                  data-slot="card-description"
                  className="text-muted-foreground text-base"
                >
                  Acompanhe todas as nossas cerimônias e eventos especiais
                </div>
              </div>
              <div
                data-slot="card-content"
                className="px-6 text-center space-y-4"
              >
                <p className="text-muted-foreground leading-relaxed">
                  Confira nossa agenda mensal completa no Instagram com todos os
                  eventos, cerimônias e atividades do Instituto Estrela Azul.
                  Mantenha-se atualizado sobre datas, horários e informações
                  especiais.
                </p>
                <a
                  href="https://www.instagram.com/institutoestrelaazulayaoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 mt-4 inline-flex items-center gap-2"
                  data-slot="button"
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
                    className="lucide lucide-instagram h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Ver Agenda no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Como Participar
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Siga estes passos simples para participar de nossas cerimônias
              </p>
            </div>
            <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 text-center"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Pré-inscrição
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Entre em contato conosco através do nosso WhatsApp para
                    manifestar interesse na cerimônia desejada;
                  </p>
                </div>
              </div>
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 text-center"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Conversa Preparatória
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Realizamos uma conversa individual para avaliar preparação e
                    esclarecer dúvidas;
                  </p>
                </div>
              </div>
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 text-center"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Orientações
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fornecemos orientações detalhadas sobre preparação, dieta e
                    cuidados necessários;
                  </p>
                </div>
              </div>
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 text-center"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Participação
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participe da cerimônia com coração aberto e disposição para
                    a experiência;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Informações Importantes
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Orientações essenciais para uma participação segura e consciente
              </p>
            </div>
            <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="flex items-center space-x-2">
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
                      className="lucide lucide-triangle-alert h-6 w-6 text-destructive"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                    <div
                      data-slot="card-title"
                      className="font-semibold text-lg text-primary"
                    >
                      Contraindicações
                    </div>
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Algumas condições médicas e medicamentos podem impedir a
                    participação. Consulte-nos antes de se inscrever.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="flex items-center space-x-2">
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
                      className="lucide lucide-utensils h-6 w-6 text-secondary"
                    >
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    </svg>
                    <div
                      data-slot="card-title"
                      className="font-semibold text-lg text-primary"
                    >
                      Preparação
                    </div>
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seguir dieta específica e orientações de preparação é
                    fundamental para uma experiência segura.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                >
                  <div className="flex items-center space-x-2">
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
                      className="lucide lucide-file-text h-6 w-6 text-accent"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                    <div
                      data-slot="card-title"
                      className="font-semibold text-lg text-primary"
                    >
                      Documentos
                    </div>
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Necessário apresentar documento de identidade e preencher
                    formulário de saúde.
                  </p>
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
              Pronto para Participar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Entre em contato conosco para agendar sua conversa preparatória e
              dar o primeiro passo em sua jornada espiritual.
            </p>
            <a
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 text-lg px-8"
              href="/contato/"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


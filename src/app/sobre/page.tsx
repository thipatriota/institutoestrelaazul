export default function SobrePage() {
  return (
    <>
      <section className="page-banner bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Conheça nossa história, princípios e estrutura organizacional
            </p>
          </div>
        </div>
      </section>

      <section className="biography py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bio-content max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    alt="Instituto Estrela Azul"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="rounded-lg shadow-md"
                    style={{ color: "transparent" }}
                    src="/31f841_5c4107cf2e88430a87e42e478e6e9a7e_mv2.webp"
                  />
                  <img
                    alt="Cerimônia"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="rounded-lg shadow-md"
                    style={{ color: "transparent" }}
                    src="/unnamed.webp"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  O Instituto
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  O Instituto Estrela Azul nasceu do atendimento ao chamado
                  sagrado realizado ao nosso Padrinho Ademar e Madrinha Milena
                  de servir às medicinas da floresta com respeito, disciplina,
                  ética, profundo compromisso espiritual e com a essencial
                  conexão com a Natureza.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Somos um espaço de cuidado, autoconhecimento e reconexão com a
                  essência da vida, guiados pelas tradições ancestrais dos povos
                  originários da Amazônia na feitura e utilização da Ayahuasca e
                  pelo apreço ao sincretismo religioso e a tradição dos
                  trabalhos com a bebida sagrada em diferentes linhas do Santo
                  Daime.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Nossa casa atua em conformidade com a Resolução CONAD nº
                  13/2025, que reconhece o uso religioso da Ayahuasca, zelando
                  por práticas responsáveis, seguras e alinhadas aos princípios
                  do direito à liberdade religiosa e à dignidade humana.
                </p>
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
                Princípios que nos guiam
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Os valores fundamentais que orientam nossa prática e conduta
                espiritual
              </p>
            </div>

            <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
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
                    className="lucide lucide-book-open w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Tradição
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Honramos os saberes ancestrais e as formas tradicionais de
                    preparo e condução das cerimônias com Ayahuasca, bem como o
                    respeito as linhas do Santo Daime e ao sincretismo
                    étnico-religioso.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
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
                    className="lucide lucide-star w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Consciência
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Autoconhecimento, evolução espiritual, resolução de conflitos
                    internos, confiança, meditação, prática dos valores,
                    realização, compromisso com a verdade e humildade.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
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
                    className="lucide lucide-heart w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Autocura
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Consagração, participação, aprendizado, entendimento,
                    reconhecimento, busca, intenção de mudar, fé e esperança.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
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
                    className="lucide lucide-users w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Disciplina
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Respeito, dedicação, eficiência, apoio, organização, limpeza,
                    ordem, cumprimento de horários e escalas, higiene e
                    alimentação saudável.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
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
                    className="lucide lucide-shield w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Segurança
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seguimos protocolos rigorosos de cuidado físico, emocional e
                    energético antes, durante e após as cerimônias.
                  </p>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
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
                    className="lucide lucide-leaf w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-lg text-primary"
                  >
                    Espiritualidade
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Apoiamos jornadas de autoconhecimento com base na verdade
                    interior, no silêncio e na escuta do coração.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Nossa História
              </h2>
            </div>
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="shrink-0">
                <div className="h-44 w-44 overflow-hidden rounded-full bg-muted/20 shadow-sm ring-1 ring-border/50 md:h-56 md:w-56">
                  <img
                    src="/retrato-v2.jpg"
                    alt="Retrato"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  O Instituto Estrela Azul foi fundado pelo Padrinho Ademar Bosi.
                  Como fardado, dedicou-se por mais de 15 anos aos trabalhos de
                  cura no Santo Daime, um buscador experiente e comprometido com o
                  caminho do Sagrado.
                </p>
                <p className="text-pretty">
                  Caminho este, marcado por inúmeras vivências em trabalhos de
                  auto-cura com dependentes químicos, com a caridade e demais
                  experiências com as medicinas da floresta em conexão com a
                  Natureza à luz de diferentes tradições ancestrais do Xamanismo,
                  mantém um aprendizado contínuo e profundo respeito pelas
                  tradições ligadas ao enteógeno Ayahuasca.
                </p>
                <p className="text-pretty">
                  Criamos um espaço seguro, acolhedor e harmonizado com a
                  Natureza, onde cada pessoa é convidada a vivenciar seu processo
                  de forma autêntica, respeitosa e acompanhada pela prática do
                  amor.
                </p>
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
                Nossa Estrutura
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Conheça a organização do Instituto e as responsabilidades de
                cada função
              </p>
            </div>

            <div className="cards-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
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
                      className="lucide lucide-star w-8 h-8 text-primary"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-xl text-primary"
                  >
                    Padrinho Ademar
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Orientador espiritual e líder da casa
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Conduz preces, abertura e fechamento dos trabalhos</li>
                    <li>• Ministra a sagrada medicina indígena Ayahuasca</li>
                    <li>• Orienta Integrantes da Casa e Buscadores</li>
                    <li>• Decide sobre os assuntos relativos ao Instituto</li>
                    <li>• Conduz trabalhos espirituais e batismos</li>
                    <li>• Apoia o desenvolvimento dos membros da casa</li>
                  </ul>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
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
                      className="lucide lucide-heart w-8 h-8 text-primary"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-xl text-primary"
                  >
                    Madrinha Milena
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Orientadora espiritual e líder da casa
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Conduz preces, abertura e fechamento dos trabalhos</li>
                    <li>• Ministra a sagrada medicina indígena Ayahuasca</li>
                    <li>• Orienta Integrantes da Casa e Buscadores</li>
                    <li>• Decide sobre os assuntos relativos ao Instituto</li>
                    <li>• Conduz trabalhos espirituais</li>
                    <li>• Apoia o desenvolvimento dos membros da casa</li>
                  </ul>
                </div>
              </div>

              <div
                data-slot="card"
                className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
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
                      className="lucide lucide-shield w-8 h-8 text-primary"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  </div>
                  <div
                    data-slot="card-title"
                    className="font-semibold text-xl text-primary"
                  >
                    Guardiões
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Cuidam e apoiam outros buscadores
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Prestam apoio durante os trabalhos</li>
                    <li>• Conhecem a legislação sobre Ayahuasca</li>
                    <li>• Mantêm discrição e respeito</li>
                    <li>• Colaboram na organização da casa</li>
                  </ul>
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
              Acesso Responsável
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Todas as nossas cerimônias e meditações são previamente
              organizadas com entrevistas individuais, orientações detalhadas,
              com total segurança e apoio. Aqui você é bem acolhido!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


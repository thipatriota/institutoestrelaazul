import { FaqAccordion } from "@/components/faq-accordion";

export default function FaqPage() {
  const items = [
    {
      question: "O que é a Ayahuasca?",
      answer:
        "A Ayahuasca é uma bebida sacramental tradicional dos povos originários da Amazônia, utilizada em contextos espirituais e de autoconhecimento."
    },
    {
      question: "É seguro participar das cerimônias?",
      answer:
        "A segurança envolve preparo, entrevista prévia, cuidado com contraindicações e acompanhamento durante todo o trabalho. Sempre fale conosco antes de participar."
    },
    {
      question: "Preciso ter experiência anterior?",
      answer:
        "Não. Recebemos pessoas sem experiência, desde que passem pela conversa preparatória e sigam as orientações de preparação."
    },
    {
      question: "Há contraindicações médicas?",
      answer:
        "Sim. Algumas condições de saúde e o uso de certos medicamentos podem impedir a participação. A conversa preparatória serve para avaliar isso com responsabilidade."
    },
    {
      question: "Como me preparar para uma cerimônia?",
      answer:
        "A preparação costuma incluir orientações de alimentação, descanso e cuidados emocionais. Após o contato, enviamos instruções completas conforme o tipo de trabalho."
    },
    {
      question: "Quanto tempo dura uma cerimônia?",
      answer:
        "A duração varia conforme o trabalho e a condução. Informamos horário e orientações da cerimônia escolhida no momento do agendamento."
    },
    {
      question: "Posso trazer acompanhante?",
      answer:
        "Depende do trabalho e do processo de preparo. Se desejar, informe no contato para avaliarmos juntos a melhor forma de participação."
    },
    {
      question: "Vocês oferecem acompanhamento pós-cerimônia?",
      answer:
        "Sim. Orientamos sobre integração e estamos disponíveis para suporte após o trabalho, especialmente para quem está iniciando a jornada."
    },
    {
      question: "Como faço para agendar minha participação?",
      answer:
        "Entre em contato e faremos a pré-inscrição e a conversa preparatória. Depois disso, confirmamos a data conforme a agenda de cerimônias."
    },
    {
      question: "O que devo levar para a cerimônia?",
      answer:
        "Itens comuns incluem documento, garrafa de água e roupas confortáveis. A lista exata é enviada no agendamento junto das orientações."
    },
    {
      question: "A consagração da Ayahuasca é permitida no Brasil?",
      answer:
        "O uso religioso é reconhecido no Brasil, seguindo diretrizes e boas práticas. Trabalhamos com responsabilidade, ética e cuidado com cada buscador."
    }
  ];

  return (
    <>
      <section className="page-banner bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Esclareça suas dúvidas sobre as cerimônias e medicinas da floresta
            </p>
          </div>
        </div>
      </section>

      <section className="biography py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bio-content max-w-4xl mx-auto">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
                Dúvidas Mais Comuns
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Encontre respostas para as principais questões sobre nossas
                cerimônias e práticas espirituais
              </p>
            </div>

            <FaqAccordion items={items} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Nossa equipe está pronta para esclarecer todas as suas questões e
              orientá-lo em sua jornada espiritual.
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
                Ver Agenda de Cerimônias
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


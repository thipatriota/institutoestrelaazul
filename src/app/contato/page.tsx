export default function ContatoPage() {
  return (
    <>
      <section className="page-banner bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Estamos aqui para esclarecer suas dúvidas e acompanhá-lo em sua
              jornada espiritual
            </p>
          </div>
        </div>
      </section>

      <section className="biography py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bio-content max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                  >
                    <div
                      data-slot="card-title"
                      className="font-semibold text-2xl text-primary"
                    >
                      Formulário de Contato
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground text-sm"
                    >
                      Preencha o formulário abaixo e entraremos em contato com
                      você
                    </div>
                  </div>
                  <div data-slot="card-content" className="px-6">
                    <form className="space-y-6">
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
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
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
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
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
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
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
                          defaultValue=""
                          className="border-input text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
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
                          defaultValue=""
                          className="border-input text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
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
                          defaultValue=""
                          className="border-input text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
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
                          placeholder="Conte-nos sobre suas intenções, dúvidas ou qualquer informação que considere importante..."
                          className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <input
                            id="terms"
                            required
                            type="checkbox"
                            className="peer border-input dark:bg-input/30 checked:bg-primary checked:text-primary-foreground dark:checked:bg-primary checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px]"
                          />
                          <label
                            className="flex items-center gap-2 font-medium select-none text-sm leading-relaxed"
                            htmlFor="terms"
                          >
                            Li e aceito que as informações fornecidas são
                            verdadeiras e que entendo a necessidade de conversa
                            preparatória antes da participação *
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            id="newsletter"
                            type="checkbox"
                            className="peer border-input dark:bg-input/30 checked:bg-primary checked:text-primary-foreground dark:checked:bg-primary checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px]"
                          />
                          <label
                            className="flex items-center gap-2 font-medium select-none text-sm"
                            htmlFor="newsletter"
                          >
                            Desejo receber informações sobre eventos e novidades
                            do instituto
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            id="privacy"
                            required
                            type="checkbox"
                            className="peer border-input dark:bg-input/30 checked:bg-primary checked:text-primary-foreground dark:checked:bg-primary checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px]"
                          />
                          <label
                            className="flex items-center gap-2 font-medium select-none text-sm"
                            htmlFor="privacy"
                          >
                            Concordo com a Política de Privacidade *
                          </label>
                        </div>
                      </div>

                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full"
                        type="submit"
                      >
                        Enviar mensagem
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                  >
                    <div
                      data-slot="card-title"
                      className="font-semibold text-xl text-primary"
                    >
                      Localização
                    </div>
                  </div>
                  <div data-slot="card-content" className="px-6">
                    <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.841372642398!2d-49.2607937!3d-25.4814485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4cc728fc2df%3A0xad65e26949d8e5e3!2sRua%20Major%20Theolindo%20Ferreira%20Ribas%2C%20517%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081630-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do Instituto Estrela Azul"
                      />
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                      href="https://www.google.com/maps/place/Rua+Major+Theolindo+Ferreira+Ribas,+517+-+Hauer,+Curitiba+-+PR,+81630-100/@-25.4814485,-49.2607937,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce4cc728fc2df:0xad65e26949d8e5e3!8m2!3d-25.4814485!4d-49.2582188!16s%2Fg%2F11c5h_d6rc?entry=ttu"
                    >
                      Ver no Google Maps
                    </a>
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
                    <div
                      data-slot="card-title"
                      className="font-semibold text-xl text-primary"
                    >
                      Canais de Atendimento
                    </div>
                  </div>
                  <div data-slot="card-content" className="px-6 space-y-4">
                    <div className="flex items-center space-x-3">
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
                        className="lucide lucide-message-circle h-5 w-5 text-secondary"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          href="https://wa.me/5541996378775"
                        >
                          (41) 99637-8775
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
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
                        className="lucide lucide-instagram h-5 w-5 text-accent"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          href="https://www.instagram.com/institutoestrelaazulayaoficial/"
                        >
                          @institutoestrelaazulayaoficial
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
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
                        className="lucide lucide-mail h-5 w-5 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <div>
                        <p className="font-medium">E-mail</p>
                        <a
                          className="text-muted-foreground hover:text-primary transition-colors"
                          href="mailto:estrelaazulinstituto@gmail.com"
                        >
                          estrelaazulinstituto@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    data-slot="card"
                    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50"
                  >
                    <div
                      data-slot="card-header"
                      className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon"
                    >
                      <div
                        data-slot="card-title"
                        className="font-semibold text-lg text-primary flex items-center"
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
                          className="lucide lucide-clock h-5 w-5 mr-2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Horário de Atendimento
                      </div>
                    </div>
                    <div data-slot="card-content" className="px-6">
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Segunda a sexta: 8h às 20h</p>
                        <p>Sábados: 9h às 14h</p>
                      </div>
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
                      <div
                        data-slot="card-title"
                        className="font-semibold text-lg text-primary flex items-center"
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
                          className="lucide lucide-map-pin h-5 w-5 mr-2"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Endereço
                      </div>
                    </div>
                    <div data-slot="card-content" className="px-6">
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Rua Major Theolindo Ferreira Ribas, 517</p>
                        <p>Hauer - Curitiba -PR, Brazil </p>
                        <p>CEP: 81630110</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#1f2a3a] py-16">
      <div className="page-container">
        <h2 className="text-center font-serif text-4xl text-white">Contacto</h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
          Se procuras organização e eficiência para a tua empresa, estou disponível para analisar
          as tuas necessidades e apresentar uma proposta de trabalho personalizada.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {/* WhatsApp */}
          <div className="rounded-2xl bg-white/10 p-6 shadow-sm ring-1 ring-white/10">
            <div className="text-sm font-medium text-white/70">WhatsApp</div>
            <div className="mt-4">
              <a
                href="https://wa.me/351963105060"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-2xl bg-white/10 p-6 shadow-sm ring-1 ring-white/10">
            <div className="text-sm font-medium text-white/70">Email</div>
            <div className="mt-2 text-lg font-semibold text-white">
              luiana_2018@hotmail.com
            </div>
            <div className="mt-4">
              <a
                href="mailto:luiana_2018@hotmail.com"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#1f2a3a]"
              >
                Enviar Email
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="rounded-2xl bg-white/10 p-6 shadow-sm ring-1 ring-white/10">
            <div className="text-sm font-medium text-white/70">LinkedIn</div>
            <div className="mt-2 text-lg font-semibold text-white">Perfil</div>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/ana-cl%C3%A1udia-de-s%C3%A1-carvalho-35933b164/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#1f2a3a]"
              >
                Abrir LinkedIn
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="rounded-2xl bg-white/10 p-6 shadow-sm ring-1 ring-white/10">
            <div className="text-sm font-medium text-white/70">Localização</div>
            <div className="mt-2 text-lg font-semibold text-white">Seixal, Setúbal</div>
            <div className="mt-2 text-sm text-white/70">Resposta em até 24h úteis</div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/70">
          Resposta garantida em até 24 horas úteis
        </div>
      </div>
    </section>
  );
}

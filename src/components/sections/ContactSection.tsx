import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const whatsappNumberDisplay = "+351 963 105 060";
  const whatsappNumberLink = "351963105060"; // sem espaços
  const email = "Luiana_2018@hotmail.com";
  const linkedinUrl =
    "https://www.linkedin.com/in/ana-cl%C3%A1udia-de-s%C3%A1-carvalho-35933b164/";
  const locationText = "Seixal, Setúbal";

  return (
    <section id="contacto" className="bg-[#1f2a3a] py-20">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-white">Contacto</h2>
          <p className="mt-4 text-white/80">
            Se procuras organização e eficiência para a tua empresa, estou disponível para analisar
            as tuas necessidades e apresentar uma proposta de trabalho personalizada.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumberLink}`}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-[#2ed365] p-8 shadow-sm transition hover:brightness-95"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                {/* Ícone estilo “bolha” (simples) */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.63a11.92 11.92 0 0 0 5.82 1.49h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.2-3.52-8.41ZM12.06 22a10 10 0 0 1-5.1-1.4l-.37-.22-3.7.97.99-3.6-.24-.38A10 10 0 1 1 12.06 22Zm5.8-7.6c-.32-.16-1.9-.93-2.2-1.04-.3-.12-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.25-.2.21-.39.24-.71.08-.32-.16-1.36-.5-2.59-1.59-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.39.47-.58.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57h-.63c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.37 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z" />
                </svg>
              </div>

              <div className="mt-5 text-lg font-semibold text-white">WhatsApp</div>
              <div className="mt-2 text-white/90">{whatsappNumberDisplay}</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="rounded-2xl bg-white/10 p-8 shadow-sm ring-1 ring-white/10 transition hover:bg-white/12"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Mail className="h-8 w-8 text-white" />
              </div>

              <div className="mt-5 text-lg font-semibold text-white">Email</div>
              <div className="mt-2 break-all text-white/90">{email}</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-[#0b78b8] p-8 shadow-sm transition hover:brightness-95"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                {/* Ícone “in” simples */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0.5 24h4V7.98h-4V24ZM8.5 7.98H12.3v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.75c0-2.09-.04-4.78-2.92-4.78-2.92 0-3.37 2.28-3.37 4.63V24h-4V7.98Z" />
                </svg>
              </div>

              <div className="mt-5 text-lg font-semibold text-white">LinkedIn</div>
              <div className="mt-2 text-white/90">Conectar</div>
            </div>
          </a>

          {/* Localização */}
          <div className="rounded-2xl bg-white/10 p-8 shadow-sm ring-1 ring-white/10">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <MapPin className="h-8 w-8 text-white" />
              </div>

              <div className="mt-5 text-lg font-semibold text-white">Localização</div>
              <div className="mt-2 text-white/90">{locationText}</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/70">
          
        </div>
      </div>
    </section>
  );
}

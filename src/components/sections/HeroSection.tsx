import anaClaudiaPhoto from "@/assets/ana-claudia-photo.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HeroSection() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0">
        <img
          src={heroOffice}
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative page-container py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <div className="inline-flex items-center rounded-full border bg-white/70 px-4 py-2 text-sm text-muted-foreground">
              Consultoria em Gestão
            </div>

            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Consultoria em Gestão <br />
              Administrativa e <br />
              Operacional
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Mais de 16 anos de experiência em organização de processos, gestão de pessoas,
              controlo de stock e apoio à operação diária, com foco na eficiência interna e
              melhoria do desempenho das equipas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton className="px-6 py-4" label="Fale Comigo no WhatsApp" />

              <a href="#servicos" className="inline-block">
                <button
                  type="button"
                  className="rounded-lg border bg-white/70 px-6 py-3 text-sm font-medium"
                >
                  Saiba Mais
                </button>
              </a>
            </div>

            {/* Estatísticas */}
            <div className="mt-10 w-full max-w-lg rounded-2xl border bg-white/70 p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-semibold text-primary">16+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-primary">3</div>
                  <div className="mt-1 text-xs text-muted-foreground">Sectores de Actuação</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-primary">100%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Foco em Resultados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border bg-white/70 shadow-sm">
              {/* moldura */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />

              <img
                src={anaClaudiaPhoto}
                alt="Ana Cláudia"
                className="aspect-[3/4] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

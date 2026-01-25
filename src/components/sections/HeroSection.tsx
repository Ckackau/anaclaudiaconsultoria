import heroImage from "@/assets/hero-office.jpg";
import anaClaudiaPhoto from "@/assets/ana-claudia-photo.jpg";
import { ArrowDown, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Strong Overlay for Readability */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Escritório profissional"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-fade-up order-2 lg:order-1">
            <div className="accent-line mb-8" />
            
            <h1 className="heading-display text-foreground mb-6">
              Ana Cláudia de Sá Carvalho
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-sans">
              Consultoria em Gestão Administrativa e Operacional
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl mb-10">
              Mais de 8 anos de experiência em organização de processos, gestão de pessoas, 
              controlo de stock e apoio à operação diária, com foco na eficiência interna 
              e melhoria do desempenho das equipas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://wa.me/351963105060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale Comigo no WhatsApp</span>
              </a>
              
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-foreground/30 hover:border-accent hover:bg-accent/10 text-foreground font-semibold transition-all duration-300"
              >
                Saiba Mais
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Stats with solid background for contrast */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">8+</p>
                <p className="text-sm font-medium text-foreground/70">Anos de Experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">3</p>
                <p className="text-sm font-medium text-foreground/70">Sectores de Actuação</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">100%</p>
                <p className="text-sm font-medium text-foreground/70">Foco em Resultados</p>
              </div>
            </div>
          </div>

          {/* Photo with elegant frame integration */}
          <div className="order-1 lg:order-2 animate-fade-in flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl" />
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-accent/40 rounded-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              
              {/* Soft glow behind photo */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              {/* Photo container with refined styling */}
              <div className="relative z-10 p-1 bg-gradient-to-br from-card via-card to-accent/10 rounded-2xl shadow-2xl">
                <img
                  src={anaClaudiaPhoto}
                  alt="Ana Cláudia de Sá Carvalho - Consultora em Gestão Administrativa"
                  className="w-72 md:w-80 lg:w-[400px] h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/60 uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

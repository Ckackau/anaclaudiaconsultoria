import { Building2, ShoppingBag, Pill, Briefcase } from "lucide-react";

const experiences = [
  {
    icon: ShoppingBag,
    sector: "Retalho",
    company: "Auchan Retail Portugal",
    role: "Gestão de Unidade / Franquia",
    period: "Desde 2021",
    description: "Gestão operacional de equipas, controlo de stock, organização de processos e apoio à operação diária com foco na eficiência e resultados.",
  },
  {
    icon: Building2,
    sector: "Sector Bancário",
    company: "",
    role: "Gestão Financeira",
    period: "",
    description: "Experiência em operações bancárias, gestão de processos financeiros e atendimento especializado ao cliente.",
  },
  {
    icon: Pill,
    sector: "Sector Farmacêutico",
    company: "",
    role: "Administração",
    period: "",
    description: "Funções administrativas, organização documental e suporte à gestão em ambiente regulamentado.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-warm">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6" />
          <h2 className="heading-section text-foreground mb-6">
            Percurso Profissional
          </h2>
          <p className="text-body">
            Mais de 8 anos de experiência em gestão administrativa e operacional, 
            com percurso nos sectores bancário, farmacêutico e retalho. Esta experiência 
            multissectorial permite uma abordagem adaptada a cada contexto empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-professional group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <exp.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground font-sans">
                    {exp.sector}
                  </h3>
                  {exp.period && (
                    <p className="text-xs text-accent font-medium">{exp.period}</p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {exp.company && (
                  <p className="text-sm font-medium text-foreground/80">{exp.company}</p>
                )}
                {exp.role && (
                  <p className="text-sm text-accent">{exp.role}</p>
                )}
                <p className="text-body text-sm">{exp.description}</p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Skills highlight */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap justify-center gap-4">
            {["Gestão de Equipas", "Controlo de Stock", "Processos Operacionais", "Organização Administrativa", "Eficiência Interna", "Redução de Custos"].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground/80 hover:border-accent/50 hover:text-foreground transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

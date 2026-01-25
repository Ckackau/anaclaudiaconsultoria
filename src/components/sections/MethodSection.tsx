import { Search, Wrench, LineChart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description:
      "Análise detalhada da situação actual da empresa. Identificação de pontos críticos, ineficiências e oportunidades de melhoria na gestão administrativa e operacional.",
    deliverable: "Relatório de diagnóstico",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Organização",
    description:
      "Desenvolvimento e implementação de soluções práticas. Reestruturação de processos, criação de procedimentos e formação das equipas envolvidas.",
    deliverable: "Plano de implementação",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Acompanhamento",
    description:
      "Monitorização dos resultados obtidos. Ajustes necessários e suporte contínuo para garantir a sustentabilidade das melhorias implementadas.",
    deliverable: "Métricas de sucesso",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-section text-foreground mb-6">Como Trabalho</h2>
          <p className="text-body">
            Uma abordagem estruturada em três fases que garante resultados 
            mensuráveis e mudanças duradouras na sua organização.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500 group">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-8 bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    Fase {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-medium text-foreground mb-4 font-serif">
                    {step.title}
                  </h3>
                  
                  <p className="text-body text-sm mb-6">
                    {step.description}
                  </p>

                  {/* Deliverable */}
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    <ArrowRight className="w-4 h-4" />
                    {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;

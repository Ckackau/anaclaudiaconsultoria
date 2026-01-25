import { ClipboardList, Users, Package, Settings, TrendingUp, FileCheck } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Organização Administrativa",
    description:
      "Estruturação de processos administrativos, fluxos de trabalho e documentação para maior eficiência operacional.",
    features: ["Gestão documental", "Optimização de fluxos", "Procedimentos internos"],
  },
  {
    icon: Users,
    title: "Gestão de Pessoas",
    description:
      "Apoio na organização e coordenação de equipas, definição de funções e melhoria da comunicação interna.",
    features: ["Coordenação de equipas", "Definição de funções", "Comunicação interna"],
  },
  {
    icon: Package,
    title: "Controlo de Stock",
    description:
      "Implementação de sistemas de inventário, optimização de stocks e redução de desperdício.",
    features: ["Gestão de inventário", "Redução de perdas", "Previsão de necessidades"],
  },
  {
    icon: Settings,
    title: "Processos Operacionais",
    description:
      "Análise e redesenho de processos para eliminar ineficiências e aumentar a produtividade.",
    features: ["Mapeamento de processos", "Eliminação de falhas", "Automação"],
  },
  {
    icon: TrendingUp,
    title: "Melhoria de Desempenho",
    description:
      "Identificação de oportunidades de melhoria e implementação de métricas de acompanhamento.",
    features: ["KPIs operacionais", "Análise de resultados", "Planos de acção"],
  },
  {
    icon: FileCheck,
    title: "Apoio à Gestão",
    description:
      "Suporte diário às operações, resolução de problemas e acompanhamento de projectos.",
    features: ["Suporte operacional", "Gestão de projectos", "Reporting"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-section text-foreground mb-6">O Que Faço</h2>
          <p className="text-body">
            Apoio pequenas e médias empresas na organização da gestão administrativa, 
            melhoria de processos internos, controlo de stock e coordenação de equipas. 
            Soluções práticas para resultados concretos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-professional group"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground font-sans pt-2">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-body text-sm mb-6 flex-grow">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 pt-4 border-t border-border">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

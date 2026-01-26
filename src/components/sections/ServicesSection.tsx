import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Organização Administrativa",
    desc: "Estruturação de processos administrativos, fluxos de trabalho e documentação para maior eficiência operacional.",
    bullets: ["Gestão documental", "Optimização de fluxos", "Procedimentos internos"],
  },
  {
    title: "Gestão de Pessoas",
    desc: "Apoio na organização e coordenação de equipas, definição de funções e melhoria da comunicação interna.",
    bullets: ["Coordenação de equipas", "Definição de funções", "Comunicação interna"],
  },
  {
    title: "Controlo de Stock",
    desc: "Implementação de sistemas de inventário, optimização de stocks e redução de desperdício.",
    bullets: ["Gestão de inventário", "Redução de perdas", "Previsão de necessidades"],
  },
  {
    title: "Processos Operacionais",
    desc: "Análise e redesenho de processos para eliminar desperdícios e aumentar a produtividade.",
    bullets: ["Mapeamento de processos", "SOPs e checklists", "Rotinas de controlo"],
  },
  {
    title: "Melhoria de Desempenho",
    desc: "Identificação de oportunidades de melhoria e implementação de métricas para acompanhar resultados.",
    bullets: ["Indicadores (KPIs)", "Relatórios simples", "Ritmo de acompanhamento"],
  },
  {
    title: "Apoio à Gestão",
    desc: "Suporte prático à operação: organização, prioridades, rotinas e controlo do dia-a-dia.",
    bullets: ["Planeamento semanal", "Controlo de tarefas", "Gestão de prioridades"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-14 md:py-20">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">O que faço</h2>
          <p className="mt-3 text-muted-foreground">
            Apoio pequenas e médias empresas na organização da gestão administrativa, melhoria de processos internos,
            controlo de stock e coordenação de equipas. Soluções práticas para resultados concretos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

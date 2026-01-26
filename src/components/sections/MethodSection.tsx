import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    phase: "Fase 01",
    title: "Diagnóstico",
    desc: "Análise detalhada da situação actual da empresa. Identificação de pontos críticos, ineficiências e oportunidades de melhoria na gestão administrativa e operacional.",
    hint: "Relatório de diagnóstico",
  },
  {
    phase: "Fase 02",
    title: "Organização",
    desc: "Desenvolvimento e implementação de soluções práticas. Reestruturação de processos, criação de procedimentos e formação das equipas envolvidas.",
    hint: "Plano de implementação",
  },
  {
    phase: "Fase 03",
    title: "Acompanhamento",
    desc: "Monitorização dos resultados obtidos. Ajustes necessários e suporte contínuo para garantir a sustentabilidade das melhorias implementadas.",
    hint: "Métricas de sucesso",
  },
];

export default function MethodSection() {
  return (
    <section id="metodo" className="bg-slate-50 py-14 md:py-20">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Método</h2>
          <p className="mt-3 text-muted-foreground">
            Uma abordagem estruturada em três fases que garante resultados mensuráveis e mudanças duradouras na tua organização.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title} className="h-full">
              <CardHeader>
                <div className="mb-2 inline-flex w-fit rounded-full border bg-white px-3 py-1 text-xs text-muted-foreground">
                  {s.phase}
                </div>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 text-sm text-slate-500">→ {s.hint}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

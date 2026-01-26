import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Retalho",
    subtitle: "Auchan Retail Portugal",
    role: "Gestão de Unidade / Franquia",
    desc: "Gestão operacional de equipas, controlo de stock, organização de processos e apoio à operação diária com foco na eficiência e resultados.",
    meta: "Desde 2021",
  },
  {
    title: "Sector Bancário",
    subtitle: "Gestão Financeira",
    role: "Operações e Processos",
    desc: "Experiência em operações bancárias, gestão de processos financeiros e atendimento especializado ao cliente.",
    meta: "Experiência anterior",
  },
  {
    title: "Sector Farmacêutico",
    subtitle: "Administração",
    role: "Processos e Organização",
    desc: "Funções administrativas, organização documental e suporte à gestão em ambiente regulamentado.",
    meta: "Experiência anterior",
  },
];

const tags = [
  "Gestão de Equipas",
  "Controlo de Stock",
  "Processos Operacionais",
  "Organização Administrativa",
  "Eficiência Interna",
  "Redução de Custos",
];

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-14 md:py-20">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Experiência</h2>
          <p className="mt-3 text-muted-foreground">
            Experiência multissectorial que permite uma abordagem adaptada a cada contexto empresarial.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {experiences.map((e) => (
            <Card key={e.title} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{e.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{e.meta}</span>
                </div>
                <div className="text-sm text-muted-foreground">{e.subtitle}</div>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">{e.role}</div>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <Badge key={t} variant="outline" className="px-4 py-2 text-sm">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="page-container py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="leading-tight">
            <div className="text-base font-semibold">Ana Cláudia de Sá Carvalho</div>
            <div className="text-sm text-muted-foreground">
              Consultoria em Gestão Administrativa e Operacional
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

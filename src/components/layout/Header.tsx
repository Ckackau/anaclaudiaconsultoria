import NavLink from "@/components/NavLink";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        {/* Logo clicável para o topo */}
        <a href="#topo" className="leading-tight">
          <div className="text-xl font-semibold">Ana Cláudia</div>
          <div className="text-sm text-muted-foreground">Consultoria em Gestão</div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#servicos" label="Serviços" />
          <NavLink href="#metodo" label="Método" />
          <NavLink href="#experiencia" label="Experiência" />
          <NavLink href="#contacto" label="Contacto" />
        </nav>

        {/* Mantém só este CTA no header (o flutuante fica no Index.tsx) */}
        <WhatsAppButton label="WhatsApp" className="rounded-lg px-5 py-3" />
      </div>
    </header>
  );
}

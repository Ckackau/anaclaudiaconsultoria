import { Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <p className="text-lg font-serif font-medium text-foreground mb-2">Ana Cláudia de Sá Carvalho</p>
            <p className="text-sm text-muted-foreground">Consultoria em Gestão Administrativa e Operacional</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/351963105060"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ana-cl%C3%A1udia-de-s%C3%A1-carvalho-35933b164/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Luiana_2018@hotmail.com"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Todos os direitos reservados.</p>
            <p className="text-sm text-muted-foreground">Seixal, Setúbal, Portugal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

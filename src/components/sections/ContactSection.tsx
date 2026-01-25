import { Mail, Linkedin, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-8 bg-accent" />
            
            <h2 className="heading-section mb-6">Vamos Trabalhar Juntos</h2>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Se procura organização e eficiência para a sua empresa, 
              estou disponível para analisar as suas necessidades e apresentar 
              uma proposta de trabalho personalizada.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a
              href="https://wa.me/351963105060"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8" />
              <div className="text-center">
                <p className="font-medium mb-1">WhatsApp</p>
                <p className="text-sm opacity-90">+351 963 105 060</p>
              </div>
            </a>

            <a
              href="mailto:Luiana_2018@hotmail.com"
              className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-8 h-8" />
              <div className="text-center">
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm opacity-90 break-all">Luiana_2018@hotmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ana-cl%C3%A1udia-de-s%C3%A1-carvalho-35933b164/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-[#0077B5] hover:bg-[#006699] text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-8 h-8" />
              <div className="text-center">
                <p className="font-medium mb-1">LinkedIn</p>
                <p className="text-sm opacity-90">Conectar</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-primary-foreground/10">
              <MapPin className="w-8 h-8" />
              <div className="text-center">
                <p className="font-medium mb-1">Localização</p>
                <p className="text-sm opacity-90">Seixal, Setúbal</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-primary-foreground/60">
              Resposta garantida em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

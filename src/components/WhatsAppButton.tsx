type WhatsAppButtonProps = {
  className?: string;
  label?: string;
};

const WHATSAPP_NUMBER = "351963105060"; // sem espaços, com código do país
const DEFAULT_MESSAGE = "Olá Ana Cláudia, vi o teu site e gostava de pedir uma proposta.";

export default function WhatsAppButton({ className = "", label = "WhatsApp" }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors " +
        className
      }
    >
      {label}
    </a>
  );
}

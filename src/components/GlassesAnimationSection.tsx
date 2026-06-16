import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl } from "@/lib/site";

const glassesMessage =
  "Olá! Vim pelo site da Óticas Olhar e quero ajuda para escolher uma armação.";

export function GlassesAnimationSection() {
  return (
    <section
      className="olhar-glasses-motion-section"
      aria-labelledby="glasses-motion-title"
    >
      <div className="site-shell olhar-glasses-motion-shell">
        <AnimatedReveal className="olhar-glasses-motion-copy">
          <p className="eyebrow">Escolha com calma</p>
          <h2 id="glasses-motion-title">
            Encontre uma armação que combine com seu olhar.
          </h2>
          <p>
            Formato, conforto e lente certa caminham juntos. A gente te orienta
            para escolher com segurança, sem pressa e com opções que fazem
            sentido para sua rotina.
          </p>
          <a
            href={buildWhatsAppUrl(glassesMessage)}
            className="button button-red"
            aria-label="Chamar a Óticas Olhar no WhatsApp para escolher uma armação"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Quero ajuda para escolher
          </a>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-glasses-motion-stage" delay={0.12}>
          <div className="olhar-glasses-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="olhar-glasses-card">
            <Image
              src="/oculos.jpg"
              alt="Armação preta de óculos"
              width={800}
              height={800}
              className="olhar-glasses-image"
            />
            <span className="olhar-glasses-shine" aria-hidden="true" />
          </div>
          <div className="olhar-glasses-tags" aria-hidden="true">
            <span>conforto</span>
            <span>estilo</span>
            <span>clareza</span>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

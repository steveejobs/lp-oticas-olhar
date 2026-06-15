import Image from "next/image";
import { Glasses, MessageCircle, Sparkles } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import { buildWhatsAppUrl, media, site } from "@/lib/site";

const framesMessage =
  "Olá! Vim pelo site da Óticas Olhar e quero ver opções de armações.";

export function LensHero() {
  return (
    <section className="olhar-hero" aria-labelledby="hero-title">
      <div className="site-shell olhar-hero-grid">
        <AnimatedReveal className="olhar-hero-copy">
          <Image
            src={site.logoIcon}
            width={154}
            height={154}
            alt="Óticas Olhar GLC"
            priority
            className="olhar-hero-logo"
          />
          <p className="eyebrow">Ótica boutique em Araguaína</p>
          <h1 id="hero-title">Sua visão merece uma experiência à altura.</h1>
          <p>
            Na Óticas Olhar, você encontra armações, óculos de sol e lentes com
            atendimento próximo, ambiente confortável e orientação clara para
            escolher com segurança.
          </p>

          <div className="hero-actions olhar-hero-actions">
            <a
              href={site.whatsappUrl}
              className="button button-red"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Agendar atendimento
            </a>
            <a
              href={buildWhatsAppUrl(framesMessage)}
              className="button button-ghost"
              aria-label="Ver opções de armações pelo WhatsApp"
            >
              <Glasses size={18} aria-hidden="true" />
              Ver opções de armações
            </a>
          </div>

          <GoogleRatingBadge
            variant="inline"
            rating={site.rating.toFixed(1).replace(".", ",")}
            reviews={`${site.reviewCount} avaliações`}
            className="olhar-hero-rating"
          />
        </AnimatedReveal>

        <AnimatedReveal className="olhar-hero-visual" delay={0.12}>
          <div className="olhar-hero-media">
            <video
              src={media.heroVideo}
              poster={media.heroPoster}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-label="Vídeo de armações e vitrine da Óticas Olhar"
            />
            <span className="lens-sweep" aria-hidden="true" />
            <span className="optic-line" aria-hidden="true" />
          </div>
          <div className="olhar-hero-note">
            <Sparkles size={18} aria-hidden="true" />
            <span>Armações, solares e lentes com orientação clara.</span>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

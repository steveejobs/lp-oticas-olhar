import Image from "next/image";
import { Glasses, MessageCircle, Sparkles } from "lucide-react";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import { buildWhatsAppUrl, site } from "@/lib/site";

const framesMessage =
  "Olá! Vim pelo site da Óticas Olhar e quero ver opções de armações.";

export function LensHero() {
  return (
    <section className="olhar-hero" aria-labelledby="hero-title">
      <div className="site-shell olhar-hero-grid">
        <div className="olhar-hero-copy">
          <Image
            src={site.logoIcon}
            width={132}
            height={132}
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

          <div className="hero-actions">
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
        </div>

        <div className="olhar-hero-visual" aria-label="Vitrine da Óticas Olhar">
          <div className="olhar-hero-media">
            <Image
              src={site.heroImage}
              alt="Armação de óculos em destaque na Óticas Olhar"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 92vw, 560px"
            />
          </div>
          <div className="olhar-hero-note">
            <Sparkles size={18} aria-hidden="true" />
            <span>Armações, solares e lentes com orientação clara.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

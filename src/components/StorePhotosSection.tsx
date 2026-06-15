import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl } from "@/lib/site";

const gallery = {
  main: {
    src: "/galeria%20cole%C3%A7%C3%A3o/Maximalista%20na%20medida%20certa.%20%F0%9F%98%8E%E2%9C%A8Esse%20modelo%20entrega%20presen%C3%A7a%20de%20longe%20%E2%80%94%20daqueles%20que%20transformam.jpg",
    alt: "Óculos solar de presença na vitrine da Óticas Olhar",
  },
  supports: [
    {
      src: "/galeria%20cole%C3%A7%C3%A3o/Dourada%2C%20elegante%20e%20cheia%20de%20personalidade.%20%F0%9F%98%8E%20A%20arma%C3%A7%C3%A3o%20de%20grau%20Ray-Ban%20%C3%A9%20perfeita%20para%20quem%20qu.jpg",
      alt: "Armação de grau dourada da Óticas Olhar",
    },
    {
      src: "/galeria%20cole%C3%A7%C3%A3o/Quebrando%20o%20padr%C3%A3o%20da%20melhor%20forma.O%20modelo%20Cavaleira%20azul%20degrad%C3%AA%20traz%20a%20personalidade%20das%20arma.jpg",
      alt: "Armação azul degradê da Óticas Olhar",
    },
  ],
};

export function StorePhotosSection() {
  return (
    <section
      id="vitrine"
      className="section store-photos-section olhar-gallery-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell olhar-gallery-layout">
        <AnimatedReveal className="olhar-gallery-media">
          <div className="olhar-gallery-main">
            <Image
              src={gallery.main.src}
              alt={gallery.main.alt}
              fill
              sizes="(max-width: 900px) 92vw, 620px"
              loading="lazy"
            />
          </div>
          <div className="olhar-gallery-supports">
            {gallery.supports.map((image) => (
              <div className="olhar-gallery-small" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 44vw, 280px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="section-heading compact olhar-gallery-copy">
          <p className="eyebrow">Vitrine</p>
          <h2 id="store-photos-title">
            Armações e solares para escolher com calma.
          </h2>
          <p>
            Uma curadoria visual para quem procura conforto, presença e uma
            escolha que combine com o rosto, a rotina e o estilo.
          </p>
          <a
            href={buildWhatsAppUrl(
              "Olá! Vim pelo site da Óticas Olhar e quero conhecer opções da vitrine.",
            )}
            className="button button-ghost"
            aria-label="Conhecer opções da vitrine pelo WhatsApp"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Pedir orientação
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}

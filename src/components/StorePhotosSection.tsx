import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, media } from "@/lib/site";

const gallerySections = [
  {
    eyebrow: "Armações",
    title: "Modelos de grau com presença e conforto.",
    text: "Uma curadoria para experimentar com calma e encontrar a armação que conversa com seu rosto, sua rotina e seu estilo.",
    type: "image",
    src: "/galeria%20cole%C3%A7%C3%A3o/Um%20cl%C3%A1ssico%20que%20nunca%20erra-%20arma%C3%A7%C3%A3o%20quadrada%2C%20fosca%20e%20cheia%20de%20presen%C3%A7a.Discreto%20no%20brilho%2C%20marc%20(1).jpg",
    alt: "Armação de grau azul em modelo masculino na Óticas Olhar",
  },
  {
    eyebrow: "Óculos de sol",
    title: "Solares para elevar o visual sem perder leveza.",
    text: "Peças com personalidade, lentes marcantes e acabamento pensado para quem quer proteção com estilo.",
    type: "image",
    src: "/galeria%20cole%C3%A7%C3%A3o/Maximalista%20na%20medida%20certa.%20%F0%9F%98%8E%E2%9C%A8Esse%20modelo%20entrega%20presen%C3%A7a%20de%20longe%20%E2%80%94%20daqueles%20que%20transformam.jpg",
    alt: "Óculos solar de presença na vitrine da Óticas Olhar",
  },
  {
    eyebrow: "Atendimento",
    title: "Escolha guiada, com orientação clara.",
    text: "Do primeiro teste ao ajuste final, o atendimento ajuda você a decidir com segurança e sem pressa.",
    type: "video",
    src: media.experienceVideo,
    poster: media.heroPoster,
    alt: "Vídeo do atendimento e ambiente da Óticas Olhar",
  },
  {
    eyebrow: "Experiência da loja",
    title: "Ambiente premium para ver cada detalhe.",
    text: "A vitrine, o espaço e o cuidado no atendimento criam uma experiência mais tranquila para escolher melhor.",
    type: "video",
    src: media.heroVideo,
    poster: media.heroPoster,
    alt: "Vídeo da vitrine e experiência da loja Óticas Olhar",
  },
];

export function StorePhotosSection() {
  return (
    <section
      id="vitrine"
      className="section store-photos-section olhar-gallery-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell olhar-gallery-shell">
        <AnimatedReveal className="section-heading compact olhar-gallery-intro">
          <p className="eyebrow">Vitrine</p>
          <h2 id="store-photos-title">
            Uma sequência visual para escolher com calma.
          </h2>
          <p>
            Armações, solares, atendimento e ambiente aparecem em blocos mais
            leves, com uma leitura limpa e alinhada à identidade da Óticas
            Olhar.
          </p>
        </AnimatedReveal>

        <div className="olhar-gallery-sections">
          {gallerySections.map((item, index) => (
            <AnimatedReveal
              className={`olhar-gallery-panel${item.type === "video" ? " is-video" : ""}`}
              delay={index * 0.05}
              key={item.title}
            >
              <div className="olhar-gallery-panel-media">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="metadata"
                    aria-label={item.alt}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 92vw, 560px"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="olhar-gallery-panel-copy">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="olhar-gallery-cta">
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

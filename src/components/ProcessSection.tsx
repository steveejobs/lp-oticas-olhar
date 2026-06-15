import {
  BadgeCheck,
  Glasses,
  HeartHandshake,
  MessageSquareText,
  Play,
  Store,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { media } from "@/lib/site";

const experienceItems = [
  { icon: BadgeCheck, text: "Atendimento elogiado por clientes" },
  { icon: Store, text: "Ambiente amplo e confortável" },
  { icon: Glasses, text: "Variedade de armações e solares" },
  { icon: MessageSquareText, text: "Orientação com clareza" },
  { icon: HeartHandshake, text: "Assistência e pós-venda" },
];

export function ProcessSection() {
  return (
    <section
      id="experiencia"
      className="section process-section olhar-experience-section"
      aria-labelledby="experience-title"
    >
      <div className="site-shell olhar-experience-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Experiência Óticas Olhar</p>
          <h2 id="experience-title">
            Veja de perto a experiência Óticas Olhar.
          </h2>
          <p>
            Ambiente confortável, variedade de armações e atendimento para
            escolher com calma.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-experience-video-card" delay={0.08}>
          <div className="olhar-experience-video-frame">
            <video
              src={media.experienceVideo}
              poster={media.heroPoster}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Vídeo da experiência na Óticas Olhar"
            />
            <span className="video-glass-frame" aria-hidden="true" />
          </div>
          <div className="olhar-experience-video-caption">
            <Play size={17} aria-hidden="true" />
            <span>Vitrine, atendimento e detalhes para escolher melhor.</span>
          </div>
        </AnimatedReveal>

        <div className="olhar-experience-list">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedReveal
                className="olhar-experience-item"
                key={item.text}
                delay={index * 0.04}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.text}</span>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

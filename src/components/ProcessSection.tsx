import {
  BadgeCheck,
  Glasses,
  HeartHandshake,
  MessageSquareText,
  Store,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

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
            Atendimento claro, escolha segura e uma experiência mais
            confortável.
          </h2>
          <p>
            Na Óticas Olhar, você não escolhe apenas uma armação. Você recebe
            orientação para encontrar conforto, estética e lentes adequadas à
            sua rotina.
          </p>
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

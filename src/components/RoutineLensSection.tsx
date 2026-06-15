"use client";

import {
  CarFront,
  Glasses,
  MonitorSmartphone,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl } from "@/lib/site";

const choices = [
  {
    icon: CarFront,
    title: "Para dirigir à noite",
    text: "Mais conforto contra faróis, reflexos e cansaço visual.",
    message:
      "Olá! Vim pelo site da Óticas Olhar e quero orientação para óculos/lentes para dirigir à noite.",
  },
  {
    icon: MonitorSmartphone,
    title: "Para trabalhar no computador",
    text: "Opções pensadas para quem passa muitas horas em telas.",
    message:
      "Olá! Vim pelo site da Óticas Olhar e quero orientação para óculos/lentes para trabalhar no computador.",
  },
  {
    icon: Sparkles,
    title: "Para renovar o estilo",
    text: "Armações que valorizam seu rosto e combinam com sua personalidade.",
    message:
      "Olá! Vim pelo site da Óticas Olhar e quero ver armações para renovar meu estilo.",
  },
  {
    icon: Sun,
    title: "Para proteger os olhos no sol",
    text: "Óculos solares com estilo, conforto e proteção para o dia a dia.",
    message:
      "Olá! Vim pelo site da Óticas Olhar e quero conhecer opções de óculos de sol.",
  },
  {
    icon: Glasses,
    title: "Para o primeiro óculos",
    text: "Atendimento cuidadoso para quem quer escolher sem pressa e sem dúvida.",
    message:
      "Olá! Vim pelo site da Óticas Olhar e quero ajuda para escolher meu primeiro óculos.",
  },
];

export function RoutineLensSection() {
  return (
    <section
      id="rotina"
      className="section routine-lens-section"
      aria-labelledby="routine-lens-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Escolha guiada</p>
          <h2 id="routine-lens-title">
            Escolha seus óculos com mais segurança
          </h2>
          <p>
            Cada rotina pede uma lente, uma armação e um tipo de conforto. A
            equipe da Óticas Olhar ajuda você a encontrar a melhor opção para o
            seu dia a dia.
          </p>
        </AnimatedReveal>

        <div className="olhar-choice-grid">
          {choices.map((choice, index) => {
            const Icon = choice.icon;

            return (
              <AnimatedReveal
                className="olhar-choice-card"
                key={choice.title}
                delay={index * 0.04}
              >
                <Icon size={22} aria-hidden="true" />
                <h3>{choice.title}</h3>
                <p>{choice.text}</p>
                <a
                  href={buildWhatsAppUrl(choice.message)}
                  aria-label={`${choice.title} pelo WhatsApp`}
                >
                  Conversar sobre isso
                </a>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

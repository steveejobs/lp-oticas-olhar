import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "A equipe ajuda a escolher a armação?",
    answer:
      "Sim. A orientação considera formato do rosto, rotina, conforto e estilo desejado.",
  },
  {
    question: "A Óticas Olhar tem óculos de sol?",
    answer:
      "Sim. A loja trabalha com opções de solares para diferentes estilos e usos no dia a dia.",
  },
  {
    question: "Onde fica a Óticas Olhar?",
    answer: `A Óticas Olhar fica na ${site.locations[0].address}.`,
  },
  {
    question: "Posso chamar pelo WhatsApp antes de ir?",
    answer:
      "Sim. Você pode falar pelo WhatsApp para pedir orientação, tirar dúvidas e combinar o atendimento.",
  },
  {
    question: "Há assistência após a compra?",
    answer:
      "As avaliações destacam atendimento cuidadoso e assistência pós-venda.",
  },
];

export function FAQSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="site-shell faq-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Dúvidas comuns</p>
          <h2 id="faq-title">Perguntas rápidas antes da visita.</h2>
        </AnimatedReveal>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <AnimatedReveal
              className="faq-item"
              key={item.question}
              delay={index * 0.04}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

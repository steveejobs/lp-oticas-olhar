import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  FileText,
  Gem,
  MapPin,
  MessageCircle,
  MousePointer2,
  Search,
  Sparkles,
  Star,
  Store,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, site, testimonialsSummary } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proposta Comercial | Óticas Olhar GLC",
  description:
    "Proposta de atualização digital premium para a Óticas Olhar GLC.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/proposta",
  },
};

const proposalWhatsAppUrl = buildWhatsAppUrl(
  "Olá! Vi a proposta da Óticas Olhar e quero aprovar a atualização do projeto.",
);

const sections = [
  {
    eyebrow: "Diagnóstico",
    title: "O diferencial da Óticas Olhar já existe.",
    text: "As avaliações mostram que o diferencial da Óticas Olhar já existe: atendimento, conforto, variedade, clareza e pós-venda. O que falta é embalar essa percepção em uma presença digital à altura.",
    icon: BadgeCheck,
  },
  {
    eyebrow: "Oportunidade",
    title: "Confiança precisa aparecer rápido.",
    text: "Quando uma pessoa procura por ótica em Araguaína, ela precisa sentir confiança rápido. Site, bio e prova social precisam trabalhar juntos para levar o cliente ao WhatsApp ou à loja.",
    icon: Search,
  },
  {
    eyebrow: "Recomendação",
    title: "Manter o layout premium e trocar a narrativa.",
    text: "Recomendamos manter o layout premium do projeto base, substituindo identidade, imagens, copy e narrativa para posicionar a Óticas Olhar como uma ótica de experiência superior.",
    icon: Gem,
  },
];

const deliverables = [
  "Site institucional premium",
  "Página de bio/linktree",
  "Atualização de identidade visual digital",
  "Copy estratégica",
  "Galeria/vitrine de produtos",
  "Prova social com avaliações reais",
  "CTAs com WhatsApp contextualizado",
  "Localização e rota",
  "SEO local básico",
];

function ProposalButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const className = light
    ? "proposal-button proposal-button-light"
    : "proposal-button proposal-button-primary";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        <span>{children}</span>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      <span>{children}</span>
      <MessageCircle size={18} aria-hidden="true" />
    </a>
  );
}

export default function ProposalPage() {
  return (
    <main className="proposal-page">
      <section className="proposal-hero" aria-labelledby="proposal-title">
        <div className="proposal-shell proposal-hero-grid">
          <AnimatedReveal className="proposal-hero-copy">
            <Link
              className="proposal-logo"
              href="/"
              aria-label="Voltar para o site da Óticas Olhar"
            >
              <Image
                src={site.logoIcon}
                alt=""
                width={54}
                height={54}
                priority
                aria-hidden="true"
              />
              <span>{site.name}</span>
            </Link>

            <div className="proposal-kicker">
              <Store size={16} aria-hidden="true" />
              <span>Site, bio e prova social para uma ótica premium local</span>
            </div>

            <h1 id="proposal-title">
              Uma presença digital premium para transformar a Óticas Olhar em
              referência local.
            </h1>
            <p>
              A ótica já tem o principal: clientes satisfeitos, bom atendimento
              e prova social. O projeto organiza isso em uma experiência
              digital mais bonita, clara e preparada para converter.
            </p>

            <div className="proposal-hero-actions">
              <ProposalButton href={proposalWhatsAppUrl}>
                Aprovar atualização do projeto
              </ProposalButton>
              <ProposalButton href="/" light>
                Ver site
              </ProposalButton>
            </div>
          </AnimatedReveal>

          <AnimatedReveal className="proposal-hero-visual" delay={0.08}>
            <div className="proposal-rating-card">
              <span className="proposal-rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </span>
              <strong>
                {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no
                Google
              </strong>
              <span>{testimonialsSummary.total} avaliações de clientes</span>
            </div>
            <div className="proposal-showcase-main">
              <Image
                src={site.heroImage}
                alt="Vitrine visual da Óticas Olhar"
                fill
                sizes="(min-width: 960px) 420px, 88vw"
                priority
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="strategy-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading proposal-heading-center">
            <span className="proposal-eyebrow">Estratégia</span>
            <h2 id="strategy-title">Separar intenção, aumentar conversão.</h2>
            <p>
              O site conversa com o cliente final, a bio resolve conversão
              rápida no celular e esta proposta fala com o dono sobre o valor do
              projeto.
            </p>
          </AnimatedReveal>

          <div className="proposal-pillar-grid">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <AnimatedReveal
                  key={section.title}
                  className="proposal-pillar-card"
                  delay={index * 0.05}
                >
                  <span className="proposal-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="proposal-eyebrow">{section.eyebrow}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="deliver-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-site-card">
            <div className="proposal-site-copy">
              <span className="proposal-eyebrow">Entregáveis</span>
              <h2 id="deliver-title">O que a atualização contempla</h2>
              <p>
                A atualização transforma o projeto base em uma presença digital
                própria da Óticas Olhar, com identidade, prova social, rotas e
                chamadas para atendimento.
              </p>
            </div>

            <div
              className="proposal-site-includes"
              aria-label="Entregáveis da proposta"
            >
              {deliverables.map((item) => (
                <span key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-final" aria-labelledby="final-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-final-panel">
            <div className="proposal-final-icons" aria-hidden="true">
              <Eye size={24} />
              <FileText size={24} />
              <MousePointer2 size={24} />
              <Sparkles size={24} />
              <MapPin size={24} />
              <MessageCircle size={24} />
            </div>
            <h2 id="final-title">
              Aprovar a atualização é transformar reputação real em presença
              digital clara.
            </h2>
            <div className="proposal-final-actions">
              <ProposalButton href={proposalWhatsAppUrl}>
                Aprovar atualização do projeto
              </ProposalButton>
              <ProposalButton href="/" light>
                Voltar para o site
              </ProposalButton>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}

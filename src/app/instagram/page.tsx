import type { Metadata } from "next";
import Image from "next/image";
import {
  ChevronRight,
  Glasses,
  Globe2,
  MapPin,
  MessageCircle,
  Star,
  Sun,
} from "lucide-react";
import { TestimonialsMobileMarquee } from "@/components/ui/testimonials-columns-1";
import { buildWhatsAppUrl, site, testimonialsSummary } from "@/lib/site";
import { testimonials } from "@/data/testimonials";

const links = [
  {
    label: "Quero atendimento no WhatsApp",
    href: buildWhatsAppUrl("Olá! Vim pela bio da Óticas Olhar e quero atendimento."),
    ariaLabel: "Chamar a Óticas Olhar no WhatsApp",
    icon: MessageCircle,
    variant: "primary",
  },
  {
    label: "Ver localização",
    href: "#enderecos",
    ariaLabel: "Ver endereços da Óticas Olhar",
    icon: MapPin,
    variant: "light",
  },
  {
    label: "Conhecer armações",
    href: buildWhatsAppUrl(
      "Olá! Vim pela bio da Óticas Olhar e quero conhecer opções de armações.",
    ),
    ariaLabel: "Conhecer armações pelo WhatsApp",
    icon: Glasses,
    variant: "light",
  },
  {
    label: "Ver óculos de sol",
    href: buildWhatsAppUrl(
      "Olá! Vim pela bio da Óticas Olhar e quero conhecer opções de óculos de sol.",
    ),
    ariaLabel: "Conhecer óculos de sol pelo WhatsApp",
    icon: Sun,
    variant: "light",
  },
  {
    label: "Ver avaliações",
    href: "/#avaliacoes",
    ariaLabel: "Ver avaliações no site",
    icon: Star,
    variant: "ghost",
  },
  {
    label: "Acessar site completo",
    href: "/",
    ariaLabel: "Acessar site completo da Óticas Olhar",
    icon: Globe2,
    variant: "ghost",
  },
] as const;

const showcase = [
  {
    src: site.heroImage,
    alt: "Armação de óculos na Óticas Olhar",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/Maximalista%20na%20medida%20certa.%20%F0%9F%98%8E%E2%9C%A8Esse%20modelo%20entrega%20presen%C3%A7a%20de%20longe%20%E2%80%94%20daqueles%20que%20transformam.jpg",
    alt: "Óculos solar na Óticas Olhar",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/Dourada%2C%20elegante%20e%20cheia%20de%20personalidade.%20%F0%9F%98%8E%20A%20arma%C3%A7%C3%A3o%20de%20grau%20Ray-Ban%20%C3%A9%20perfeita%20para%20quem%20qu.jpg",
    alt: "Armação de grau da Óticas Olhar",
  },
];

export const metadata: Metadata = {
  title: "Óticas Olhar GLC | Links",
  description:
    "Óculos de grau, solares e lentes com atendimento cuidadoso em Araguaína.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "Óticas Olhar GLC | Links",
    description:
      "Óculos de grau, solares e lentes com atendimento cuidadoso em Araguaína.",
    type: "website",
    images: [
      {
        url: site.logoIcon,
        width: 1200,
        height: 1200,
        alt: "Logo da Óticas Olhar GLC",
      },
    ],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="instagram-page olhar-bio-page">
      <section className="instagram-hero" aria-labelledby="instagram-title">
        <div className="instagram-shell">
          <div className="instagram-brand-lockup">
            <Image
              src={site.logoIcon}
              alt="Logo da Óticas Olhar GLC"
              width={92}
              height={92}
              priority
              className="instagram-logo"
            />
            <div>
              <h1 id="instagram-title">{site.name}</h1>
              <p>Óculos de grau, solares e lentes em Araguaína.</p>
            </div>
          </div>

          <p className="instagram-intro">
            Óculos de grau, solares e lentes com atendimento cuidadoso em
            Araguaína.
          </p>

          <div className="instagram-rating-card olhar-bio-proof">
            <span className="instagram-rating-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} fill="currentColor" />
              ))}
            </span>
            <strong>
              {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no
              Google
            </strong>
            <span>
              Clientes elogiam atendimento, conforto e variedade.
            </span>
          </div>

          <div className="olhar-bio-showcase" aria-label="Mini vitrine">
            {showcase.map((image, index) => (
              <div className="olhar-bio-image" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 720px) 30vw, 160px"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="instagram-links instagram-shell"
        aria-label="Links principais"
      >
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`instagram-main-link is-${link.variant}`}
              aria-label={link.ariaLabel}
            >
              <span className="instagram-main-link-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{link.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section
        id="enderecos"
        className="instagram-contact instagram-shell"
        aria-labelledby="contact-title"
      >
        <div className="instagram-section-heading">
          <h2 id="contact-title">Endereços</h2>
        </div>

        <address className="instagram-contact-list">
          {site.locations.map((location) => (
            <a
              href={location.mapUrl}
              key={location.id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir rota para ${location.name}`}
            >
              <MapPin size={18} aria-hidden="true" />
              <span>
                <strong>{location.name}</strong>
                <br />
                {location.address}
                <br />
                {location.phoneDisplay}
              </span>
            </a>
          ))}
        </address>
      </section>

      <section
        className="instagram-testimonials"
        aria-labelledby="instagram-testimonials-title"
      >
        <div className="instagram-shell instagram-section-heading">
          <h2 id="instagram-testimonials-title">Quem comprou recomenda</h2>
        </div>
        <TestimonialsMobileMarquee testimonials={testimonials.slice(0, 6)} />
      </section>

      <footer className="instagram-footer instagram-shell">
        <Star size={15} aria-hidden="true" />
        <span>{site.shortName} - Araguaína</span>
      </footer>

      <a
        href={links[0].href}
        className="instagram-fixed-cta"
        aria-label="Falar com a Óticas Olhar no WhatsApp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>Falar no WhatsApp</span>
      </a>
    </main>
  );
}

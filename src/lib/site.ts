import {
  buildWhatsAppUrl,
  site,
  whatsappMessages,
} from "@/data/brand";

export {
  WHATSAPP_PHONE,
  brandName,
  brandColors,
  buildWhatsAppUrl,
  media,
  navItems,
  rating,
  reviewCount,
  reviewLabel,
  site,
  socialProofText,
  testimonials,
  testimonialsSummary,
  units,
  whatsappMessages,
} from "@/data/brand";

export const DEFAULT_WHATSAPP_MESSAGE = whatsappMessages.site;

export const localBusinessJsonLd = site.locations.map((location) => ({
  "@context": "https://schema.org",
  "@type": "OpticalStore",
  name: site.name,
  alternateName: `${site.shortName} - ${location.name}`,
  branchCode: location.name,
  image: site.logoIcon,
  telephone: location.phoneE164,
  sameAs: [location.mapUrl, site.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: location.postalCode,
    addressCountry: site.postalCountry,
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "105",
  },
  url: "/",
  priceRange: "$$",
  description:
    "Óticas Olhar GLC em Araguaína: armações, óculos de sol, lentes e atendimento cuidadoso em duas unidades.",
  branchOf: {
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
  },
}));

export function whatsappFor(message: string) {
  return buildWhatsAppUrl(message);
}

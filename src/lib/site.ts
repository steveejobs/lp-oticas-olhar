import {
  buildWhatsAppUrl,
  site,
  testimonialsSummary,
  whatsappMessages,
} from "@/data/brand";

export {
  WHATSAPP_PHONE,
  brandColors,
  buildWhatsAppUrl,
  media,
  navItems,
  site,
  testimonials,
  testimonialsSummary,
  whatsappMessages,
} from "@/data/brand";

export const DEFAULT_WHATSAPP_MESSAGE = whatsappMessages.site;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Optician"],
  name: site.name,
  legalName: site.legalName,
  image: site.logoIcon,
  telephone: site.phoneE164,
  sameAs: [site.mapUrl, site.instagramUrl],
  department: site.locations.map((location) => ({
    "@type": "LocalBusiness",
    name: `${site.shortName} - ${location.name}`,
    telephone: location.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: location.postalCode,
      addressCountry: site.postalCountry,
    },
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: site.postalCountry,
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: testimonialsSummary.rating,
    reviewCount: testimonialsSummary.total,
  },
  url: "/",
  priceRange: "$$",
  description:
    "Óticas Olhar GLC em Araguaína: armações, óculos de sol, lentes e atendimento cuidadoso em um ambiente confortável.",
};

export function whatsappFor(message: string) {
  return buildWhatsAppUrl(message);
}

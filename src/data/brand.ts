export const WHATSAPP_PHONE = "5563992938550";

export const whatsappMessages = {
  site: "Olá! Vim pelo site da Óticas Olhar e quero atendimento.",
  bio: "Olá! Vim pela bio da Óticas Olhar e quero atendimento.",
  frames:
    "Olá! Vim pela bio da Óticas Olhar e quero conhecer opções de armações.",
  sunglasses:
    "Olá! Vim pela bio da Óticas Olhar e quero conhecer opções de óculos de sol.",
  collections:
    "Olá! Vim pelo site da Óticas Olhar e quero ver opções de armações.",
  proposal:
    "Olá! Vi a proposta da Óticas Olhar e quero aprovar o próximo passo.",
};

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_PHONE) {
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export const brandName = "Óticas Olhar GLC";
export const rating = 4.8;
export const reviewCount = 105;
export const reviewLabel = "4,8 no Google · 105 avaliações";
export const socialProofText =
  "★★★★★ 4,8 no Google · 105 avaliações · 2 unidades em Araguaína";

export const units = [
  {
    id: "matriz-lina",
    name: "Matriz Lina",
    address:
      "R. Profa. Maria Lina - St. Anhanguera, Araguaína - TO, 77818-540",
    routeUrl: "https://share.google/kRXV4CLuaIyVDfOTg",
    streetAddress: "R. Profa. Maria Lina - St. Anhanguera",
    neighborhood: "St. Anhanguera",
    postalCode: "77818-540",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=R.%20Profa.%20Maria%20Lina%20-%20St.%20Anhanguera%2C%20Aragua%C3%ADna%20-%20TO%2C%2077818-540&output=embed",
  },
  {
    id: "central",
    name: "Unidade Central",
    address:
      "Av. 1º de Janeiro, 1302 - Qd 38, Lt 03 - St. Central, Araguaína - TO, 77803-140",
    routeUrl: "https://share.google/rBTzAAs2hWYUg43Z2",
    streetAddress: "Av. 1º de Janeiro, 1302 - Qd 38, Lt 03 - St. Central",
    neighborhood: "St. Central",
    postalCode: "77803-140",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Av.%201%C2%BA%20de%20Janeiro%2C%201302%20-%20Qd%2038%2C%20Lt%2003%20-%20St.%20Central%2C%20Aragua%C3%ADna%20-%20TO%2C%2077803-140&output=embed",
  },
] as const;

export const brandColors = {
  turquoise: "#54C4D0",
  offWhite: "#F8F5EF",
  white: "#FFFFFF",
  graphite: "#151819",
  text: "#5C6668",
  champagne: "#D8C3A5",
};

export const media = {
  heroVideo: "/galeria%20cole%C3%A7%C3%A3o/snapinsta.com.br-6a30638d9b709.mp4",
  experienceVideo:
    "/galeria%20cole%C3%A7%C3%A3o/snapinsta.com.br-6a306330ad7cc.mp4",
  heroPoster:
    "/galeria%20cole%C3%A7%C3%A3o/Um%20cl%C3%A1ssico%20que%20nunca%20erra-%20arma%C3%A7%C3%A3o%20quadrada%2C%20fosca%20e%20cheia%20de%20presen%C3%A7a.Discreto%20no%20brilho%2C%20marc.jpg",
};

export const site = {
  brandName,
  name: brandName,
  shortName: "Óticas Olhar",
  legalName: brandName,
  city: "Araguaína",
  region: "TO",
  streetAddress: units[0].streetAddress,
  neighborhood: units[0].neighborhood,
  addressLocality: "Araguaína",
  addressRegion: "TO",
  postalCode: units[0].postalCode,
  postalCountry: "BR",
  displayAddress: "2 unidades em Araguaína - TO",
  fullAddress: units.map((unit) => unit.address).join(" | "),
  phoneDisplay: "(63) 99293-8550",
  phoneE164: "+5563992938550",
  instagram: "@oticasolharglc",
  instagramUrl: "https://www.instagram.com/oticasolharglc/",
  whatsappUrl: buildWhatsAppUrl(whatsappMessages.site),
  mapUrl: "#contato",
  mapsRouteUrl: "#contato",
  mapsEmbedUrl: units[0].mapsEmbedUrl,
  rating,
  reviewCount,
  reviewLabel,
  socialProofText,
  unitCount: units.length,
  units,
  openingHours: {
    weekdays: "Segunda a sexta: horário comercial",
    saturday: "Sábado: consulte disponibilidade",
  },
  paymentSummary: "Condições facilitadas",
  mainPromise: "Atendimento claro, escolha segura e conforto no dia a dia.",
  promiseNote:
    "Armações, óculos de sol e lentes com orientação próxima em Araguaína.",
  logoIcon: "/logo%20oticas%20olhar.jpg",
  heroImage: media.heroPoster,
  locations: units.map((unit) => ({
    ...unit,
    phoneDisplay: "(63) 99293-8550",
    phoneE164: "+5563992938550",
    whatsappPhone: WHATSAPP_PHONE,
    mapUrl: unit.routeUrl,
  })),
};

export const navItems = [
  { label: "Escolha guiada", href: "#rotina" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#contato" },
];

export const testimonialsSummary = {
  rating,
  total: reviewCount,
  source: "Google",
};

export type Testimonial = {
  name: string;
  text: string;
  rating: 5;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  {
    name: "Rita Costa",
    text: "Fui muito bem atendida e meu óculos ficou pronto em 1 semana. A ótica tem um ambiente muito agradável e bastante opções de armações e óculos de sol. Super indico!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Daniela Aquino",
    text: "O atendimento foi maravilhoso, desde o agendamento da consulta, acompanhamento e atendimento presencial. Foi uma experiência bastante satisfatória.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Gislane Rodrigues",
    text: "Atendimento maravilhoso, sem contar que o lugar é bem amplo e confortável. Equipe excelente! Nota 1000.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Transloc Adm",
    text: "Ambiente agradável, mas o principal ponto foi o atendimento, com muita clareza, informação e disposição para tirar todas as dúvidas.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cleiciane Marques",
    text: "Amei desde a entrega de panfletos até a hora em que peguei o óculos. E assistência pós-venda, nem se fala! Super indico!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Ruti Fernandes",
    text: "Fui muito bem tratada na Óticas Olhar. Nota dez para a atendente que recebeu a mim e meu esposo. Com certeza vou voltar e recomendo.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Vagna Alves da Costa",
    text: "Foi maravilhoso, um atendimento de qualidade e produtos de qualidade. Parabéns, amei tudo.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Messias",
    text: "Perfeito o atendimento, amei.",
    rating: 5,
    source: "Google",
  },
];

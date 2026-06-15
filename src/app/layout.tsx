import type { Metadata, Viewport } from "next";
import { localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Óticas Olhar GLC | Ótica em Araguaína - TO",
  description:
    "Óticas Olhar GLC em Araguaína: armações, óculos de sol, lentes e atendimento cuidadoso em um ambiente confortável.",
  keywords: [
    "Óticas Olhar GLC",
    "ótica em Araguaína",
    "armações em Araguaína",
    "óculos de sol em Araguaína",
    "lentes e armações",
  ],
  icons: {
    icon: [{ url: site.logoIcon, type: "image/jpeg" }],
    shortcut: site.logoIcon,
    apple: [{ url: site.logoIcon, type: "image/jpeg" }],
  },
  openGraph: {
    title: "Óticas Olhar GLC | Ótica em Araguaína - TO",
    description:
      "Armações, óculos de sol, lentes e atendimento cuidadoso em um ambiente confortável.",
    locale: "pt_BR",
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

export const viewport: Viewport = {
  themeColor: "#F8F5EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}

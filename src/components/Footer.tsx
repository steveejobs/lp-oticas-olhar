import Image from "next/image";
import { Instagram } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <a
            href="#top"
            className="footer-brand"
            aria-label="Óticas Olhar GLC, voltar ao início"
          >
            <Image
              src={site.logoIcon}
              width={72}
              height={72}
              alt=""
              aria-hidden="true"
            />
            <span>
              <strong>{site.shortName}</strong>
              <small>Ótica em Araguaína-TO</small>
            </span>
          </a>
          <p>
            Armações, óculos de sol e lentes com atendimento cuidadoso,
            ambiente confortável e orientação clara.
          </p>
        </div>

        <address>
          <strong>Endereço</strong>
          {site.locations.map((location) => (
            <span key={location.id}>
              {location.name}: {location.address} · {location.phoneDisplay}
            </span>
          ))}
          <a
            href={site.instagramUrl}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram da Óticas Olhar: ${site.instagram}`}
          >
            <Instagram size={15} aria-hidden="true" />
            Instagram: {site.instagram}
          </a>
        </address>

        <nav aria-label="Links rápidos do rodapé">
          <strong>Navegação</strong>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

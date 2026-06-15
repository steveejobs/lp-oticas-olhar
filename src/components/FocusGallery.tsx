import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, site, whatsappMessages } from "@/lib/site";

export function FocusGallery() {
  return (
    <section
      id="contato"
      className="section trust-section location-section"
      aria-labelledby="trust-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact location-heading">
          <p className="eyebrow">Localização</p>
          <h2 id="trust-title">Visite a Óticas Olhar em Araguaína</h2>
          <p>
            Atendimento, escolha de armações, óculos solares e orientação para
            suas lentes no endereço confirmado da Óticas Olhar.
          </p>
        </AnimatedReveal>

        <div className="olhar-location-grid">
          {site.locations.map((location, index) => (
            <AnimatedReveal
              className="olhar-location-card"
              key={location.id}
              delay={index * 0.06}
            >
              <span className="location-seal">{location.name}</span>
              <h3>{location.neighborhood}</h3>
              <address>
                <MapPin size={18} aria-hidden="true" />
                <span>{location.address}</span>
              </address>
              <a href={`tel:${location.phoneE164}`} className="olhar-phone">
                <Phone size={17} aria-hidden="true" />
                {location.phoneDisplay}
              </a>
              <div className="location-actions">
                <a
                  href={location.mapUrl}
                  className="button button-red"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Traçar rota até a ${location.name} da Óticas Olhar`}
                >
                  <Navigation size={17} aria-hidden="true" />
                  Traçar rota
                </a>
                <a
                  href={buildWhatsAppUrl(
                    whatsappMessages.site,
                    location.whatsappPhone,
                  )}
                  className="button button-ghost"
                  aria-label={`Chamar a ${location.name} da Óticas Olhar no WhatsApp`}
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Chamar no WhatsApp
                </a>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      <AnimatedReveal className="site-shell map-band" delay={0.12}>
        <div className="location-map olhar-location-map">
          <iframe
            src={site.locations[0].mapsEmbedUrl}
            title="Mapa da unidade Central da Óticas Olhar em Araguaína"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </AnimatedReveal>
    </section>
  );
}

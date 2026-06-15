import { Star } from "lucide-react";
import { site } from "@/lib/site";

export function HeroProofBar() {
  return (
    <section className="hero-proof-section" aria-labelledby="hero-proof-title">
      <div className="site-shell">
        <h2 id="hero-proof-title" className="sr-only">
          Prova social da Óticas Olhar
        </h2>
        <div className="olhar-proof-strip">
          <span aria-hidden="true" className="olhar-proof-stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={15} fill="currentColor" />
            ))}
          </span>
          <strong>{site.rating.toFixed(1).replace(".", ",")} no Google</strong>
          <span>{site.reviewCount} avaliações</span>
          <span>Atendimento elogiado</span>
          <span>Ambiente confortável</span>
        </div>
      </div>
    </section>
  );
}

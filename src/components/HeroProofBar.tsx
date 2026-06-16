import { site } from "@/lib/site";

export function HeroProofBar() {
  return (
    <section className="hero-proof-section" aria-labelledby="hero-proof-title">
      <div className="site-shell">
        <h2 id="hero-proof-title" className="sr-only">
          Prova social da Óticas Olhar
        </h2>
        <div className="olhar-proof-strip">
          <strong>{site.socialProofText}</strong>
        </div>
      </div>
    </section>
  );
}

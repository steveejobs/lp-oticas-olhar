import { AnimatedReveal } from "@/components/AnimatedReveal";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import {
  TestimonialsColumn,
  TestimonialsMobileMarquee,
} from "@/components/ui/testimonials-columns-1";
import { testimonials, testimonialsSummary } from "@/data/testimonials";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 8);

export function GoogleReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="section google-reviews-section testimonials-section"
      aria-labelledby="google-reviews-title"
    >
      <div className="site-shell testimonials-shell">
        <AnimatedReveal className="section-heading compact testimonials-heading">
          <p className="eyebrow">Google Reviews</p>
          <h2 id="google-reviews-title">
            Atendimento, conforto e clareza percebidos por quem já comprou.
          </h2>
          <p>
            {testimonialsSummary.rating.toFixed(1).replace(".", ",")} estrelas
            no Google, com {testimonialsSummary.total} avaliações de clientes.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="testimonials-rating-wrap" delay={0.08}>
          <GoogleRatingBadge
            variant="card"
            rating={testimonialsSummary.rating.toFixed(1).replace(".", ",")}
            reviews={`${testimonialsSummary.total} avaliações`}
          />
        </AnimatedReveal>
      </div>

      <ul className="sr-only">
        {testimonials.map((testimonial) => (
          <li key={`review-${testimonial.name}`}>
            {testimonial.text} {testimonial.name}. Origem: {testimonial.source}.
          </li>
        ))}
      </ul>

      <div className="site-shell testimonials-columns-wrap testimonials-desktop-marquee">
        <TestimonialsColumn
          testimonials={firstColumn}
          className="testimonials-column"
          duration={28}
        />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="testimonials-column testimonials-column-tablet"
          duration={34}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="testimonials-column testimonials-column-desktop"
          duration={31}
        />
      </div>

      <TestimonialsMobileMarquee testimonials={testimonials} />
    </section>
  );
}

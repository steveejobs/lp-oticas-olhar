type GoogleRatingBadgeVariant = "compact" | "card" | "inline";

type GoogleRatingBadgeProps = {
  variant?: GoogleRatingBadgeVariant;
  rating?: string;
  reviews?: string;
  showLabel?: boolean;
  className?: string;
  href?: string;
};

const defaultRating = "4,8";
const defaultReviews = "105 avaliações";
const stars = "★★★★★";

function normalizeReviews(reviews: string) {
  const count = reviews.match(/\d+/)?.[0] ?? reviews;
  return `${count} avaliações`;
}

export function GoogleRatingBadge({
  variant = "compact",
  rating = defaultRating,
  reviews = defaultReviews,
  showLabel = variant === "card",
  className,
  href,
}: GoogleRatingBadgeProps) {
  const normalizedReviews = normalizeReviews(reviews);
  const accessibleLabel = `Avaliação ${rating} de 5 no Google, com ${normalizedReviews} e 2 unidades em Araguaína`;
  const classes = [
    "google-rating-badge",
    `google-rating-badge-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {showLabel ? (
        <span className="google-rating-label">Google Reviews</span>
      ) : null}
      <span className="google-rating-stars" aria-hidden="true">
        {stars}
      </span>
      {variant === "inline" ? (
        <span className="google-rating-line">
          <strong>{rating}</strong> no Google · {normalizedReviews} · 2
          unidades em Araguaína
        </span>
      ) : (
        <span className="google-rating-main">
          <strong>{rating}</strong>
          <span>
            {variant === "compact"
              ? `no Google · ${normalizedReviews} · 2 unidades em Araguaína`
              : normalizedReviews}
          </span>
        </span>
      )}
      {variant === "card" ? (
        <small>2 unidades em Araguaína</small>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} aria-label={accessibleLabel}>
        <span className="google-rating-visual" aria-hidden="true">
          {content}
        </span>
      </a>
    );
  }

  return (
    <div className={classes} role="group" aria-label={accessibleLabel}>
      <span className="google-rating-visual" aria-hidden="true">
        {content}
      </span>
    </div>
  );
}

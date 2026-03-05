import { site } from "../../../content/site";

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${site.brand} ${site.tagline}`,
  url: "https://zephaniahproperties.co.uk",
  review: site.testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  })),
};
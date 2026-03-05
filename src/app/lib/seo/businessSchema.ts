import { site } from "../../../content/site";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: `${site.brand} ${site.tagline}`,
  url: "https://zephaniahproperties.co.uk",
  email: site.contact.email,
  telephone: site.contact.phone,
};
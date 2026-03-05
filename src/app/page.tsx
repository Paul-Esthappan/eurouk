import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import FeatureCTA from "@/app/components/FeatureCTA";
import Agents from "@/app/components/Agents";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

import { reviewSchema } from "../app/lib/seo/reviewSchema";
import { businessSchema } from "@/app/lib/seo/businessSchema";
import TrustBadges from "./components/TrustBadges";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [businessSchema, reviewSchema],
          }),
        }}
    />

      <Header />
      <main>
        <Hero />
        <Services />
        <FeatureCTA />
        {/* <Agents /> */}
        <Testimonials />
        <Contact />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
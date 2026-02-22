import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import FeatureCTA from "@/app/components/FeatureCTA";
import Agents from "@/app/components/Agents";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeatureCTA />
        <Agents />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
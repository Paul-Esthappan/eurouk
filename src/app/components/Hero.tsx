import { site } from "@/content/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      {/* ===============================
          Background Image + Overlays
      =============================== */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Hero.png"
          alt="Luxury residential apartments"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Brand tint overlay */}
        <div className="absolute inset-0 bg-primary/15" />
      </div>

      {/* ===============================
          Content
      =============================== */}
      <div className="relative mx-auto max-w-6xl px-4 py-28">
        {/* Brand line */}
        <p className="text-sm font-medium text-white/85">
          {site.brand} {site.tagline}
        </p>

        {/* Headline */}
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Property Investment &amp; Management Made Simple
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          We help landlords and investors source, manage, and grow portfolios across the UK
          with clarity, compliance, and consistent reporting.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-lg hover:scale-[1.02]"
          >
            Get In Touch
          </a>

          <a
            href="#services"
            className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
          >
            View Services
          </a>
        </div>

        {/* Luxury Glass Stats Cards */}
        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md shadow-lg">
            <p className="text-sm text-white/70">Reporting</p>
            <p className="mt-1 font-medium">Monthly</p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md shadow-lg">
            <p className="text-sm text-white/70">Compliance</p>
            <p className="mt-1 font-medium">First</p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md shadow-lg">
            <p className="text-sm text-white/70">Support</p>
            <p className="mt-1 font-medium">End-to-end</p>
          </div>
        </div>

        {/* Trust line */}
        <p className="mt-14 text-sm text-white/70">
          Trusted by landlords, investors and property owners across the UK.
        </p>
      </div>
    </section>
  );
}
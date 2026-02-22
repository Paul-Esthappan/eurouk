import { site } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border"
    >
      {/* subtle premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-42rem -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm text-muted">
          Property Investing &amp; Management
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {site.hero.headline}
        </h1>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {site.hero.subhead}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={site.hero.primaryCta.href}
            className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md"
          >
            {site.hero.primaryCta.label}
          </a>

          <a
            href={site.hero.secondaryCta.href}
            className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/10"
          >
            {site.hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
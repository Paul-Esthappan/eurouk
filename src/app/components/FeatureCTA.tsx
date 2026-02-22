import { site } from "@/content/site";

export default function FeatureCTA() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {site.feature.headline}
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {site.feature.bullets.map((b) => (
              <li key={b} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href={site.feature.cta.href}
              className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md"
            >
              {site.feature.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
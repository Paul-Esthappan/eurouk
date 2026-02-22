import { site } from "@/content/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Testimonials
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-muted">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-3 text-sm font-medium text-foreground">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
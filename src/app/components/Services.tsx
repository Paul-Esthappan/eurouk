import { site } from "@/content/site";

export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Our Services
        </h2>

        <p className="mt-2 text-muted">
          Everything you need to acquire, improve, and manage property.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-medium text-foreground">
                {s.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
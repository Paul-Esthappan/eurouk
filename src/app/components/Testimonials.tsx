"use client";

import { site } from "@/content/site";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [...site.testimonials, ...site.testimonials];

  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What Our Clients Say
          </h2>

          <p className="mt-2 text-sm text-muted">
            Trusted by landlords and property investors across the UK
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="font-medium text-foreground">4.9 Average Rating</span>
            <span className="text-muted">Based on 120+ client reviews</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-12 overflow-hidden">

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[50%] lg:min-w-[25%]"
              >
                <figure className="rounded-2xl border border-border bg-surface p-6 shadow-sm h-full">

                  {/* Stars */}
                  <div className="mb-3 text-yellow-500 text-sm">
                    ★★★★★
                  </div>

                  <blockquote className="text-sm leading-relaxed text-muted">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">

                    {/* Avatar */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {t.name.charAt(0)}
                    </div>

                    <div>
                      <div className="font-medium text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted">
                        {t.role} • {t.location}
                      </div>
                    </div>

                  </figcaption>

                </figure>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
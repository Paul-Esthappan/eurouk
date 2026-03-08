"use client";

import { site } from "@/content/site";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

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

          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="font-medium text-foreground">4.9 Average Rating</span>
            <span className="text-muted">Based on 120+ client reviews</span>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          {/* Motion slider */}
          <motion.div
            className="flex gap-6"
            animate={{ x: paused ? undefined : ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[85%] sm:min-w-[60%] lg:min-w-[30%] xl:min-w-[25%]"
              >

                {/* Glass card */}
                <figure className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

                  {/* Stars */}
                  <div className="mb-3 text-yellow-500 text-sm">
                    ★★★★★
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-sm leading-relaxed text-white/80">
                    “{t.quote}”
                  </blockquote>

                  {/* Client */}
                  <figcaption className="mt-6 border-t border-white/20 pt-4">

                    <div className="font-medium text-white">
                      {t.name}
                    </div>

                    <div className="text-xs text-white/70">
                      {t.role} • {t.location}
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
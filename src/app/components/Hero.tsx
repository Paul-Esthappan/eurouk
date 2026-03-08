"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export default function Hero() {
  const slides = site.heroSlides;

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAuto = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // faster slide change
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* =========================
          Background Slides
      ========================= */}

      <div className="absolute inset-0">

        {slides.map((slide, i) => (
          <picture
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Mobile image */}
            <source media="(max-width:768px)" srcSet={slide.mobile} />

            {/* Desktop image */}
            <img
              src={slide.desktop}
              alt={slide.alt}
              className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out will-change-transform ${
                i === current ? "scale-105" : "scale-100"
              }`}
            />
          </picture>
        ))}

        {/* overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-primary/15" />

      </div>

      {/* =========================
          Content
      ========================= */}

      <div className="relative mx-auto max-w-6xl px-4 py-28">

        <p className="text-sm font-medium text-white/85">
          {site.brand} {site.tagline}
        </p>

        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Property Investment & Management Made Simple
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          We help landlords and investors source, manage, and grow portfolios
          across the UK with clarity, compliance, and consistent reporting.
        </p>

        {/* CTA */}

        <div className="mt-8 flex flex-wrap gap-3">

          <a
            href="#contact"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.03]"
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

        {/* =========================
            Arrows
        ========================= */}

        <div className="absolute right-6 bottom-10 flex gap-3">

          <button
            onClick={prev}
            className="rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur hover:bg-black/60 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur hover:bg-black/60 transition"
          >
            →
          </button>

        </div>

        {/* =========================
            Dots
        ========================= */}

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "bg-white w-6"
                  : "bg-white/40 w-2"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
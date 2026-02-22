"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  // close menu when resizing up to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="font-semibold tracking-tight text-foreground"
        >
          {site.brand}{" "}
          <span className="font-medium text-muted">{site.tagline}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-5 text-sm md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground transition hover:text-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md md:inline-flex"
          >
            Get In Touch
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2 text-foreground transition hover:bg-accent/10 md:hidden"
          >
            {/* hamburger / close icon */}
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-2 w-5 bg-current transition ${
                  open ? "translate-y-7 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-7 block h-2 w-5 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-14 block h-2 w-5 bg-current transition ${
                  open ? "-translate-y-7 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-accent/10"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
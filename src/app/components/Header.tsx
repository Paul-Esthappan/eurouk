"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const navItems = useMemo(() => site.nav, []);

  /* ---------------- SCROLL DETECTION ---------------- */

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- SCROLL SPY ---------------- */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, [navItems]);

  /* ---------------- LOCK SCROLL WHEN MENU OPEN ---------------- */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  /* ---------------- STYLE CLASSES ---------------- */

  const shellClass = scrolled
    ? "border-border bg-background/90 backdrop-blur-md shadow-sm"
    : "border-transparent bg-gradient-to-b from-black/30 to-transparent";

  const linkClass = scrolled
    ? "text-foreground hover:text-primary"
    : "text-foreground dark:text-white hover:text-primary";

  const brandClass = scrolled
    ? "text-foreground"
    : "text-foreground dark:text-white";

  const tagClass = scrolled
    ? "text-muted-foreground"
    : "text-muted-foreground dark:text-white/70";

  const mobileBtnClass = scrolled
    ? "border-border bg-surface text-foreground hover:bg-accent/10"
    : "border-white/20 bg-black/30 text-white hover:bg-black/40";

  return (
    <header className="sticky top-0 z-50">
      {/* ---------------- TOP BAR ---------------- */}

      <div className={`border-b transition-all duration-300 ${shellClass}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

          {/* Brand */}
          <a
            href="#home"
            className="flex items-baseline gap-2"
            onClick={closeMenu}
          >
            <span className={`text-sm font-semibold tracking-tight ${brandClass}`}>
              {site.brand}
            </span>

            <span className={`text-xs font-medium ${tagClass}`}>
              {site.tagline}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active === item.href
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : linkClass
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Button */}
          <div className="flex items-center gap-3">

            <a
              href="#contact"
              className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-lg hover:scale-[1.02] md:inline-flex"
            >
              Get In Touch
            </a>

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm transition md:hidden ${mobileBtnClass}`}
            >
              <span className="sr-only">Open menu</span>

              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">

          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-border bg-background backdrop-blur-md shadow-2xl">

            <div className="flex items-center justify-between border-b border-border px-4 py-3">

              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {site.brand}
                </span>

                <span className="text-xs text-muted-foreground">
                  {site.tagline}
                </span>
              </div>

              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-border bg-surface px-3 py-2 text-sm hover:bg-accent/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

            </div>

            {/* Mobile Nav */}
            <nav className="px-4 py-4">
              <ul className="grid gap-2">

                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`block rounded-xl px-3 py-2 text-sm font-medium transition ${
                        active === item.href
                          ? "text-primary bg-accent/10"
                          : "text-foreground hover:bg-accent/10"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

              </ul>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-hover"
              >
                Get In Touch
              </a>

            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
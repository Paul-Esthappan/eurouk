"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu when clicking an anchor link
  const navItems = useMemo(() => site.nav, []);
  const closeMenu = () => setOpen(false);

  const shellClass = scrolled
    ? "border-border bg-white/75 backdrop-blur-md shadow-sm"
    : "border-transparent bg-white/10 backdrop-blur-sm"; // ✅ readable on hero

  const linkClass = scrolled
    ? "text-foreground/90 hover:text-foreground"
    : "text-white/85 hover:text-white"; // ✅ readable on hero

  const brandClass = scrolled ? "text-foreground" : "text-white";
  const tagClass = scrolled ? "text-muted" : "text-white/70";

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className={`border-b transition ${shellClass}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Brand */}
          <a href="#home" className="flex items-baseline gap-2" onClick={closeMenu}>
            <span className={`text-sm font-semibold tracking-tight ${brandClass}`}>
              {site.brand}
            </span>
            <span className={`text-xs font-medium ${tagClass}`}>{site.tagline}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`transition ${linkClass}`}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-lg hover:scale-[1.02] md:inline-flex"
            >
              Get In Touch
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm transition md:hidden ${
                scrolled
                  ? "border-border bg-surface text-foreground hover:bg-accent/10"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              <span className="sr-only">Open menu</span>
              {/* Hamburger */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-border bg-white/90 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold tracking-tight text-foreground">
                  {site.brand}
                </span>
                <span className="text-xs font-medium text-muted">{site.tagline}</span>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-border bg-surface px-3 py-2 text-sm hover:bg-accent/10"
              >
                {/* X icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-4">
              <ul className="grid gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover hover:shadow-lg"
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
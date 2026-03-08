export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Zephaniah Properties</p>

          <a
            className="underline underline-offset-4 transition hover:text-foreground"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
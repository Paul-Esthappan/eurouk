export default function ContactSuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Message sent
        </h1>

        <p className="mt-4 text-muted">
          Thanks — we’ve received your message and will reply soon.
        </p>

        <a
          className="mt-6 inline-block underline underline-offset-4 transition hover:text-foreground"
          href="/"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
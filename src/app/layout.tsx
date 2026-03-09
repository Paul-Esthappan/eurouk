import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zephaniah Properties LTD",
  description:
    "Property investment, sourcing and management services in the UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">

        {/* Hidden Netlify Form (required for Next.js detection) */}
        <form name="contact" data-netlify="true" hidden>
          <input name="name" />
          <input name="email" />
          <input name="subject" />
          <textarea name="message"></textarea>
        </form>

        {children}

      </body>
    </html>
  );
}
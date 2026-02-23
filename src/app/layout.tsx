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
        {children}
      </body>
    </html>
  );
}
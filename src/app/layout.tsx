import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EUROUK Properties",
  description: "Property investing, sourcing, refurbishment, and management.",
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
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { createMetadata } from "@/lib/metadata";
import { autoRepairSchema, websiteSchema } from "@/lib/schema";

// Self-hosted via next/font, display: swap — SYSTEM/07 performance budget.
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZA"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0B0B0B" />

        {/*
          Enables the scroll-reveal hidden state before first paint, so there is
          no flash of visible content. Deliberately inline and synchronous.
          If JavaScript is off this never runs, and every reveal simply stays
          visible — see globals.css and components/ui/reveal.tsx.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-reveal')`,
          }}
        />

        {/*
          JSON-LD. The current live site emits none at all.
          NOTE: no aggregateRating / review schema is emitted — see lib/schema.ts.
          FAQPage is NOT emitted here — it belongs only on pages where an FAQ is
          actually visible, so it lives in the homepage view instead.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepairSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-brand-ink font-body text-white antialiased">
        {children}
      </body>
    </html>
  );
}

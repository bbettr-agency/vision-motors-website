import type { Metadata } from "next";
import { Inter, Barlow_Semi_Condensed, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import { createMetadata } from "@/lib/metadata";
import {
  autoRepairSchema,
  engineShopBranchSchema,
  websiteSchema,
} from "@/lib/schema";

// Self-hosted via next/font, display: swap — SYSTEM/07 performance budget.
// v5 type system ("workshop manual"): Barlow Semi Condensed = compact
// industrial display + index numerals; IBM Plex Mono = technical labels; Inter
// = body. Only the weights actually used are loaded, latin subset only, and all
// three are self-hosted (no external runtime font requests, no layout shift).
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500", "600"],
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
      className={`${body.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0E2338" />

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
        {/* Second workshop (1197 Steve Biko Road), branchOf the primary above. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(engineShopBranchSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-brand-cream font-body text-brand-ink antialiased">
        {children}
      </body>
    </html>
  );
}

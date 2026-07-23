import { Check } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import CallButton from "@/components/ui/call-button";
import HeroShowcase from "@/components/sections/hero-showcase";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — answers, in ~5 seconds: what they do, where, why them, what to do next.
//
//  v3 (scroll-driven service showcase): two columns.
//    LEFT  — sticky conversion column. Eyebrow, the single H1, supporting copy,
//            Call (primary) + Book (secondary), trust points. Pinned while the
//            visitor scrolls the services on the right, so the conversion
//            content never leaves the screen.
//    RIGHT — the service showcase (components/sections/hero-showcase.tsx). As
//            the visitor scrolls, each service becomes active in turn, so the
//            breadth of the workshop lands immediately: diagnostics, engines,
//            gearboxes and specialist repairs, not just a basic mechanic.
//
//  This component is a SERVER component. The H1 and all copy are in the
//  server-rendered HTML, crawlable and visible without JavaScript. Only the
//  active-state emphasis in the showcase is client-side, and it degrades to
//  "all services fully visible" without JS.
//
//  ⚠️ `position: sticky` on the left column needs a NON-transformed, non-
//  overflow-clipped ancestor chain — so this section deliberately has no
//  `overflow-hidden` and the left column is a plain div (no scroll-reveal
//  wrapper, whose transform would break sticky).
//
//  ❌ No founding year, no MIWA badge, no warranty claim, no star rating.
//     All unverified. See config/site-config.ts.
// ─────────────────────────────────────────────────────────────────────────────

// Every tick is defensible from the client's own published content.
const heroTicks = [
  "Complex fault finding",
  "Engine & gearbox rebuilds in-house",
  "All makes and models",
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-brand-indigoDeep pt-28 md:pt-36">
      {/* Indigo brand wash — official brand colour present above the fold. */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:pb-28 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-8">
        {/* LEFT — sticky conversion column. */}
        <div className="lg:sticky lg:top-28 lg:col-span-6 lg:self-start lg:py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent sm:text-sm">
            {siteConfig.suburb} · {siteConfig.city}
          </p>

          {/* The single H1 on the page. */}
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Specialist vehicle diagnostics, engine and gearbox repairs
            <span className="text-brand-accent"> in Pretoria</span>
          </h1>

          <p className="mt-7 max-w-[60ch] text-base leading-[1.75] text-brand-bone/80 md:text-lg">
            An independent workshop for the jobs that need more than a parts
            swap — complex fault finding, engine reconditioning, automatic and
            manual gearboxes, DSG and mechatronic units. We find the actual
            fault first, then tell you what it costs to fix.
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {heroTicks.map((tick) => (
              <li
                key={tick}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-bone/85"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-brand-accent"
                  strokeWidth={3}
                  aria-hidden
                />
                {tick}
              </li>
            ))}
          </ul>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* PRIMARY — call. */}
            <CallButton location="hero" variant="brass" showNumber />

            {/* SECONDARY — book. */}
            <Link
              href={utilityRoutes.booking}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-indigoDeep md:text-base"
            >
              {siteConfig.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-brand-bone/65">
            No obligation · We diagnose before we quote · Nothing gets done
            without your approval
          </p>
        </div>

        {/* RIGHT — scroll-driven service showcase. */}
        <HeroShowcase />
      </div>

      {/* Eases the seam into the trust strip below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-brand-charcoal"
        aria-hidden
      />
    </section>
  );
}

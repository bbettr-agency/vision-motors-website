import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import CallButton from "@/components/ui/call-button";
import HeroShowcase from "@/components/sections/hero-showcase";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — IMAGE-FREE, motion-driven "workshop manual" opening (2026-08-04).
//
//  NO photography, NO stock, NO AI images, NO video, NO placeholder image. The
//  right side is a large, typography-led CAPABILITY INDEX with an inline-SVG
//  diagnostic trace that draws as you scroll (components/sections/hero-showcase).
//  Atmosphere is built from CSS gradients (grid + warm glow) and type — not media.
//
//  Composition:
//    LEFT (sticky)  — the single H1 + conversion copy + Call (primary) / Book.
//                     Server-rendered, crawlable; a light staggered entrance via a
//                     one-time CSS @keyframes (`vmHeroRise`) — NOT the scroll-reveal
//                     system. This is deliberate: a time-based keyframe ALWAYS ends
//                     visible and can never get "stuck hidden" the way a
//                     scroll/position-triggered reveal can when the CTA sits below
//                     the initial fold. It is `motion-safe:` only, so reduced-motion
//                     and no-JS users get the fully-visible column with no motion.
//    RIGHT          — the animated capability index (hero-showcase.tsx), which
//                     fills the former photo area and scrolls beneath the pinned
//                     left column, releasing naturally after the last capability.
//
//  SERVER component. The H1 + all copy are in the SSR HTML, at full opacity by
//  default (the keyframe only animates FROM hidden TO the visible resting state).
//  ⚠️ `position: sticky` needs a non-transformed, non-overflow-clipped ancestor
//  chain — so no `overflow-hidden` here and the left column is a plain div.
//  ❌ No founding year, no accreditation badge, no warranty claim, no rating.
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section id="top" className="relative bg-brand-ink pt-28 md:pt-32">
      {/* Faint service-manual grid + warm vignette — CSS gradients, NOT images. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_30%_0%,black,transparent_75%)]"
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />

      {/* One-time staggered entrance for the left column. Time-based (never
          scroll-triggered) so content ALWAYS ends visible; `motion-safe:` gated so
          reduced-motion / no-JS users get the resting (fully-visible) state. */}
      <style>{`@keyframes vmHeroRise{from{opacity:0;transform:translateY(0.75rem)}to{opacity:1;transform:none}}`}</style>

      <div className="relative mx-auto grid max-w-7xl gap-x-12 gap-y-4 px-6 pb-20 md:pb-28 lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:px-8">
        {/* LEFT — sticky conversion column. Deliberately concise so the whole
            column (through the CTAs) fits within a normal desktop viewport: that
            is what lets it pin cleanly and keeps the Call/Book CTAs above the fold.
            The "what we do" list lives in the capability index on the right, so it
            is NOT repeated here. Staggered CSS entrance (no-JS / reduced-motion
            safe). */}
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <div className="motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_both]">
            {/* Amber brand rule — the one warm accent up here. */}
            <span aria-hidden className="block h-1 w-12 bg-brand-cta" />

            <p className="mt-5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-bone">
              {siteConfig.suburb} · {siteConfig.city}
              <span className="text-brand-steel"> / Independent workshop</span>
            </p>
          </div>

          {/* The single H1 on the page. */}
          <h1 className="mt-4 font-display text-[2.5rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.08s_both] sm:text-5xl lg:text-[3.25rem]">
            Specialist vehicle diagnostics, engine &amp; gearbox repairs
            <span className="mt-1 block text-brand-bone"> in Pretoria</span>
          </h1>

          <div className="motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.16s_both]">
            <p className="mt-6 max-w-[44ch] text-base leading-[1.6] text-brand-mist/90 md:text-lg">
              The independent workshop for jobs that need more than a parts swap —
              complex fault finding, engine and gearbox work, DSG and mechatronic
              units. We find the actual fault first, then quote to fix it.
            </p>
          </div>

          <div className="motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.24s_both]">
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton location="hero" variant="brass" showNumber />
              <Link
                href={utilityRoutes.booking}
                className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cta/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:text-base"
              >
                {siteConfig.ctaSecondary}
              </Link>
            </div>

            <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brand-steel">
              No obligation · We diagnose before we quote · All makes &amp; models
            </p>
          </div>
        </div>

        {/* RIGHT — the image-free animated capability index (fills the former
            photo area and provides the scroll distance). */}
        <div className="lg:col-span-7 lg:pt-1">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}

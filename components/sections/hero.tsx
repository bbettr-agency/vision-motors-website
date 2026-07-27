import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import CallButton from "@/components/ui/call-button";
import HeroShowcase from "@/components/sections/hero-showcase";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — answers, in ~5 seconds: what they do, where, why them, what to do next.
//
//  v5 (photographic background + titles-only showcase):
//    BACKGROUND — a full-bleed servicing photograph under a heavy navy overlay,
//                 so the hero reads as a premium navy hero with warm texture
//                 behind it. The image is DECORATIVE (alt="") — it makes no
//                 claim; the informative content is the H1 and the title list.
//                 ⚠️ Currently a stock image; swap for a real workshop photo
//                 after the shoot (config/images-config heroBackground).
//    LEFT       — sticky conversion column. Eyebrow, the single H1, supporting
//                 copy, Call (primary) + Book (secondary), trust points. Pinned
//                 while the visitor scrolls the service TITLES on the right.
//    RIGHT      — the service-title showcase (hero-showcase.tsx): titles only,
//                 no blurbs, each becoming active in turn as the visitor scrolls.
//
//  SERVER component. The H1 and all copy are in the server-rendered HTML,
//  crawlable and visible without JavaScript. Only the active-title emphasis is
//  client-side, and it degrades to "all titles fully visible" without JS.
//
//  ⚠️ `position: sticky` on the left column needs a NON-transformed, non-
//  overflow-clipped ancestor chain — so this section deliberately has no
//  `overflow-hidden` and the left column is a plain div.
//
//  ❌ No founding year, no MIWA badge, no warranty claim, no star rating.
// ─────────────────────────────────────────────────────────────────────────────

// Every tick is defensible from the client's own published content.
const heroTicks = [
  "Complex fault finding",
  "Engine & gearbox rebuilds in-house",
  "All makes and models",
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-brand-navy pt-28 md:pt-36">
      {/* Full-bleed servicing photograph — decorative background. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src={imagesConfig.heroBackground.src as string}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Navy overlay — darker on the left where the copy sits, easing lighter
            to the right so the warm oil tones read behind the titles. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/94 to-brand-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/70" />
        {/* Faint brand wash for depth. */}
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:pb-28 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-8">
        {/* LEFT — sticky conversion column. */}
        <div className="lg:sticky lg:top-28 lg:col-span-6 lg:self-start lg:py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blueSoft sm:text-sm">
            {siteConfig.suburb} · {siteConfig.city}
          </p>

          {/* The single H1 on the page. */}
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Specialist vehicle diagnostics, engine and gearbox repairs
            <span className="text-brand-blueSoft"> in Pretoria</span>
          </h1>

          <p className="mt-7 max-w-[60ch] text-base leading-[1.75] text-brand-mist/90 md:text-lg">
            An independent workshop for the jobs that need more than a parts
            swap — complex fault finding, engine reconditioning, automatic and
            manual gearboxes, DSG and mechatronic units. We find the actual
            fault first, then tell you what it costs to fix.
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {heroTicks.map((tick) => (
              <li
                key={tick}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-mist/90"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-brand-blueSoft"
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
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blueMid/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueMid focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy md:text-base"
            >
              {siteConfig.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-brand-bone/75">
            No obligation · We diagnose before we quote · Nothing gets done
            without your approval
          </p>
        </div>

        {/* RIGHT — scroll-driven service-title showcase. */}
        <HeroShowcase />
      </div>

      {/* Eases the seam into the trust strip below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-brand-navy"
        aria-hidden
      />
    </section>
  );
}

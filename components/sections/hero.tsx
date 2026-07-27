import Image from "next/image";
import Link from "next/link";

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import CallButton from "@/components/ui/call-button";
import HeroShowcase from "@/components/sections/hero-showcase";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — "workshop manual" opening. Answers in ~5s: what they do, where, why
//  them, what to do next — and makes it feel like a PHYSICAL Pretoria workshop.
//
//  v6 composition:
//    LEFT (sticky)  — charcoal conversion column: mono locality tag, the single
//                     oversized H1, short copy, Call (primary) + Book (secondary),
//                     a mono capability spec line. Pinned while the visitor
//                     scrolls the capability index on the right, so Call/Book are
//                     always reachable.
//    RIGHT          — the one authentic workshop photograph (real technicians on
//                     an engine bay) as a large editorial crop, then the
//                     capability index wall (hero-showcase.tsx) scrolling beneath.
//
//  The photo is a REAL Vision Motors image (imagesConfig.hero) — its own block,
//  not behind text, so it needs no heavy overlay and stays honest. A different
//  crop/purpose from /about-us and /our-work (Correction 4).
//
//  SERVER component. The H1 + all copy are server-rendered (crawlable, visible
//  without JS). Only the active-capability emphasis is client-side, degrading to
//  "all capabilities visible" without JS.
//
//  ⚠️ `position: sticky` needs a non-transformed, non-overflow-clipped ancestor
//  chain — so no `overflow-hidden` here and the left column is a plain div.
//  ❌ No founding year, no accreditation badge, no warranty claim, no rating.
// ─────────────────────────────────────────────────────────────────────────────

// Every item is defensible from the client's own published content.
const heroSpec = [
  "Complex fault finding",
  "Engine & gearbox rebuilds in-house",
  "All makes & models",
];

export default function Hero() {
  const photo = imagesConfig.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-brand-ink pt-28 md:pt-32">
      {/* Faint service-manual grid + warm vignette — texture, not decoration. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_30%_0%,black,transparent_75%)]"
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />

      <div className="relative mx-auto grid max-w-7xl gap-x-12 gap-y-4 px-6 pb-20 md:pb-28 lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:px-8">
        {/* LEFT — sticky conversion column. */}
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start lg:py-4">
          {/* Amber brand rule — the one warm accent up here. */}
          <span aria-hidden className="block h-1 w-12 bg-brand-cta" />

          <p className="mt-6 font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-bone">
            {siteConfig.suburb} · {siteConfig.city}
            <span className="text-brand-steel"> / Independent workshop</span>
          </p>

          {/* The single H1 on the page. */}
          <h1 className="mt-5 font-display text-[2.5rem] font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Specialist vehicle diagnostics, engine &amp; gearbox repairs
            <span className="mt-2 block text-brand-bone"> in Pretoria</span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-base leading-[1.7] text-brand-mist/90 md:text-lg">
            An independent workshop for the jobs that need more than a parts
            swap — complex fault finding, engine reconditioning, automatic and
            manual gearboxes, DSG and mechatronic units. We find the actual
            fault first, then tell you what it costs to fix.
          </p>

          {/* Mono capability spec line. */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-bone">
            {heroSpec.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span className="text-brand-steel" aria-hidden>|</span>}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton location="hero" variant="brass" showNumber />
            <Link
              href={utilityRoutes.booking}
              className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cta/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:text-base"
            >
              {siteConfig.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brand-steel">
            No obligation · We diagnose before we quote · Nothing done without
            your approval
          </p>
        </div>

        {/* RIGHT — real photograph + capability index wall. */}
        <div className="lg:col-span-7">
          <figure className="relative h-[46vh] min-h-[320px] overflow-hidden border border-white/10 lg:h-[54vh]">
            <Image
              src={photo.src as string}
              alt={photo.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_28%]"
            />
            {/* Editorial corner label — a truthful caption for a real photo. */}
            <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 bg-brand-ink/85 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-brand-bone backdrop-blur-sm">
              <span className="h-1.5 w-1.5 bg-brand-cta" aria-hidden />
              In the workshop · {siteConfig.suburb}
            </figcaption>
            {/* Crop marks. */}
            <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-white/40" />
            <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
          </figure>

          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check, Phone } from "lucide-react";

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import Button from "@/components/ui/button";
import ImageSlotView from "@/components/ui/image-slot";
import Reveal from "@/components/ui/reveal";
import { scrollToBookingForm } from "@/lib/scroll-to-form";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — answers, in ~5 seconds: what they do, where, why them, what to do next.
//
//  POSITIONING: not a generic mechanic. The H1 leads with the specialist
//  capability (diagnostics, engine, gearbox) because that is the real business —
//  the client's own /services page sells it, their homepage buries it.
//
//  v2 (visual only — copy and layout unchanged): the hero stays dark, but opens
//  up. A warm brass wash replaces the flat black field, the photo sits on a
//  lifted charcoal panel rather than floating in black, and the section closes
//  on charcoal so it eases into the trust strip instead of stopping dead.
//  The brass CTA remains the strongest element on the screen.
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
    <section
      id="top"
      className="relative overflow-hidden bg-brand-ink pb-20 pt-28 md:pb-28 md:pt-36"
    >
      {/* Warm brass wash — lifts the top of the page off pure black. */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      {/* Eases the seam into the trust strip below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-brand-charcoal"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Copy */}
        <Reveal className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent sm:text-sm">
            {siteConfig.suburb} · {siteConfig.city}
          </p>

          {/* The single H1 on the page. The current live site's only H1 is
              "Your Questions Answered" — the FAQ heading. */}
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
            <Button onClick={() => scrollToBookingForm()} withArrow>
              {siteConfig.cta}
            </Button>

            <a
              href={siteConfig.phoneLink}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:text-base"
              aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
            >
              <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
              <span className="whitespace-nowrap">
                {siteConfig.phoneDisplay}
              </span>
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-brand-bone/65">
            No obligation · We diagnose before we quote · Nothing gets done
            without your approval
          </p>
        </Reveal>

        {/* The one authentic photograph — real technicians, real workshop.
            Sits on a lifted panel so it reads as a framed image rather than a
            bright rectangle floating in black. */}
        <Reveal className="lg:col-span-5">
          <div className="rounded-[1.9rem] bg-brand-charcoal p-2 shadow-ink ring-1 ring-white/10">
            <ImageSlotView
              slot={imagesConfig.hero}
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="rounded-3xl"
              imageClassName="brightness-[1.06] contrast-[1.02] saturate-[1.05]"
              showBrief={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

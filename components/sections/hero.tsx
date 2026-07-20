"use client";

import { Check, Phone } from "lucide-react";

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import Button from "@/components/ui/button";
import ImageSlotView from "@/components/ui/image-slot";
import { scrollToBookingForm } from "@/lib/scroll-to-form";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — answers, in ~5 seconds: what they do, where, why them, what to do next.
//
//  POSITIONING: not a generic mechanic. The H1 leads with the specialist
//  capability (diagnostics, engine, gearbox) because that is the real business —
//  the client's own /services page sells it, their homepage buries it.
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
      className="relative overflow-hidden bg-brand-ink pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Copy */}
        <Reveal
          className="lg:col-span-7"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {siteConfig.suburb} · {siteConfig.city}
          </p>

          {/* The single H1 on the page. The current live site's only H1 is
              "Your Questions Answered" — the FAQ heading. */}
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Specialist vehicle diagnostics, engine and gearbox repairs
            <span className="text-brand-accent"> in Pretoria</span>
          </h1>

          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/70 md:text-lg">
            An independent workshop for the jobs that need more than a parts
            swap — complex fault finding, engine reconditioning, automatic and
            manual gearboxes, DSG and mechatronic units. We find the actual
            fault first, then tell you what it costs to fix.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {heroTicks.map((tick) => (
              <li
                key={tick}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/75"
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

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button onClick={() => scrollToBookingForm()} withArrow>
              {siteConfig.cta}
            </Button>

            <a
              href={siteConfig.phoneLink}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:text-base"
              aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
            >
              <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
              <span className="whitespace-nowrap">
                {siteConfig.phoneDisplay}
              </span>
            </a>
          </div>

          <p className="mt-5 text-xs text-white/40">
            No obligation · We diagnose before we quote · Nothing gets done
            without your approval
          </p>
        </Reveal>

        {/* The one authentic photograph — real technicians, real workshop. */}
        <Reveal
          delay={0.1}
          className="lg:col-span-5"
        >
          <ImageSlotView
            slot={imagesConfig.hero}
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="rounded-3xl shadow-ink ring-1 ring-white/10"
            showBrief={false}
          />
        </Reveal>
      </div>
    </section>
  );
}

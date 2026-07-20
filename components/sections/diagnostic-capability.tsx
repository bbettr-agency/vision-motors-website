"use client";

import { imagesConfig } from "@/config/images-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { siteConfig } from "@/config/site-config";
import { scrollToBookingForm } from "@/lib/scroll-to-form";

// ─────────────────────────────────────────────────────────────────────────────
//  DIAGNOSTIC CAPABILITY / DIFFICULT FAULTS
//
//  This is the strategic centre of the page. It is built around the single most
//  valuable sentence the business owns — a real published customer testimonial
//  describing a fault the official Nissan dealer could not resolve.
//
//  The quote is used verbatim and attributed. Nothing is claimed beyond it.
//
//  v2 (visual only): stays dark, and is now one of three dark anchors that
//  punctuate the page rather than one slab among many. Arriving here after two
//  light sections, the darkness reads as emphasis — which is the point.
// ─────────────────────────────────────────────────────────────────────────────

const capabilityPoints = [
  {
    title: "Start with the diagnosis, not the parts counter",
    body: "Replacing parts until the symptom disappears is expensive guesswork. We find the fault first — then you know what you're actually paying to fix.",
  },
  {
    title: "Second opinions welcome",
    body: "If another workshop has already looked at your car, bring us what they found. Knowing what's been checked and replaced saves diagnostic time and stops you paying twice for the same tests.",
  },
  {
    title: "Electronic and mechanical, not one or the other",
    body: "Dual-clutch transmissions and mechatronic units fail in ways that look mechanical and read electronic. Diagnosing them takes both sides of the trade.",
  },
];

export default function DiagnosticCapability() {
  return (
    <SectionContainer id="diagnostics" className="overflow-hidden bg-brand-ink">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-brass-glow"
        aria-hidden
      />

      <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Difficult faults"
            title={
              <>
                When nobody can work out
                <span className="text-brand-accent"> what&apos;s wrong</span>
              </>
            }
            description="Intermittent faults, warning lights that come and go, and problems another workshop has already been paid to look at. This is the work we take on."
          />

          <div className="mt-12 space-y-8">
            {capabilityPoints.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="border-l-2 border-brand-accent/45 pl-6"
              >
                <h3 className="font-display text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2.5 max-w-[55ch] text-sm leading-[1.75] text-brand-bone/75">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button
              onClick={() => scrollToBookingForm("Complex Fault Finding")}
              withArrow
            >
              {siteConfig.cta}
            </Button>
          </div>
        </div>

        {/* Proof: the customer's own words, verbatim. */}
        <Reveal className="space-y-6">
          <ImageSlotView
            slot={imagesConfig.diagnostics}
            className="rounded-3xl"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <figure className="rounded-2xl border border-brand-accent/30 bg-brand-graphite p-8 shadow-card">
            <blockquote
              lang="af"
              className="font-display text-lg leading-snug text-white"
            >
              &ldquo;Die fout wat julle opgespoor en reggestel het is iets wat
              die amptelike Nissan handelaar nie kon regkry nie!&rdquo;
            </blockquote>

            <p className="mt-4 text-sm leading-[1.7] text-brand-bone/70">
              &ldquo;The fault you found and corrected is something the official
              Nissan dealer could not get right.&rdquo;
            </p>

            <figcaption className="mt-6 border-t border-white/10 pt-5 text-sm">
              <span className="font-semibold text-white">
                Andries Groenewald
              </span>
              <span className="ml-2 text-brand-bone/55">
                Nissan owner, Pretoria
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

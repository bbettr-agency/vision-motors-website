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
//  DIAGNOSTIC CAPABILITY / DIFFICULT FAULTS — the strategic centre of the page.
//
//  Built around the single most valuable sentence the business owns: a real
//  published customer testimonial describing a fault the official Nissan dealer
//  could not resolve. Used verbatim and attributed; nothing is claimed beyond it.
//
//  v6 ("workshop manual"): a proof split on the deep-navy band. Left = the
//  capability argument as ruled points; right = the diagnostics image plate and
//  the customer's own words as a large editorial pull-quote (no boxed card).
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
    <SectionContainer id="diagnostics" className="bg-brand-navy">
      <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Difficult faults"
            title={
              <>
                When nobody can work out
                <span className="text-brand-blueSoft"> what&apos;s wrong</span>
              </>
            }
            description="Intermittent faults, warning lights that come and go, and problems another workshop has already been paid to look at. This is the work we take on."
          />

          <div className="mt-12 space-y-8">
            {capabilityPoints.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="border-l-2 border-brand-steel/50 pl-6"
              >
                <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-white">
                  {point.title}
                </h3>
                <p className="mt-2.5 max-w-[55ch] text-sm leading-[1.75] text-brand-bone">
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
              {siteConfig.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Proof: the diagnostics plate + the customer's own words, verbatim. */}
        <Reveal className="lg:pt-2">
          <ImageSlotView
            slot={imagesConfig.diagnostics}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <figure className="mt-10 border-t border-brand-cta/50 pt-8">
            <span
              aria-hidden
              className="font-display text-5xl font-bold leading-none text-brand-cta"
            >
              &ldquo;
            </span>
            <blockquote
              lang="af"
              className="mt-2 font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl"
            >
              Die fout wat julle opgespoor en reggestel het is iets wat die
              amptelike Nissan handelaar nie kon regkry nie!
            </blockquote>

            <p className="mt-4 text-sm leading-[1.7] text-brand-bone">
              &ldquo;The fault you found and corrected is something the official
              Nissan dealer could not get right.&rdquo;
            </p>

            <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-brand-bone">
              <span className="text-white">Andries Groenewald</span>
              <span className="text-brand-bone"> / Nissan owner, Pretoria</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

"use client";


import { imagesConfig } from "@/config/images-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import Button from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { scrollToBookingForm } from "@/lib/scroll-to-form";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  DIAGNOSTIC CAPABILITY / DIFFICULT FAULTS
//
//  This is the strategic centre of the page. It is built around the single most
//  valuable sentence the business owns — a real published customer testimonial
//  describing a fault the official Nissan dealer could not resolve.
//
//  The quote is used verbatim and attributed. Nothing is claimed beyond it.
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
    <SectionContainer id="diagnostics" className="bg-brand-ink">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

          <div className="mt-10 space-y-7">
            {capabilityPoints.map((point, index) => (
              <Reveal
                key={point.title}
          delay={index * 0.08}
                className="border-l-2 border-brand-accent/40 pl-5"
              >
                <h3 className="font-display text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-white/60">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Button onClick={() => scrollToBookingForm("Complex Fault Finding")} withArrow>
              {siteConfig.cta}
            </Button>
          </div>
        </div>

        {/* Proof: the customer's own words, verbatim. */}
        <Reveal
          className="space-y-6"
        >
          <ImageSlotView
            slot={imagesConfig.diagnostics}
            className="rounded-3xl"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <figure className="rounded-2xl border border-brand-accent/25 bg-brand-accent/[0.06] p-7">
            <blockquote
              lang="af"
              className="font-display text-lg leading-snug text-white"
            >
              &ldquo;Die fout wat julle opgespoor en reggestel het is iets wat
              die amptelike Nissan handelaar nie kon regkry nie!&rdquo;
            </blockquote>

            <p className="mt-4 text-sm leading-relaxed text-white/55">
              &ldquo;The fault you found and corrected is something the official
              Nissan dealer could not get right.&rdquo;
            </p>

            <figcaption className="mt-5 border-t border-white/10 pt-4 text-sm">
              <span className="font-semibold text-white">
                Andries Groenewald
              </span>
              <span className="ml-2 text-white/45">Nissan owner, Pretoria</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

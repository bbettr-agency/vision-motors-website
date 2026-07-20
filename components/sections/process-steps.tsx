"use client";

import { processConfig } from "@/config/process-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/**
 * HOW IT WORKS — kills the "what happens if I enquire?" objection and makes
 * the approval gate (the highest-ranked objection in the research) explicit.
 *
 * ❌ No timeframes. Turnaround is unverified and one 1-star Google review
 *    specifically cites a 6-week wait. See config/process-config.ts.
 *
 * v2 (visual only): light. This is a reassurance section for someone deciding
 * whether to make contact — it should feel open and easy to scan, not weighty.
 */
export default function ProcessSteps() {
  return (
    <SectionContainer className="bg-brand-cream">
      <SectionHeading
        tone="light"
        eyebrow="How it works"
        title="Four steps, no surprises"
        align="center"
        className="max-w-2xl"
      />

      <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processConfig.map((step, index) => (
          <Reveal
            key={step.number}
            as="li"
            delay={index * 0.08}
            className="relative rounded-2xl border border-brand-stone bg-white p-8 shadow-soft"
          >
            <span className="font-display text-3xl font-extrabold text-brand-accent">
              {step.number}
            </span>

            <h3 className="mt-5 font-display text-base font-semibold leading-snug text-brand-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.7] text-brand-inkSoft">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </SectionContainer>
  );
}

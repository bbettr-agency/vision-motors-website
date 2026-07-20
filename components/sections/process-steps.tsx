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
 */
export default function ProcessSteps() {
  return (
    <SectionContainer className="bg-brand-charcoal">
      <SectionHeading
        eyebrow="How it works"
        title="Four steps, no surprises"
        align="center"
        className="max-w-2xl"
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processConfig.map((step, index) => (
          <Reveal as="li"
            key={step.number}
          delay={index * 0.08}
            className="relative rounded-2xl border border-white/[0.07] bg-brand-graphite p-7"
          >
            <span className="font-display text-3xl font-extrabold text-brand-accent/30">
              {step.number}
            </span>

            <h3 className="mt-4 font-display text-base font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/55">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </SectionContainer>
  );
}

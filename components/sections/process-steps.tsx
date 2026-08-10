"use client";

import { processConfig } from "@/config/process-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/**
 * HOW IT WORKS — kills the "what happens if I enquire?" objection and makes the
 * approval gate (the highest-ranked objection in the research) explicit.
 *
 * v6 ("workshop manual"): not four floating boxes but a connected PROCESS RAIL —
 * numbered square nodes on a technical line (horizontal on desktop, vertical on
 * mobile). Warm paper surface.
 *
 * ❌ No timeframes. Turnaround is unverified and one 1-star Google review cites
 *    a 6-week wait. See config/process-config.ts.
 */
export default function ProcessSteps() {
  return (
    <SectionContainer className="bg-brand-cream">
      <SectionHeading
        tone="light"
        eyebrow="The process"
        title="Four steps, no surprises"
        align="center"
        className="max-w-2xl"
      />

      <ol className="relative mt-16 grid gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-0">
        {/* Connector line — behind the nodes. */}
        <span
          aria-hidden
          className="absolute left-[27px] top-7 bottom-7 w-px bg-brand-ink/20 md:left-[10%] md:right-[10%] md:top-7 md:bottom-auto md:h-px md:w-auto"
        />

        {processConfig.map((step, index) => (
          <Reveal
            key={step.number}
            as="li"
            delay={index * 0.08}
            className="relative z-10 flex items-start gap-5 md:flex-col md:gap-0"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-brand-ink bg-brand-cream font-mono text-lg font-semibold text-brand-ink">
              {step.number}
            </span>

            <div className="md:mt-6">
              <h3 className="font-display text-lg font-bold leading-[0.98] tracking-tight text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-[34ch] text-sm leading-[1.7] text-brand-inkSoft">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionContainer>
  );
}

"use client";

import { whyUsConfig } from "@/config/trust-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

/**
 * WHY CHOOSE VISION MOTORS
 * Three entries, each answering a ranked objection from the research.
 * Three strong beats six generic (SYSTEM copy standard).
 *
 * v2 (visual only): dark charcoal, sitting between two light sections. It
 * punctuates the light zone and gives the three promises weight — this is the
 * section that answers the highest-ranked objection on the page.
 * Cards sit on graphite so they lift clearly off the charcoal behind them.
 */
export default function WhyUs() {
  return (
    <SectionContainer className="bg-brand-charcoal">
      <SectionHeading
        eyebrow="Why Vision Motors"
        title="No surprises on the invoice"
        description="The most common complaint about workshops isn't the repair — it's finding out afterwards what it cost and why."
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {whyUsConfig.map((item, index) => (
          <Reveal
            key={item.title}
            as="article"
            delay={index * 0.08}
            className="rounded-2xl border border-white/10 bg-brand-graphite p-9 shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>

            <h3 className="mt-7 font-display text-lg font-semibold leading-snug text-white">
              {item.title}
            </h3>
            <p className="mt-3.5 text-sm leading-[1.75] text-brand-bone/75">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

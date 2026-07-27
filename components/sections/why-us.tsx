"use client";

import { whyUsConfig } from "@/config/trust-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

/**
 * WHY CHOOSE VISION MOTORS — three entries, each answering a ranked objection.
 *
 * v6 ("workshop manual"): not three floating cards but a ruled trust band —
 * three columns divided by vertical hairlines on charcoal, mono-indexed. It
 * punctuates the light zone and gives the three promises weight without boxes.
 */
export default function WhyUs() {
  return (
    <SectionContainer className="bg-brand-ink">
      <SectionHeading
        eyebrow="Why Vision Motors"
        title="No surprises on the invoice"
        description="The most common complaint about workshops isn't the repair — it's finding out afterwards what it cost and why."
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-16 grid gap-y-10 md:grid-cols-3 md:gap-y-0 md:divide-x md:divide-white/12">
        {whyUsConfig.map((item, index) => (
          <Reveal
            key={item.title}
            as="article"
            delay={index * 0.08}
            className="md:px-9 md:first:pl-0 md:last:pr-0"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-2xl font-medium text-brand-cta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon name={item.icon} className="h-5 w-5 text-brand-steel" />
            </div>

            <h3 className="mt-6 font-display text-xl font-bold uppercase leading-[0.98] tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-3.5 text-sm leading-[1.75] text-brand-bone">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

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

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {whyUsConfig.map((item, index) => (
          <Reveal as="article"
            key={item.title}
          delay={index * 0.08}
            className="rounded-2xl border border-white/[0.07] bg-brand-graphite p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>

            <h3 className="mt-6 font-display text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

"use client";

import { ExternalLink, Info } from "lucide-react";

import { rightsConfig } from "@/config/rights-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  CUSTOMER RIGHTS — structural change 2 from the approved plan.
//
//  Every competitor sells accreditation. Nobody sells the customer's rights.
//  All wording, clause numbers and the mandatory caveat live in
//  config/rights-config.ts, which documents the sourcing and the specific
//  errors (the phantom "R7", the CPA s56 misattribution) we avoid repeating.
//
//  The caveat block is NOT optional. Removing it would make the section
//  misleading, because guideline 5.4.8 is explicit that ISP-caused damage can
//  void specific warranty provisions.
//
//  v2 (visual only): this section proved the page needed contrast, but in v1 it
//  was the ONLY light section, so it read as a different website. It now sits on
//  `sand` inside a coherent warm family, with brass icons instead of blue —
//  contrast without discontinuity.
// ─────────────────────────────────────────────────────────────────────────────

export default function RightsSection() {
  return (
    <SectionContainer id="your-rights" className="bg-brand-sand">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={rightsConfig.eyebrow}
            title={rightsConfig.title}
            description={rightsConfig.intro}
            tone="light"
          />
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {rightsConfig.points.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="flex gap-5 rounded-2xl border border-brand-stone bg-white p-7 shadow-soft"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accentTint text-brand-accentInk">
                  <Icon name={point.icon} className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-display text-base font-semibold text-brand-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-brand-inkSoft">
                    {point.body}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-inkMuted">
                    {point.citation}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* MANDATORY caveat — see config/rights-config.ts.
              Deliberately styled as a distinct, quieter surface so it reads as
              an honest aside rather than another selling point. */}
          <Reveal
            delay={0.24}
            className="mt-4 flex gap-5 rounded-2xl border border-brand-ink/15 bg-brand-linen p-7"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-ink/10 text-brand-ink/70">
              <Info className="h-5 w-5" aria-hidden />
            </span>

            <div>
              <h3 className="font-display text-base font-semibold text-brand-ink">
                {rightsConfig.caveat.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-brand-inkSoft">
                {rightsConfig.caveat.body}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-inkMuted">
                {rightsConfig.caveat.citation}
              </p>
            </div>
          </Reveal>

          <div className="mt-7 space-y-2.5">
            <a
              href={rightsConfig.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-accentInk underline underline-offset-4 transition-colors hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentInk"
            >
              {rightsConfig.sourceLabel}
              <ExternalLink className="h-3 w-3 shrink-0" aria-hidden />
            </a>
            <p className="text-xs leading-[1.7] text-brand-inkMuted">
              {rightsConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

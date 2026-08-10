"use client";

import { ExternalLink, Info } from "lucide-react";

import { rightsConfig } from "@/config/rights-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  CUSTOMER RIGHTS — structural change 2 from the approved plan.
//
//  Every competitor sells accreditation. Nobody sells the customer's rights.
//  All wording, clause numbers and the mandatory caveat live in
//  config/rights-config.ts.
//
//  The caveat block is NOT optional. Removing it would make the section
//  misleading (guideline 5.4.8: ISP-caused damage can void specific warranty
//  provisions).
//
//  v6 ("workshop manual"): an advice-desk layout — practical answers as ruled
//  rows, not white cards. Concrete surface, mono citations, hairline rules.
// ─────────────────────────────────────────────────────────────────────────────

export default function RightsSection() {
  return (
    <SectionContainer id="your-rights" className="bg-brand-bluegrey">
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
          <div className="border-t border-brand-ink/15">
            {rightsConfig.points.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="border-b border-brand-ink/15 py-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-brand-inkMuted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-brand-ink">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.7] text-brand-inkSoft">
                      {point.body}
                    </p>
                    <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-inkMuted">
                      {point.citation}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* MANDATORY caveat — a distinct, quieter inset so it reads as an
              honest aside, not another selling point. Kept as a container
              because it genuinely aids comprehension (Correction 8). */}
          <Reveal
            delay={0.24}
            className="mt-8 flex gap-4 border-l-2 border-brand-cta bg-brand-tint/60 p-6"
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-inkSoft" aria-hidden />
            <div>
              <h3 className="font-display text-base font-bold tracking-tight text-brand-ink">
                {rightsConfig.caveat.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-brand-inkSoft">
                {rightsConfig.caveat.body}
              </p>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-inkMuted">
                {rightsConfig.caveat.citation}
              </p>
            </div>
          </Reveal>

          <div className="mt-7 space-y-2.5">
            <a
              href={rightsConfig.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-blue underline underline-offset-4 transition-colors hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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

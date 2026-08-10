import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceGroups } from "@/config/services-config";
import { utilityRoutes } from "@/config/routes";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES — the homepage "what can they repair?" answer.
//
//  Four plain-language groups a normal car owner can scan in seconds. Each panel
//  states what it covers, the everyday reasons someone books it, and the specific
//  work we do — then points to the services hub. Not four identical thin cards:
//  the "common reasons" column does real work, turning a capability list into a
//  "yes, that's my problem" moment. Verified architecture only (serviceGroups).
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  return (
    <SectionContainer id="services" className="bg-brand-bluegrey">
      <SectionHeading
        tone="light"
        eyebrow="What we repair"
        title="From a routine service to a full rebuild"
        description="Everyday servicing and the difficult engine, gearbox and diagnostic work most independents send away — all under one roof in Wonderboom South."
        className="max-w-3xl"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {serviceGroups.map((group, index) => (
          <Reveal
            key={group.key}
            as="article"
            delay={(index % 2) * 0.06}
            className="group flex h-full flex-col rounded-2xl border border-brand-ink/10 bg-white/70 p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-cta/40 hover:shadow-soft motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-ink/5 text-brand-blue">
                <Icon name={group.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-brand-ink sm:text-2xl">
                {group.title}
              </h3>
            </div>

            <p className="mt-4 text-[0.95rem] leading-[1.6] text-brand-inkSoft">
              {group.covers}
            </p>

            {/* Common reasons — the "yes, that's my problem" column. */}
            <div className="mt-6">
              <p className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-inkMuted">
                Common reasons
              </p>
              <ul className="mt-3 space-y-2">
                {group.reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-2.5 text-sm text-brand-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cta"
                    />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* What we do. */}
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-brand-ink/10 pt-5 text-xs font-medium text-brand-inkMuted">
              {group.work.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="h-1 w-1 shrink-0 rounded-full bg-brand-inkMuted/60"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={utilityRoutes.services}
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 self-start text-sm font-semibold text-brand-blue underline-offset-4 transition-colors hover:text-brand-ink hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              See details
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        ))}
      </div>

      {/*
        Towing is deliberately NOT listed — hours, radius and whether it is their
        own truck are unconfirmed. AdBlue/SCR removal is deliberately excluded
        (emissions-control defeat work). Both are logged for the client.
      */}
    </SectionContainer>
  );
}

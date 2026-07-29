"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { specialistServices, everydayServices } from "@/config/services-config";
import { utilityRoutes } from "@/config/routes";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES — the capability index. Specialist work leads (the differentiator);
//  everyday servicing follows (the volume entry point). Ordered by commercial
//  value, never alphabetically.
//
//  v6 ("workshop manual"): NOT a wall of identical cards. Specialist services
//  are large numbered editorial ROWS — big mono index, uppercase title, then the
//  explanation and a ruled bullet list. Everyday services collapse to a single
//  inline ruled list. Concrete surface, hairline rules, no boxes.
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  return (
    <SectionContainer id="services" className="bg-brand-bluegrey">
      <SectionHeading
        tone="light"
        eyebrow="Capabilities"
        title={
          <>
            The work most workshops
            <br />
            <span className="text-brand-inkMuted">send somewhere else.</span>
          </>
        }
        description="Engine and driveline rebuilds are done here, in our own workshop — not sub-contracted out and marked up."
        className="max-w-3xl"
      />

      {/* Specialist tier — large numbered rows. */}
      <div className="mt-14 border-t border-brand-ink/15">
        {specialistServices.map((service, index) => (
          <Reveal
            key={service.slug}
            as="article"
            delay={(index % 3) * 0.06}
            className="grid gap-x-8 gap-y-4 border-b border-brand-ink/15 py-8 md:py-10 lg:grid-cols-12"
          >
            <div className="flex items-start gap-5 lg:col-span-5">
              <span className="font-mono text-3xl font-medium leading-none text-brand-inkMuted sm:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="mb-2 inline-flex text-brand-blue">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight text-brand-ink sm:text-3xl">
                  {service.title}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="max-w-[56ch] text-base leading-[1.7] text-brand-inkSoft">
                {service.description}
              </p>

              {service.bullets && (
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.08em] text-brand-inkMuted">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5">
                      <span
                        className="h-1.5 w-1.5 shrink-0 bg-brand-cta"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Everyday tier — one inline ruled list, no pills. */}
      <div className="mt-14">
        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
          Also in the workshop
        </h3>

        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {everydayServices.map((service, index) => (
            <Reveal
              key={service.slug}
              as="li"
              delay={index * 0.05}
              className="inline-flex items-center gap-2.5 text-brand-ink"
            >
              <Icon
                name={service.icon}
                className="h-4 w-4 shrink-0 text-brand-inkMuted"
              />
              <span className="text-sm font-semibold uppercase tracking-tight">
                {service.title}
              </span>
            </Reveal>
          ))}
        </ul>

        <Link
          href={utilityRoutes.services}
          className="mt-10 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-blue underline underline-offset-4 transition-colors hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          See all services in detail
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        {/*
          Towing is deliberately NOT listed. The client's site claims it, but
          hours, radius and whether it's their own truck are all unconfirmed.
          TODO(client): confirm, then add as an everyday service + FAQ entry.
        */}
      </div>
    </SectionContainer>
  );
}

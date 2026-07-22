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
//  SERVICES — two tiers.
//  Specialist work leads (the differentiator); everyday servicing follows
//  (the volume entry point). Ordered by commercial value, never alphabetically.
//
//  v2 (visual only): light section on `linen`, a half-step deeper than the
//  symptom band above it so the two light sections separate rather than merging
//  into one long pale stretch. Specialist cards are white — they carry the most
//  important content on the page and now read as clean, scannable panels.
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  return (
    <SectionContainer id="services" className="bg-brand-linen">
      <SectionHeading
        tone="light"
        eyebrow="What we do"
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

      {/* Specialist tier */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {specialistServices.map((service, index) => (
          <Reveal
            key={service.slug}
            as="article"
            delay={(index % 3) * 0.07}
            className="group flex flex-col rounded-2xl border border-brand-stone bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-softLift"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accentTint text-brand-accentInk transition-all duration-300 group-hover:bg-brand-accent group-hover:text-brand-ink">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs text-brand-inkMuted/60">
                0{index + 1}
              </span>
            </div>

            <h3 className="font-display text-xl font-semibold text-brand-ink">
              {service.title}
            </h3>
            <p className="mt-3.5 text-sm leading-[1.7] text-brand-inkSoft">
              {service.description}
            </p>

            {service.bullets && (
              <ul className="mt-6 space-y-2 border-t border-brand-stone pt-5 text-xs text-brand-inkMuted">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5">
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-brand-accentInk"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>

      {/* Everyday tier */}
      <div className="mt-16">
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-inkMuted">
          Also in the workshop
        </h3>

        <div className="mt-7 flex flex-wrap gap-3">
          {everydayServices.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 0.05}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-stone bg-white px-5 py-3 shadow-soft"
            >
              <Icon
                name={service.icon}
                className="h-4 w-4 shrink-0 text-brand-accentInk"
              />
              <span className="text-sm font-medium text-brand-ink">
                {service.title}
              </span>
            </Reveal>
          ))}
        </div>

        <Link
          href={utilityRoutes.services}
          className="mt-10 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-indigo underline underline-offset-4 transition-colors hover:text-brand-indigoMid focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
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

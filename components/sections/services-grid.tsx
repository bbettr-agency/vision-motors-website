"use client";


import { specialistServices, everydayServices } from "@/config/services-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES — two tiers.
//  Specialist work leads (the differentiator); everyday servicing follows
//  (the volume entry point). Ordered by commercial value, never alphabetically.
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  return (
    <SectionContainer id="services" className="bg-brand-charcoal">
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            The work most workshops
            <br />
            <span className="text-white/40">send somewhere else.</span>
          </>
        }
        description="Engine and driveline rebuilds are done here, in our own workshop — not sub-contracted out and marked up."
        className="max-w-3xl"
      />

      {/* Specialist tier */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
        {specialistServices.map((service, index) => (
          <Reveal as="article"
            key={service.slug}
          delay={(index % 3) * 0.07}
            className="group flex flex-col bg-brand-graphite p-7 transition-colors duration-500 hover:bg-brand-steel"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-primaryLight transition-all duration-500 group-hover:bg-brand-accent group-hover:text-brand-ink">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs text-white/25">
                0{index + 1}
              </span>
            </div>

            <h3 className="font-display text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {service.description}
            </p>

            {service.bullets && (
              <ul className="mt-5 space-y-1.5 text-xs text-white/45">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-brand-accent"
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
      <div className="mt-14">
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/50">
          Also in the workshop
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {everydayServices.map((service, index) => (
            <Reveal
              key={service.slug}
          delay={index * 0.05}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3"
            >
              <Icon
                name={service.icon}
                className="h-4 w-4 shrink-0 text-brand-accent"
              />
              <span className="text-sm font-medium text-white/80">
                {service.title}
              </span>
            </Reveal>
          ))}
        </div>

        {/*
          Towing is deliberately NOT listed. The client's site claims it, but
          hours, radius and whether it's their own truck are all unconfirmed.
          TODO(client): confirm, then add as an everyday service + FAQ entry.
        */}
      </div>
    </SectionContainer>
  );
}

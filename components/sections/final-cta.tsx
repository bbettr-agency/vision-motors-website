"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { formConfig } from "@/config/form-config";
import { siteConfig } from "@/config/site-config";
import BookingForm from "@/components/funnel/booking-form";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  FINAL CTA — the single booking destination every CTA on the page scrolls to.
//  id="book" is the anchor used by lib/scroll-to-form.ts.
//
//  v6 ("workshop manual"): charcoal service-desk. Left = the ask + contact
//  details as a mono spec list; right = the booking form on a squared paper
//  panel (the strongest focal point on a dark section, and fields are easiest to
//  complete on light). BookingForm itself is unchanged. The amber submit stays
//  the single strongest element on the page.
// ─────────────────────────────────────────────────────────────────────────────

export default function FinalCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-t border-white/10 bg-brand-ink px-6 py-24 md:py-32 lg:px-8"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_0%,black,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Book your car in"
            title={
              <>
                Let&apos;s find out what&apos;s
                <span className="text-brand-blueSoft"> actually wrong</span>
              </>
            }
            description="Send us the details and the workshop will come back to you to arrange a time. If it's urgent, phone us — someone will help you straight away."
          />

          <ul className="mt-12 space-y-7">
            <li>
              <a
                href={siteConfig.phoneLink}
                className="group flex items-start gap-4"
                aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-cta" aria-hidden />
                <span>
                  <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand-bone">
                    Phone the workshop
                  </span>
                  <span className="mt-1.5 block whitespace-nowrap font-display text-2xl font-bold text-white transition-colors group-hover:text-brand-cta">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a href={siteConfig.emailLink} className="group flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-steel" aria-hidden />
                <span>
                  <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand-bone">
                    Email
                  </span>
                  <span className="mt-1.5 block break-all text-sm font-medium text-white transition-colors group-hover:text-brand-blueSoft">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
            </li>

            <li className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-steel" aria-hidden />
              <span>
                <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand-bone">
                  Where we are
                </span>
                <span className="mt-1.5 block text-sm font-medium text-white">
                  {siteConfig.addressDisplay}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="border border-white/12 bg-white p-7 shadow-form sm:p-9">
            <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-brand-ink sm:text-3xl">
              {formConfig.headings.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.7] text-brand-inkSoft">
              {formConfig.headings.subtitle}
            </p>

            <div className="mt-8">
              <BookingForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

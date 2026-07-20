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
//  Opening hours are deliberately absent: the client's own site contradicts
//  itself ("5 days a week" vs "24/7") and no source is confirmed. Publishing
//  wrong hours costs a customer a wasted trip.
//  TODO(client): confirm hours, then add beside the address.
//
//  v2 (visual only): dark anchor, arriving after the light FAQ so the closing
//  ask carries weight. The form panel is now a WHITE card — a light form on a
//  dark section is the strongest possible focal point, and form fields are
//  easier to complete on light. The brass submit button remains the single
//  strongest element on the page.
// ─────────────────────────────────────────────────────────────────────────────

export default function FinalCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-t border-white/10 bg-brand-ink px-6 py-24 md:py-32 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-brass-glow" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Book your car in"
            title={
              <>
                Let&apos;s find out what&apos;s
                <span className="text-brand-accent"> actually wrong</span>
              </>
            }
            description="Send us the details and the workshop will come back to you to arrange a time. If it's urgent, phone us — someone will help you straight away."
          />

          <ul className="mt-12 space-y-6">
            <li>
              <a
                href={siteConfig.phoneLink}
                className="group inline-flex min-h-[44px] items-start gap-4"
                aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-brand-bone/65">
                    Phone the workshop
                  </span>
                  <span className="mt-1 block whitespace-nowrap font-display text-lg font-bold text-white transition-colors group-hover:text-brand-accent">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={siteConfig.emailLink}
                className="group inline-flex min-h-[44px] items-start gap-4"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-brand-bone/65">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-white transition-colors group-hover:text-brand-accent">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-brand-bone/65">
                  Where we are
                </span>
                <span className="mt-1 block text-sm font-medium text-white">
                  {siteConfig.addressDisplay}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="rounded-3xl border border-brand-stone bg-white p-7 shadow-ink sm:p-9">
            <h3 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
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

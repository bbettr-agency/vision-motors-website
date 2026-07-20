"use client";

import { ArrowRight } from "lucide-react";

import { symptomsConfig } from "@/config/symptoms-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import { scrollToBookingForm } from "@/lib/scroll-to-form";

// ─────────────────────────────────────────────────────────────────────────────
//  SYMPTOM BAND — structural change 1 from the approved plan.
//
//  Visitors do not arrive thinking "I need a gearbox overhaul". They arrive
//  thinking "it's making a noise". Every competitor leads with a service
//  taxonomy — the business's mental model, not the customer's.
//
//  Each tile pre-fills the booking form's service field and scrolls to it,
//  turning a vague worry into a completed enquiry in two taps.
//
//  v2 (visual only): first light section. This is the moment the page opens up
//  after the dark hero — and it is the most approachable section on the page,
//  which is exactly why it should not be black. White tiles on warm cream.
// ─────────────────────────────────────────────────────────────────────────────

export default function SymptomBand() {
  return (
    <SectionContainer id="symptoms" className="bg-brand-cream">
      <SectionHeading
        tone="light"
        eyebrow="Start here"
        title={
          <>
            What is your car doing?
            <br />
            <span className="text-brand-inkMuted">
              You don&apos;t need to know what&apos;s wrong.
            </span>
          </>
        }
        description="Tell us the symptom in your own words. Working out the cause is our job — that's what the diagnosis is for."
        className="max-w-3xl"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {symptomsConfig.map((symptom, index) => (
          <Reveal key={symptom.label} delay={(index % 4) * 0.06}>
            <button
              type="button"
              onClick={() => scrollToBookingForm(symptom.presetService)}
              className="group flex min-h-[104px] w-full items-center gap-4 rounded-2xl border border-brand-stone bg-white p-5 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-softLift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentInk focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accentTint text-brand-accentInk transition-all duration-300 group-hover:bg-brand-accent group-hover:text-brand-ink">
                <Icon name={symptom.icon} className="h-5 w-5" />
              </span>

              <span className="flex-1 font-display text-sm font-semibold leading-snug text-brand-ink">
                {symptom.label}
              </span>

              <ArrowRight
                className="h-4 w-4 shrink-0 text-brand-inkMuted/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-accentInk"
                aria-hidden
              />
            </button>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

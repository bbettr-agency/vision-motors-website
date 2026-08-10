"use client";

import { ArrowRight } from "lucide-react";

import { symptomsConfig } from "@/config/symptoms-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import { scrollToBookingForm } from "@/lib/scroll-to-form";

// ─────────────────────────────────────────────────────────────────────────────
//  SYMPTOM INDEX — structural change 1 from the approved plan.
//
//  Visitors arrive thinking "it's making a noise", not "I need a gearbox
//  overhaul". Each row pre-fills the booking form's service field and scrolls to
//  it, turning a vague worry into a completed enquiry.
//
//  v6 ("workshop manual"): not a dashboard-card grid but a technical symptom
//  INDEX — two columns of large ruled rows. Each row is a real <button>
//  (Correction 9) with clear hover/focus, an inline steel indicator icon, and a
//  mono index. Warm paper surface.
// ─────────────────────────────────────────────────────────────────────────────

export default function SymptomBand() {
  return (
    <SectionContainer id="symptoms" className="bg-brand-cream">
      <SectionHeading
        tone="light"
        eyebrow="Diagnostic index"
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

      <div className="mt-12 grid border-t border-brand-line sm:grid-cols-2 sm:gap-x-12">
        {symptomsConfig.map((symptom, index) => (
          <Reveal key={symptom.label} as="div" delay={(index % 2) * 0.06}>
            <button
              type="button"
              onClick={() => scrollToBookingForm(symptom.presetService)}
              className="group flex w-full items-center gap-4 border-b border-brand-line py-6 text-left transition-colors duration-300 hover:bg-brand-tint/60 focus:outline-none focus-visible:bg-brand-tint focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-blue sm:px-3"
            >
              <span className="w-6 shrink-0 font-mono text-xs text-brand-inkMuted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                name={symptom.icon}
                className="h-5 w-5 shrink-0 text-brand-steel transition-colors duration-300 group-hover:text-brand-cta"
              />
              <span className="flex-1 font-display text-lg font-semibold tracking-tight text-brand-ink sm:text-xl">
                {symptom.label}
              </span>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-brand-inkMuted transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-ink"
                aria-hidden
              />
            </button>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

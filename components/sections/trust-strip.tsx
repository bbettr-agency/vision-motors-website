"use client";

import { trustConfig } from "@/config/trust-config";
import Reveal from "@/components/ui/reveal";

/**
 * Technical spec bar directly beneath the hero — answers "are these people
 * legitimate?" before the visitor scrolls further.
 *
 * v6 ("workshop manual"): not four floating chips but a single ruled spec bar,
 * mono-indexed and divided by vertical hairlines — the look of a specification
 * block on a service sheet.
 *
 * ❌ No founding year, accreditation badge, warranty or rating — all unverified.
 */
export default function TrustStrip() {
  return (
    <section
      aria-label="Why customers use Vision Motors"
      className="border-y border-white/10 bg-brand-ink px-6 py-10 md:py-12 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
        {trustConfig.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="lg:px-8 lg:first:pl-0"
          >
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-brand-cta">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-3 font-display text-base font-bold leading-tight tracking-tight text-white">
              {item.title}
            </h2>
            <p className="mt-2 text-xs leading-[1.65] text-brand-bone">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { trustConfig } from "@/config/trust-config";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

/**
 * Compact credibility strip directly beneath the hero.
 * Answers "are these people legitimate?" before the visitor scrolls further.
 *
 * v2: stays dark as the closing note of the hero anchor, but on charcoal rather
 * than a second slab of near-black — so it reads as a distinct band and the
 * hero visibly ends. Icon chips are brass on a warm tint instead of blue.
 *
 * ❌ No founding year, MIWA badge, warranty or rating — all unverified.
 *    Once the client confirms them this is where they belong.
 */
export default function TrustStrip() {
  return (
    <section
      aria-label="Why customers use Vision Motors"
      className="border-y border-white/10 bg-brand-charcoal px-6 py-12 md:py-14 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-9 sm:grid-cols-2 lg:grid-cols-4">
        {trustConfig.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="flex items-start gap-4"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-sm font-bold leading-snug text-white">
                {item.title}
              </h2>
              <p className="mt-1.5 text-xs leading-[1.65] text-brand-bone/65">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

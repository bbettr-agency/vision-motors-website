"use client";


import { trustConfig } from "@/config/trust-config";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";

/**
 * Compact credibility strip directly beneath the hero.
 * Answers "are these people legitimate?" before the visitor scrolls further.
 *
 * ❌ No founding year, MIWA badge, warranty or rating — all unverified.
 *    Once the client confirms them this is where they belong.
 */
export default function TrustStrip() {
  return (
    <section
      aria-label="Why customers use Vision Motors"
      className="border-y border-white/10 bg-brand-charcoal px-6 py-10 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustConfig.map((item, index) => (
          <Reveal
            key={item.title}
          delay={index * 0.08}
            className="flex items-start gap-3.5"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primaryLight">
              <Icon name={item.icon} className="h-4.5 w-4.5" />
            </span>
            <div>
              <h2 className="font-display text-sm font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

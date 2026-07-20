"use client";

import { Quote } from "lucide-react";

import { reviewsConfig } from "@/config/reviews-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  TESTIMONIALS — real, named, verbatim, from the client's own published site.
//
//  ❌ NO aggregate rating and NO star graphics. The Google profile is 4.2★ from
//     71 reviews with 8 one-star entries; leading with the number would surface
//     the weakest asset. `aggregateRating` schema is also not emitted.
//     See config/reviews-config.ts and lib/schema.ts.
// ─────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <SectionContainer id="reviews" className="bg-brand-ink">
      <SectionHeading
        eyebrow="In their words"
        title="What customers actually said"
        description="Published exactly as written, including the one in Afrikaans."
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {reviewsConfig.map((review, index) => (
          <Reveal as="figure"
            key={review.author}
          delay={(index % 2) * 0.08}
            className="flex flex-col rounded-2xl border border-white/[0.07] bg-brand-graphite p-8"
          >
            <Quote
              className="h-6 w-6 shrink-0 text-brand-accent/50"
              aria-hidden
            />

            <blockquote
              lang={review.language}
              className="mt-5 flex-1 text-sm leading-relaxed text-white/70"
            >
              {review.quote}
            </blockquote>

            <figcaption className="mt-6 border-t border-white/10 pt-5">
              <span className="block font-display text-sm font-semibold text-white">
                {review.author}
              </span>
              <span className="mt-0.5 block text-xs text-white/40">
                {review.role}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

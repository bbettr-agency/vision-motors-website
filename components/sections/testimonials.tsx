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
//
//  v2 (visual only): dark anchor. Quotes carry better on dark — it reads as
//  considered rather than clinical — and it separates the light process/FAQ
//  zone below from the light rights section above.
// ─────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <SectionContainer id="reviews" className="bg-brand-indigoDeep">
      <SectionHeading
        eyebrow="In their words"
        title="What customers actually said"
        description="Published exactly as written, including the one in Afrikaans."
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {reviewsConfig.map((review, index) => (
          <Reveal
            key={review.author}
            as="figure"
            delay={(index % 2) * 0.08}
            className="flex flex-col rounded-2xl border border-white/10 bg-brand-indigoCard p-9 shadow-card"
          >
            <Quote className="h-6 w-6 shrink-0 text-brand-accent/60" aria-hidden />

            <blockquote
              lang={review.language}
              className="mt-6 flex-1 text-sm leading-[1.8] text-brand-bone/80"
            >
              {review.quote}
            </blockquote>

            <figcaption className="mt-7 border-t border-white/10 pt-6">
              <span className="block font-display text-sm font-semibold text-white">
                {review.author}
              </span>
              <span className="mt-1 block text-xs text-brand-bone/55">
                {review.role}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

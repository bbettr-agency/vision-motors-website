import { Star } from "lucide-react";

import { reviews, reviewsMeta } from "@/config/reviews-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  REVIEWS — a masonry grid of real, named, 5-star customer reviews on the deep
//  navy band. Only genuine five-star reviews are shown; the honest overall
//  Google rating (4.3) is displayed and linked so nothing is hidden. Real people
//  → initial avatars, never fabricated photos. No aggregateRating/Review schema.
// ─────────────────────────────────────────────────────────────────────────────

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const AVATAR_TONES = [
  "bg-brand-cta/15 text-brand-cta",
  "bg-brand-blueMid/25 text-brand-blueSoft",
  "bg-white/10 text-white",
  "bg-brand-steel/25 text-brand-bone",
];

/** Renders 5 stars with a fractional fill for `value` (e.g. 4.3). */
function Stars({ value = 5, className }: { value?: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Star className="absolute inset-0 h-4 w-4 text-brand-cta/30" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-4 w-4 fill-brand-cta text-brand-cta" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionContainer id="reviews" className="bg-brand-navy">
      <SectionHeading
        eyebrow="Reviews"
        title="Read what people are saying"
        description="Real, named reviews from Vision Motors customers — shown exactly as written, including the ones in Afrikaans."
        align="center"
        className="max-w-2xl"
      />

      {/* Honest overall rating — links to the live Google listing. */}
      {reviewsMeta.showAggregateRating && (
        <div className="mt-8 flex justify-center">
          <a
            href={reviewsMeta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 transition-colors hover:border-brand-cta/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
          >
            <span className="font-display text-2xl font-extrabold text-white">
              {reviewsMeta.rating}
            </span>
            <Stars value={Number(reviewsMeta.rating)} />
            <span className="text-sm font-medium text-brand-bone">
              on {reviewsMeta.platform}
            </span>
          </a>
        </div>
      )}

      {/* Masonry grid — varied review lengths flow without gaps. */}
      <Reveal className="mt-12">
        <div className="gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <figure
              key={review.name}
              className="mb-5 break-inside-avoid rounded-2xl border border-white/10 bg-brand-navyCard/60 p-6 shadow-card"
            >
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
                    AVATAR_TONES[i % AVATAR_TONES.length]
                  )}
                >
                  {initials(review.name)}
                </span>
                <figcaption className="min-w-0">
                  <span className="block truncate font-display text-base font-bold text-white">
                    {review.name}
                  </span>
                  <span className="block truncate text-xs text-brand-bone/70">
                    {review.meta}
                  </span>
                </figcaption>
              </div>

              <Stars className="mt-4" />

              <blockquote
                lang={review.language}
                className="mt-3 text-sm leading-[1.75] text-brand-bone"
              >
                {review.text}
              </blockquote>
            </figure>
          ))}
        </div>
      </Reveal>

      <p className="mt-10 text-center text-sm text-brand-bone/70">
        <a
          href={reviewsMeta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-blueSoft underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
        >
          See all reviews on {reviewsMeta.platform}
        </a>
      </p>
    </SectionContainer>
  );
}

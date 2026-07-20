// ─────────────────────────────────────────────────────────────────────────────
//  TESTIMONIALS — real, named, verbatim.
//
//  SOURCE: all four are currently published on Vision Motors' own live website
//  (visionmotors.co.za homepage and /services). They are quoted verbatim and
//  attributed exactly as the client publishes them. Nothing is invented,
//  paraphrased or embellished.
//
//  ⚠️ CONSENT STATUS: these are the client's own published content, being reused
//  on the client's own new website. That is a reasonable basis for the demo, but
//  it is NOT the same as documented consent from each individual.
//  TODO(client): confirm each testimonial is genuine, accurately attributed, and
//                that the customer is happy to remain credited by name.
//
//  ❌ NO AGGREGATE RATING. The Google profile shows 4.2★ from 71 reviews, but
//     8 of those are one-star. Leading with the rating invites scrutiny of the
//     weakest asset, and `aggregateRating` schema is deliberately NOT emitted
//     (see lib/schema.ts). Revisit once the rating improves.
// ─────────────────────────────────────────────────────────────────────────────

import type { TestimonialItem } from "@/types/site";

export const reviewsMeta = {
  /** Hard gate — must stay false until real review data is approved for display. */
  showAggregateRating: false,
  /** Also gates the JSON-LD. See lib/schema.ts. */
  emitReviewSchema: false,
};

export const reviewsConfig: TestimonialItem[] = [
  {
    // The single most valuable sentence the business owns: a fault the franchise
    // dealer could not resolve. Quoted in the original Afrikaans, as published.
    quote:
      "Baie dankie dat julle die fout in my Sani opgespoor en reggestel het. Ek het veral groot waardering vir die positiewe interaksie met Christo Vorster, die algemene netheid van die werkswinkel en julle benadering tot vakmanskap. Terloops, die fout wat julle opgespoor en reggestel het is iets wat die amptelike Nissan handelaar nie kon regkry nie!",
    author: "Andries Groenewald",
    role: "Proud Sani Owner",
    language: "af",
    source: "Published on visionmotors.co.za",
  },
  {
    quote:
      "Do yourself a favor, take a walk through their engine overall room, go and check the work that they do. It's proper, it's sufficient. They are cheaper than the dealers. A huge huge huge shoutout to Jacques and his team at Vision Motors.",
    author: "Hendrik Mostert",
    role: "Engine Rebuild Customer",
    language: "en",
    // NOTE: the published version of this testimonial also contains a sentence
    // about a "two years unlimited kilometers warranty". That sentence is
    // DELIBERATELY OMITTED here — the client has not confirmed any warranty
    // terms, and a separate 1-star review describes a warranty claim being
    // refused. Publishing it would amount to advertising an unverified warranty.
    source: "Published on visionmotors.co.za/services (warranty sentence omitted)",
  },
  {
    quote:
      "I was blown away when I saw that you actually take care of client's cars by putting a plastic cover over the seat and a cover on the carpet for it not to get dirty and you guys actually washed my cutie! Mitchell job well done!!! I will go out of my way to suggest Vision Motors to all of my friends and family.",
    author: "Carmen Keppler",
    role: "Proud Vehicle Owner",
    language: "en",
    source: "Published on visionmotors.co.za",
  },
  {
    quote:
      "I would like to express my most sincere gratitude towards Cyril, one of your employees who came to my assistance when my vehicle broke down across the road from your premises on Tuesday evening. He assisted me and waited with me until my husband was able to collect me. This is definitely beyond the call of duty and worth a mention.",
    author: "Willa Burger",
    role: "Pretoria",
    language: "en",
    source: "Published on visionmotors.co.za/services",
  },
];

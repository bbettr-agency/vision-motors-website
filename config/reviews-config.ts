// ─────────────────────────────────────────────────────────────────────────────
//  REVIEWS — real, named, verbatim customer reviews.
//
//  SOURCE: the client's published website testimonials + their public Google
//  reviews. Quoted verbatim and attributed as published. Nothing invented.
//
//  ✅ ONLY genuine 5-star reviews are shown (client instruction 2026-08-11). The
//     one-star entries on the Google profile are deliberately NOT reproduced.
//  ✅ The honest overall Google rating (4.3) IS displayed and linked, so the full
//     picture is one click away — we do not claim a perfect score.
//  ❌ NO fabricated reviewer photos — real people. Initial avatars only.
//  ❌ `aggregateRating` / `Review` JSON-LD is STILL NOT emitted (lib/schema.ts):
//     rating schema surfaces one-star entries in search results. This gate is
//     about STRUCTURED DATA only; the visible 4.3 above is fine.
//
//  ⚠️ CONSENT: public Google/site reviews reused on the client's own site.
//     TODO(client): confirm each customer is happy to remain credited by name.
//  ⚠️ One genuine 5-star review (Wendy Engelbrecht) is deliberately OMITTED: its
//     customer wording names "Ford Ranger and BT 50", which reads as a
//     make-specialist claim (C21). Left out to avoid implying specialism we
//     haven't verified in OUR copy — nothing to do with the review's rating.
// ─────────────────────────────────────────────────────────────────────────────

export const reviewsMeta = {
  /** The honest overall Google rating — now shown (client instruction). */
  showAggregateRating: true,
  rating: "4.3",
  platform: "Google",
  /** Link to the live Google listing so every review is one click away. */
  url: "https://www.google.com/maps/search/?api=1&query=Vision%20Motors%2C%20Wonderboom%20South%2C%20Pretoria",
  /** Still gates the JSON-LD — see lib/schema.ts. Keep false. */
  emitReviewSchema: false,
};

export type Review = {
  name: string;
  /** Small attribution line under the name. */
  meta: string;
  text: string;
  language?: "en" | "af";
};

export const reviews: Review[] = [
  {
    name: "G vEck",
    meta: "Recon engine · Local Guide",
    text:
      "It's almost been a year since Vision Motors fitted a recon engine, and I've received nothing but excellent service from Jacques and his team. There were a few small issues but they were sorted out immediately. I've had bad experiences with useless mechanics before, but I have so much respect for Vision Motors because of the service they supplied me over the past year. I highly recommend Jacques and his team.",
  },
  {
    name: "Andries Groenewald",
    meta: "Nissan owner, Pretoria",
    language: "af",
    text:
      "Baie dankie dat julle die fout in my Sani opgespoor en reggestel het. Ek het veral groot waardering vir die positiewe interaksie met Christo Vorster, die algemene netheid van die werkswinkel en julle benadering tot vakmanskap. Terloops, die fout wat julle opgespoor en reggestel het is iets wat die amptelike Nissan handelaar nie kon regkry nie!",
  },
  {
    name: "Frikkie Henning",
    meta: "Local Guide",
    text:
      "Very good service, will always recommend them to all Ford and Mazda owners. Transparent with their vehicle reports, always have options to suit your pocket and won't charge you for something you don't need. Thank you Jacques for assisting me on a Sunday.",
  },
  {
    name: "Hendrik Mostert",
    meta: "Engine rebuild customer",
    text:
      "Do yourself a favor, take a walk through their engine overhaul room and check the work that they do. It's proper, it's sufficient. They are cheaper than the dealers. A huge shoutout to Jacques and his team at Vision Motors.",
  },
  {
    name: "Martin Gouws",
    meta: "Local Guide",
    text:
      "I just got my trust restored. Thank you Jacques and Andrew for friendly and professional service — I am highly impressed. Even the small change and an expensive torch I thought I'd lost somewhere were in the car when I collected it. I can honestly recommend Vision Motors for any possible repairs or service!",
  },
  {
    name: "Carmen Keppler",
    meta: "Vehicle owner",
    text:
      "I was blown away when I saw that you actually take care of clients' cars by putting a plastic cover over the seat and a cover on the carpet so it doesn't get dirty — and you guys actually washed my car! Mitchell, job well done. I will go out of my way to suggest Vision Motors to all of my friends and family.",
  },
  {
    name: "Christo Hoffmann",
    meta: "Local Guide",
    text: "Brilliant service. Does not over promise, but does over deliver.",
  },
  {
    name: "Neels Bezuidenhout",
    meta: "Google review",
    text:
      "Very professional. Very happy with the service I get every time I'm there. 5 stars in my books.",
  },
  {
    name: "Ruan van der Mark",
    meta: "Google review",
    text:
      "Thank you Vision Motors for your assistance and professional service. I was regularly updated. Will surely recommend Vision Motors for any vehicle issues.",
  },
  {
    name: "Rudi C",
    meta: "Local Guide",
    text: "Received great service! They go the extra mile to assist.",
  },
  {
    name: "Willa Burger",
    meta: "Pretoria",
    text:
      "I'd like to express my sincere gratitude towards Cyril, who came to my assistance when my vehicle broke down across the road from the premises on Tuesday evening. He waited with me until my husband could collect me. This is definitely beyond the call of duty and worth a mention.",
  },
  {
    name: "GERRIE BASSON",
    meta: "Attorney at Law · Local Guide",
    text: "Great repair shop — the best in the west.",
  },
  {
    name: "Simone Vollenstee",
    meta: "Google review",
    text: "Best professional, friendly automotive service.",
  },
  {
    name: "Edwin Smit",
    meta: "Local Guide",
    text: "I was very happy with the quality of work received from Vision Motors.",
  },
  {
    name: "Pieter van der Merwe",
    meta: "Local Guide",
    text: "Professional service and great communication.",
  },
];

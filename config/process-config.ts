// ─────────────────────────────────────────────────────────────────────────────
//  HOW IT WORKS — 4 steps.
//
//  Purpose: kill the "what happens if I enquire?" objection, and make the
//  approval gate (ranked objection #1) explicit and visible.
//
//  ⚠️ NO TIMEFRAMES. Turnaround times are unverified, and one of the client's
//  1-star Google reviews specifically cites a 6-week wait. Promising a
//  turnaround we cannot stand behind would be both untrue and a dispute risk.
//  TODO(client): confirm realistic turnaround ranges per job type, then add.
// ─────────────────────────────────────────────────────────────────────────────

import type { ProcessStep } from "@/types/site";

export const processConfig: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us what your car is doing",
    description:
      "Book online or phone the workshop. Describe the symptom in your own words — you don't need to know what's wrong.",
  },
  {
    number: "02",
    title: "We find the actual fault",
    description:
      "We diagnose the problem properly rather than replacing parts and hoping. If another workshop has already looked at it, tell us what they found.",
  },
  {
    number: "03",
    title: "You get a quote, and you decide",
    description:
      "We explain what's wrong in plain language and what it costs to put right. Nothing gets done until you approve it.",
  },
  {
    number: "04",
    title: "We do the work and you collect",
    description:
      "The repair is carried out and the work is recorded. Your car is protected while it's with us and returned clean.",
  },
];

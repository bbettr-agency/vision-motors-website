// ─────────────────────────────────────────────────────────────────────────────
//  FAQ — the ranked objection table from the approved plan §4, in the
//  customer's own words. This same array renders the visible FAQ AND generates
//  the FAQPage JSON-LD (lib/schema.ts), so the two can never drift apart.
//
//  ⚠️ ANSWERS MUST NOT PROMISE WHAT IS UNVERIFIED. Where a fact is pending
//  client confirmation, the answer stays honest and neutral rather than
//  inventing a number. Marked TODO(client) inline.
// ─────────────────────────────────────────────────────────────────────────────

import type { FaqItem } from "@/types/site";

export const faqConfig: FaqItem[] = [
  {
    // Objection #8
    question: "What makes of vehicle do you work on?",
    answer:
      "We work on vehicles of all makes and models — cars, bakkies, SUVs and commercial vehicles, petrol and diesel. Alongside general servicing and repairs we take on specialist work including engine reconditioning, automatic and manual gearbox overhauls, DSG and mechatronic units, differentials and transfer cases.",
  },
  {
    // Objection #1 — the highest-ranked objection in the research
    question: "Will you do work I haven't approved?",
    answer:
      "No. We diagnose the fault, explain what we've found and give you a quote. Work only starts once you've approved it. If we find something additional while the car is with us, we come back to you before doing anything about it.",
  },
  {
    // Objection #7 — the "another workshop couldn't find it" entry point
    question: "Another workshop couldn't find the fault. Can you help?",
    answer:
      "That's a large part of what we do. Bring us whatever you already know — what the symptom is, when it happens, and what has already been checked or replaced. Starting from that saves diagnostic time and avoids paying twice for the same tests.",
  },
  {
    // Objection #4 — links to the rights section
    question: "Will servicing here affect my manufacturer's warranty?",
    answer:
      "Since July 2021 the Competition Commission's automotive aftermarket guidelines set out your right to choose where your vehicle is serviced, including at an independent workshop, while it is still under warranty — and to have original or suitable non-original parts fitted. We record the work we do so your service history stays complete. Being straight with you: those guidelines are not binding law, and if any workshop's work causes damage a manufacturer may decline cover for that specific failure. We'll tell you upfront where a repair carries that risk.",
  },
  {
    question: "Do I need to book, or can I just come in?",
    answer:
      "Booking ahead is best — it means we can set aside the right time and the right person for your vehicle. Send us the details through the booking form or phone the workshop and we'll arrange a time with you.",
    // TODO(client): confirm whether walk-ins are accepted and on what basis.
  },
  {
    // Objection #5 — turnaround. Honest, no invented number.
    question: "How long will my car be with you?",
    answer:
      "It depends entirely on the job — a service is a different proposition to an engine rebuild. We'd rather give you a realistic timeframe once we've seen the vehicle and found the fault than guess upfront and be wrong.",
    // TODO(client): once realistic ranges are confirmed, add them here. Note that
    // a 1-star Google review specifically cites a 6-week wait, so this is a live
    // reputational issue, not just a copy gap.
  },
  {
    // Objection #6
    question: "Do you supply parts, and can I see the old ones?",
    answer:
      "We supply parts and can order in what isn't held in stock. If you'd like to see the parts that came off your vehicle, just ask when you book it in and we'll keep them for you.",
  },
  {
    question: "Where are you and how do I get hold of you?",
    answer:
      "We're an independent workshop on Steve Biko Road in Wonderboom South, Pretoria — on the M5 running through the Moot. Phone the workshop on 012 335 0070 or send us your details through the booking form.",
    // TODO(client): add the exact street number and opening hours once confirmed.
    // Four different addresses are currently in circulation across directories.
  },
];

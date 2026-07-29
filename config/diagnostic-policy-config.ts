// ─────────────────────────────────────────────────────────────────────────────
//  DIAGNOSTIC / STRIP-AND-ASSESS POLICY — one canonical source, three lengths.
//
//  Client instruction (2026-07-27): customers must understand that some engine
//  and gearbox faults cannot be fully diagnosed from the outside. Where a unit
//  must be removed and stripped for internal assessment, the customer is told
//  first, a strip-and-assess charge may apply, and a repair quotation follows.
//  If the repair quote is declined, the agreed stripping/assessment/labour is
//  still payable.
//
//  Written plainly and transparently — never threatening, never a vague
//  "there is definitely a strip and quote invoice".
//
//  ⚠️ TRUTH GUARDRAILS (§10): NO fixed strip/assess or diagnostic PRICE, NO
//  "free diagnostics", NO "free stripping", NO guaranteed quotation acceptance.
//  Pricing is always "discussed before work begins", never stated as a figure.
//
//  Use the shortest version that fits the context. Do not paste the long
//  paragraph repeatedly — reference these constants so the wording stays
//  identical everywhere (homepage, FAQ, booking, terms, service pages).
// ─────────────────────────────────────────────────────────────────────────────

export const diagnosticPolicy = {
  /** One line — homepage diagnostics point, service-page intro. */
  short:
    "Some engine and gearbox faults can only be confirmed once the unit is removed and opened for internal assessment. If that's needed we explain the strip-and-assess step, and its cost, before we start — and you always get a repair quote before any repair goes ahead.",

  /** Standard — FAQ answer, booking page, service process. */
  standard:
    "Some engine and gearbox faults can only be confirmed after the unit has been removed and opened for internal assessment. Where this is necessary, our team will explain the process and applicable strip-and-assess charges before proceeding. Once the inspection is complete, we will provide a repair quotation. If the repair quotation is not accepted, the agreed removal, stripping, assessment and related labour charges will still be payable.",

  /** Detailed — Terms / workshop process page. */
  detailed:
    "Initial diagnostics do not always reveal internal damage. Some engine and gearbox faults can only be confirmed after the unit has been removed and opened for internal assessment. Where our team determines this is necessary, we will explain the work involved and any applicable strip-and-assess charges before proceeding — dismantling is real labour and is not automatically free. Once the internal inspection is complete, we provide a quotation for the repair required. You may accept or decline that repair quotation. If it is declined, no repair is carried out, but the removal, stripping, assessment and related labour already agreed and completed remain payable.",

  /** FAQ question paired with `standard`. */
  faqQuestion:
    "What if the fault can't be confirmed without stripping the engine or gearbox?",

  /** Concise acknowledgement shown near the booking form (§7). */
  bookingNote:
    "Please note: certain engine and gearbox faults may require removal and internal assessment before an accurate repair quotation can be prepared. Any applicable strip-and-assess charges will be discussed with you before work begins.",

  /**
   * Clarifies that the online form does NOT authorise dismantling (§7).
   * The booking form is a booking REQUEST, not workshop authorisation.
   */
  bookingRequestClarifier:
    "Submitting this form is a booking request — it is not authorisation to remove or dismantle any components. Nothing is stripped or repaired without your approval.",
} as const;

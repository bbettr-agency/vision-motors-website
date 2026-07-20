// ─────────────────────────────────────────────────────────────────────────────
//  CUSTOMER RIGHTS / RIGHT TO CHOOSE
//
//  STRATEGIC RATIONALE (approved plan §6, structural change 2):
//  Every competitor in the Wonderboom / Pretoria North cluster sells
//  *accreditation* — identical RMI badges, an identical 6-month/10,000km
//  guarantee. Nobody sells the customer's *rights*. The Competition Commission
//  itself documented (clause 5.3) that consumers do not know them. This is
//  uncontested ground with primary-source backing.
//
//  ⚠️ ACCURACY IS NON-NEGOTIABLE HERE.
//  Source: "Guidelines for Competition in the South African Automotive
//  Aftermarket", issued by the Competition Commission under s79(1) of the
//  Competition Act No. 89 of 1998. Published December 2020, effective 1 July 2021.
//  https://www.compcom.co.za/wp-content/uploads/2021/07/Guidelines-for-Competition-in-the-South-African-Automotive-Aftermarket.pdf
//
//  CORRECTIONS APPLIED — errors we deliberately do NOT repeat:
//   1. There is no "guideline R7". The Guidelines are numbered 1–17; the
//      in-warranty independent-service-provider provisions are in Section 5.
//      Section 7 concerns insurers allocating work.
//   2. Several SA workshop sites cite "CPA Section 56" as protecting warranty
//      when using an independent. That is a misattribution — CPA s56 is the
//      implied warranty of quality on goods. We do not repeat it.
//   3. The Guidelines are NOT binding (clause 1.1). We never say "the law says
//      your warranty cannot be voided".
//   4. Clause 5.4.8 is explicit that ISP-caused damage CAN void specific
//      warranty provisions. Any claim that servicing here "cannot affect your
//      warranty" would be false. The caveat below is mandatory, not optional.
//
//  This section presents general consumer information. It is deliberately NOT
//  framed as a Vision Motors guarantee or as legal advice.
// ─────────────────────────────────────────────────────────────────────────────

export const rightsConfig = {
  eyebrow: "Your right to choose",
  title: "Still under warranty? You can still choose your workshop.",
  intro:
    "Since 1 July 2021, the Competition Commission's guidelines for the South African automotive aftermarket have set out your right to have your vehicle serviced where you choose — including at an independent workshop — while it is still under warranty.",

  points: [
    {
      icon: "CircleCheck",
      title: "Your choice of workshop",
      body: "Manufacturers should not obstruct your choice of service provider, whether that is an approved dealer or an independent workshop.",
      citation: "Guideline 5.4.1",
    },
    {
      icon: "CircleCheck",
      title: "Your choice of parts",
      body: "You may have original or suitable non-original spare parts fitted at a service provider of your choice during the in-warranty period.",
      citation: "Guideline 10.8.1",
    },
    {
      icon: "CircleCheck",
      title: "Your service record stays intact",
      body: "Independent workshops are required to record in-warranty work in your service book, so your vehicle's service history stays complete and traceable.",
      citation: "Guideline 5.4.5",
    },
  ],

  // MANDATORY. Removing this makes the section misleading.
  caveat: {
    title: "The honest caveat",
    body: "These guidelines are not binding law, and they do not make a warranty untouchable. If work done by any independent workshop causes damage, the manufacturer may decline warranty cover for that specific failure — though the rest of your warranty remains enforceable. We record the work we do, and we will always tell you upfront where a repair carries risk.",
    citation: "Guidelines 1.1 and 5.4.8",
  },

  sourceLabel:
    "Source: Competition Commission of South Africa — Guidelines for Competition in the South African Automotive Aftermarket, effective 1 July 2021.",
  sourceUrl:
    "https://www.compcom.co.za/wp-content/uploads/2021/07/Guidelines-for-Competition-in-the-South-African-Automotive-Aftermarket.pdf",

  disclaimer:
    "This is general information, not legal advice. Warranty terms differ between manufacturers — check your own warranty documentation.",
};

// ─────────────────────────────────────────────────────────────────────────────
//  BOOKING FORM CONFIG
//
//  Transport: native form → /api/booking (server route) → GHL inbound webhook.
//  The webhook URL is a SERVER-ONLY env var (GHL_WEBHOOK_URL) and never reaches
//  the browser bundle. No secrets in the frontend.
//
//  DEMO MODE: while GHL_WEBHOOK_URL is unset, the API route validates the
//  submission and returns success without forwarding anywhere, logging the
//  payload server-side so nothing is silently lost. The UI shows a clearly
//  labelled demo notice. See app/api/booking/route.ts.
//
//  ⚠️ NOTE FOR THE CLIENT CONVERSATION: all three forms on the CURRENT live
//  visionmotors.co.za have empty `action` and `method` attributes and may have
//  been silently dropping every enquiry. Worth testing urgently.
// ─────────────────────────────────────────────────────────────────────────────

export const formConfig = {
  /** Server route. Never a raw webhook URL. */
  endpoint: "/api/booking",

  /**
   * Post-submission destination for the production build.
   * Not wired in the demo — the form shows an inline success state instead so
   * the page can be reviewed end-to-end without a live CRM.
   * TODO: enable once GHL is connected, so conversion tracking fires on /thank-you.
   */
  successRedirect: "/thank-you",
  redirectOnSuccess: false,

  headings: {
    title: "Book your car in",
    subtitle:
      "Tell us what your car is doing. We'll come back to you to arrange a time.",
  },

  fields: {
    nameLabel: "Your name",
    namePlaceholder: "e.g. Johan van der Merwe",
    phoneLabel: "Phone number",
    phonePlaceholder: "072 000 0000",
    emailLabel: "Email address",
    emailPlaceholder: "you@email.com",
    makeLabel: "Vehicle make",
    makePlaceholder: "e.g. Volkswagen",
    modelLabel: "Vehicle model",
    modelPlaceholder: "e.g. Polo 1.4 TSI",
    serviceLabel: "What do you need?",
    problemLabel: "What is the car doing?",
    problemPlaceholder:
      "Describe it in your own words — you don't need to know what's wrong.",
  },

  /** Options mirror servicesConfig titles so the symptom band can pre-select. */
  serviceOptions: [
    "Not sure — please diagnose",
    "Complex Fault Finding",
    "Engine Reconditioning",
    "Automatic & Manual Gearboxes",
    "DSG & Mechatronic Repairs",
    "Differentials & Transfer Cases",
    "Vehicle Servicing",
    "Brake Repairs",
    "Belt Replacement",
    "Oil Changes",
    "Fuel System Cleaning",
    "Something else",
  ],

  submitLabel: "Book Your Car In",
  submittingLabel: "Sending…",

  /**
   * Reassurance microcopy. Every line must be true.
   * ❌ No response-time promise — turnaround and staffing are unverified.
   */
  reassurance: [
    "No obligation",
    "We diagnose before we quote",
    "Nothing gets done without your approval",
  ],

  successTitle: "Thanks — we've got your details.",
  successBody:
    "The workshop will be in touch to arrange a time. If it's urgent, phone us directly and we'll help you straight away.",

  /** POPIA (SA). Links to the privacy page — TODO: real legal pages needed. */
  consentText:
    "By submitting this form you agree that Vision Motors may contact you about your enquiry.",
};

/** Custom event used by the symptom band to pre-select a service and focus the form. */
export const SELECT_SERVICE_EVENT = "vm:selectService";

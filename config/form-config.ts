// ─────────────────────────────────────────────────────────────────────────────
//  BOOKING FORM CONFIG
//
//  Transport: native form → /api/booking (server route) → GHL inbound webhook.
//  `GHL_WEBHOOK_URL` is SERVER-ONLY (no NEXT_PUBLIC_ prefix) so the endpoint
//  never reaches the browser bundle. No secrets in the frontend.
//
//  DEMO MODE: while GHL_WEBHOOK_URL is unset the API route validates the
//  submission, logs it server-side, and returns `forwarded: false`. The UI then
//  shows a clearly labelled demo notice. No enquiry is silently lost.
//
//  ⚠️ All three forms on the CURRENT live visionmotors.co.za have empty
//  `action` and `method` attributes and capture only name + email — no phone,
//  no vehicle, no message. They may have been dropping enquiries for years.
// ─────────────────────────────────────────────────────────────────────────────

export const formConfig = {
  endpoint: "/api/booking",

  /**
   * Production flow redirects to /thank-you so conversions fire on a real page
   * view. Disabled until GHL is connected so the demo can be reviewed inline.
   */
  successRedirect: "/thank-you",
  redirectOnSuccess: false,

  headings: {
    title: "Book your car in",
    subtitle:
      "Tell us what your car is doing and when suits you. We'll come back to you to confirm a time.",
  },

  fields: {
    nameLabel: "Your name",
    namePlaceholder: "e.g. Johan van der Merwe",
    phoneLabel: "Phone number",
    phonePlaceholder: "072 000 0000",
    emailLabel: "Email address",
    emailPlaceholder: "you@email.com",
    makeLabel: "Vehicle make",
    makePlaceholder: "e.g. Ford",
    modelLabel: "Vehicle model",
    modelPlaceholder: "e.g. Ranger 3.2 TDCi",
    yearLabel: "Year",
    yearPlaceholder: "e.g. 2018",
    regLabel: "Registration number",
    regPlaceholder: "Optional",
    serviceLabel: "What do you need?",
    problemLabel: "What is the car doing?",
    problemPlaceholder:
      "Describe it in your own words — you don't need to know what's wrong.",
    preferredDateLabel: "Preferred date",
    contactMethodLabel: "How should we contact you?",
  },

  /** Mirrors the approved service architecture. */
  serviceOptions: [
    "Not sure — please diagnose",
    "Vehicle Diagnostics & Fault Finding",
    "Engine Reconditioning & Repairs",
    "Ford Ranger Engine Work",
    "Gearbox Repairs",
    "DSG & Mechatronic Repairs",
    "Driveline Repairs (diff / transfer case)",
    "Brakes, Clutches & Mechanical Repairs",
    "Car Servicing & Maintenance",
    "Something else",
  ],

  contactMethods: ["Phone call", "WhatsApp", "Email"],

  submitLabel: "Send booking request",
  submittingLabel: "Sending…",

  /**
   * ⚠️ MANDATORY. The client instruction is explicit: the requested date is NOT
   * a confirmed booking until the workshop makes contact. This renders directly
   * above the submit button and must not be removed or softened.
   */
  dateDisclaimer:
    "Your preferred date is a request, not a confirmed booking. The workshop will contact you to agree a time.",

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
    "The workshop will be in touch to confirm a time. If it's urgent, phone us directly and we'll help you straight away.",

  consentText:
    "By submitting this form you agree that Vision Motors may contact you about your enquiry.",
};

/** Lets the homepage symptom band pre-select a service on the booking page. */
export const SELECT_SERVICE_EVENT = "vm:selectService";

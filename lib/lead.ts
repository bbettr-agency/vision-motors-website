// Server-side validation + normalisation for booking enquiries.
// Mirrored client-side for instant feedback; this is the authoritative check.

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  registration: string;
  service: string;
  problem: string;
  preferredDate: string;
  contactMethod: string;
  // Attribution, captured client-side.
  source?: string;
  gclid?: string;
  utm?: Record<string, string>;
  pageUrl?: string;
  pagePath?: string;
  /** Honeypot — must be empty. Bots fill it. */
  company?: string;
};

const cap = (v: unknown, n: number) => (v ?? "").toString().trim().slice(0, n);

export function validateLead(data: Partial<LeadPayload>): {
  valid: boolean;
  errors: string[];
  spam: boolean;
  clean: LeadPayload;
} {
  const errors: string[] = [];

  const name = cap(data.name, 120);
  const phone = cap(data.phone, 40);
  const email = cap(data.email, 200);

  if (name.length < 2) errors.push("Please enter your name.");

  // SA-style numbers: digits, spaces, +, (), — need at least 9 digits.
  if (phone.replace(/\D/g, "").length < 9)
    errors.push("Please enter a valid phone number.");

  if (!email) {
    errors.push("Please enter your email address.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Honeypot: a real user never sees this field, so any value means a bot.
  // Handled as a silent success upstream rather than an error, so bots get no
  // signal about why they failed.
  const spam = cap(data.company, 100).length > 0;

  const clean: LeadPayload = {
    name,
    phone,
    email,
    vehicleMake: cap(data.vehicleMake, 60),
    vehicleModel: cap(data.vehicleModel, 80),
    vehicleYear: cap(data.vehicleYear, 10),
    registration: cap(data.registration, 20),
    service: cap(data.service, 80),
    problem: cap(data.problem, 1500),
    preferredDate: cap(data.preferredDate, 30),
    contactMethod: cap(data.contactMethod, 30),
    source: cap(data.source, 300) || undefined,
    gclid: cap(data.gclid, 200) || undefined,
    utm: data.utm && typeof data.utm === "object" ? data.utm : undefined,
    pageUrl: cap(data.pageUrl, 500) || undefined,
    pagePath: cap(data.pagePath, 200) || undefined,
  };

  return { valid: errors.length === 0, errors, spam, clean };
}

// Server-side validation + normalisation for booking enquiries.
// Mirrored client-side for instant feedback; this is the authoritative check.

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  service: string;
  problem: string;
  /** Attribution, captured client-side from the URL / referrer. */
  source?: string;
  pageUrl?: string;
};

export function validateLead(data: Partial<LeadPayload>): {
  valid: boolean;
  errors: string[];
  clean: LeadPayload;
} {
  const errors: string[] = [];

  const name = (data.name ?? "").toString().trim();
  const phone = (data.phone ?? "").toString().trim();
  const email = (data.email ?? "").toString().trim();

  if (name.length < 2) errors.push("Please enter your name.");

  // SA-style numbers: digits, spaces, +, (), - — need at least 9 digits.
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 9) errors.push("Please enter a valid phone number.");

  // Email required — the workshop needs a written record of the enquiry.
  if (!email) {
    errors.push("Please enter your email address.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Defensive caps on every free-text field — payload size / abuse protection.
  const clean: LeadPayload = {
    name,
    phone,
    email,
    vehicleMake: (data.vehicleMake ?? "").toString().trim().slice(0, 60),
    vehicleModel: (data.vehicleModel ?? "").toString().trim().slice(0, 80),
    service: (data.service ?? "").toString().trim().slice(0, 80),
    problem: (data.problem ?? "").toString().trim().slice(0, 1500),
    source: (data.source ?? "").toString().slice(0, 200) || undefined,
    pageUrl: (data.pageUrl ?? "").toString().slice(0, 500) || undefined,
  };

  return { valid: errors.length === 0, errors, clean };
}

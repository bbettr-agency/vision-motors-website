import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import LegalShell from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = createMetadata({
  title: "Website Terms of Use",
  description:
    "The terms that apply to using the Vision Motors website, including what a booking request means and the limits of information published here.",
  path: "/website-terms-of-use",
});

export default function Page() {
  return (
    <LegalShell
      path="/website-terms-of-use"
      title="Website Terms of Use"
      intro="What you can expect from this website, and what it does and does not commit either of us to."
      updated="22 July 2026"
    >
      <p>
        These terms apply to your use of the {siteConfig.businessName} website.
        They cover the website only — the terms of any actual repair work are
        agreed with you directly, in writing, before that work begins.
      </p>

      <h2>Booking requests are requests</h2>
      <p>
        Submitting the booking form does not confirm a booking. It tells us you
        would like one. A booking exists only once someone from the workshop has
        contacted you and agreed a time. Any date you choose on the form is a
        preference, not a reservation.
      </p>

      <h2>Quotes and diagnosis</h2>
      <p>
        Nothing on this website is a quote. Repair costs depend on what we find
        when we examine your vehicle. We diagnose the fault, explain it, and give
        you a quote — and work begins only once you approve it.
      </p>

      <h2>Information on this website</h2>
      <p>
        We keep the information here accurate and up to date, and we deliberately
        leave out anything we cannot stand behind. Even so, service descriptions
        are general: what applies to your vehicle depends on your vehicle. If
        something matters to your decision, phone us and ask.
      </p>

      <h2>Warranty</h2>
      <p>{siteConfig.warrantyInterimCopy}</p>

      <h2>Guidance about your rights is not legal advice</h2>
      <p>
        Our page about servicing an in-warranty vehicle at an independent
        workshop summarises published Competition Commission guidance. It is
        general information, not legal advice, and those guidelines are not
        binding law. Warranty terms differ between manufacturers — check your own
        warranty documentation.
      </p>

      <h2>Links to other websites</h2>
      <p>
        Where we link to another website, we do so because we think it is useful.
        We do not control those sites and are not responsible for their content.
      </p>

      <h2>Content on this site</h2>
      <p>
        The text, images and design here belong to {siteConfig.businessName} or
        are used with permission. Please do not reproduce them without asking.
      </p>

      <h2>Questions</h2>
      <p>
        Phone <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a> or
        email <a href={siteConfig.emailLink}>{siteConfig.email}</a>.
      </p>
    </LegalShell>
  );
}

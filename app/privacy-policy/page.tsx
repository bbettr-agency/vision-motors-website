import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import LegalShell from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Vision Motors collects, uses and protects the personal information you send through this website, in line with POPIA.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <LegalShell
      path="/privacy-policy"
      title="Privacy Policy"
      intro="What we do with the information you send us through this website, and what you can ask us to do about it."
      updated="22 July 2026"
    >
      <p>
        This policy explains how {siteConfig.businessName} handles personal
        information collected through this website. We have written it in plain
        language rather than legal boilerplate.
      </p>

      <h2>What we collect</h2>
      <p>
        We only collect what you choose to send us through the booking or
        contact forms:
      </p>
      <ul>
        <li>Your name, phone number and email address</li>
        <li>Your vehicle make, model, year and registration, if you give them</li>
        <li>The service you need and your description of the problem</li>
        <li>Your preferred booking date and how you would like us to contact you</li>
      </ul>
      <p>
        We also record basic technical information with your enquiry — the page
        you submitted it from and, where present, the campaign or advertisement
        that brought you to the site. This tells us which parts of the website
        are useful. It is not used to identify you personally.
      </p>

      <h2>Why we collect it</h2>
      <p>
        To respond to your enquiry, arrange a booking, and keep a record of work
        discussed or carried out on your vehicle. That is the only reason.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your information</li>
        <li>We do not share it with third parties for their own marketing</li>
        <li>We do not ask for payment card details through this website</li>
        <li>We do not collect information from children</li>
      </ul>

      <h2>Who can see it</h2>
      <p>
        Enquiries are received by the workshop and stored in the customer
        management system we use to keep track of bookings. Access is limited to
        people who need it to do their job.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and service records for as long as we need them to
        service your vehicle and to meet our record-keeping obligations. If you
        would like your details removed, ask us and we will do it.
      </p>

      <h2>Your rights under POPIA</h2>
      <p>
        Under the Protection of Personal Information Act you may ask us what
        personal information we hold about you, ask us to correct it, ask us to
        delete it, or object to us using it. Contact us and we will deal with it.
      </p>

      <h2>Cookies</h2>
      <p>
        This website uses only what is needed to make the site work and to
        understand which pages people find useful. We do not use advertising
        cookies that follow you across other websites.
      </p>

      <h2>Contact us about your information</h2>
      <p>
        Phone{" "}
        <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a> or email{" "}
        <a href={siteConfig.emailLink}>{siteConfig.email}</a>. Our workshop is at{" "}
        {siteConfig.addressDisplay}.
      </p>
    </LegalShell>
  );
}

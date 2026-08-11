import { Clock, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import CallButton from "@/components/ui/call-button";
import BranchActions from "@/components/funnel/branch-actions";
import BookingForm from "@/components/funnel/booking-form";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  CONTACT
//
//  Job of the page: answer "which workshop do I need?" immediately, then give
//  each branch its own image-free map + address + Call / WhatsApp / Directions,
//  and an enquiry form up top. TWO confirmed branches with their OWN numbers
//  (client instruction 2026-08-11) — numbers are never crossed. Company
//  switchboard 012 335 0070 stays the general number in the hero.
// ─────────────────────────────────────────────────────────────────────────────

const mapEmbed = (b: (typeof siteConfig.branches)[number]) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    `${b.name}, ${b.streetLine}, ${b.suburb}, ${b.city}, ${b.postalCode ?? ""}`
  )}&output=embed`;

export default function ContactPage() {
  const trail = buildTrail("/contact-us");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero
          trail={trail}
          eyebrow="Get in touch"
          title="Contact Vision Motors"
          intro="Choose the workshop that suits you, call or WhatsApp the team, get directions, or send us an enquiry below."
        >
          <CallButton location="contact_page" variant="brass" showNumber />
        </PageHero>

        {/* Enquiry form (high up) + compact contact summary. */}
        <SectionContainer className="bg-brand-cream">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:order-1">
              <SectionHeading
                tone="light"
                eyebrow="Send us a message"
                title="Rather send your details?"
                description="Fill this in, choose your workshop, and we'll route it straight to that branch on WhatsApp. If it's urgent, phoning is always faster."
              />

              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-brand-inkMuted">
                    <Phone className="h-4 w-4" aria-hidden /> Phone
                  </dt>
                  <dd className="mt-1">
                    <CallButton
                      location="contact_page"
                      variant="bare"
                      showNumber
                      className="font-display text-lg font-bold"
                    />
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-brand-inkMuted">
                    <Mail className="h-4 w-4" aria-hidden /> Email
                  </dt>
                  <dd className="mt-1 space-y-1">
                    <a
                      href={siteConfig.emailLink}
                      className="block break-all font-medium text-brand-blue transition-colors hover:text-brand-navy"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={siteConfig.emailServiceLink}
                      className="block break-all font-medium text-brand-blue transition-colors hover:text-brand-navy"
                    >
                      {siteConfig.emailService}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-brand-inkMuted">
                    <Clock className="h-4 w-4" aria-hidden /> Hours
                  </dt>
                  <dd className="mt-1 text-brand-inkSoft">
                    Monday–Friday · 07:30–17:00
                    <br />
                    <span className="text-brand-inkMuted">
                      Closed Saturdays, Sundays &amp; public holidays
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7 lg:order-2">
              <div className="rounded-3xl border border-brand-line bg-white p-7 shadow-soft sm:p-9">
                <BookingForm compact />
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* One strong section per branch — details + its own map, sides alternate. */}
        {siteConfig.branches.map((branch, i) => {
          const reversed = i % 2 === 1;
          return (
            <SectionContainer
              key={branch.id}
              className={i % 2 === 0 ? "bg-brand-bluegrey" : "bg-brand-cream"}
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={cn(reversed && "lg:order-2")}>
                  <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
                    {branch.utilityLabel}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                    {branch.name}
                  </h2>
                  <address className="mt-4 not-italic text-base leading-[1.7] text-brand-inkSoft">
                    {branch.streetLine}
                    <br />
                    {branch.suburb}, {branch.city}
                    {branch.postalCode ? `, ${branch.postalCode}` : ""}
                  </address>
                  <p className="mt-3 text-sm text-brand-inkSoft">
                    <span className="text-brand-inkMuted">Branch Manager:</span>{" "}
                    <span className="font-semibold text-brand-ink">
                      {branch.manager}
                    </span>
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-brand-inkMuted">
                    Mon–Fri · 07:30–17:00
                  </p>

                  <BranchActions branch={branch} className="mt-6" />
                </div>

                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-brand-line shadow-soft",
                    reversed && "lg:order-1"
                  )}
                >
                  <iframe
                    title={`Map showing ${branch.name}, ${branch.streetLine}, ${branch.suburb}, ${branch.city}`}
                    src={mapEmbed(branch)}
                    width="100%"
                    height="360"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block border-0"
                  />
                </div>
              </div>
            </SectionContainer>
          );
        })}
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

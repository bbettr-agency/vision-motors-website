import { Clock, Mail, MapPin, Navigation } from "lucide-react";

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
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";
import DirectionsLink from "@/components/funnel/directions-link";
import BookingForm from "@/components/funnel/booking-form";

// ─────────────────────────────────────────────────────────────────────────────
//  CONTACT
//
//  For someone actively trying to phone or visit. The single most important
//  job of this page is that nobody wastes a trip.
//
//  ⚠️ TWO-PREMISES HANDLING: the Engine Shop is mentioned as a facility, NOT
//  presented as a second customer-facing branch, because its address and role
//  are unconfirmed (FACT-VERIFICATION-REGISTER.md C3). Approved instruction.
//
//  ⚠️ The 867 Voortrekkersweg alias IS shown here — long-standing customers
//  still know the workshop by that name, and it prevents "is this the same
//  place?" confusion. It is labelled as a former address, never as current.
// ─────────────────────────────────────────────────────────────────────────────

// Maps search by name + street + suburb rather than a pinned coordinate,
// because the GBP pin has not been confirmed yet (C20).
const mapsQuery = encodeURIComponent(
  `${siteConfig.businessName}, ${siteConfig.addressDisplay}`
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

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
          intro="Phoning is the quickest way to reach the workshop — especially if your car isn't driveable. You can also send us your details and we'll come back to you."
        >
          <CallButton location="contact_page" variant="brass" showNumber />
        </PageHero>

        {/* Details */}
        <SectionContainer className="bg-brand-cream">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-brand-stone bg-white p-8 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold text-brand-ink">
                Where to find us
              </h2>
              <address className="mt-3 not-italic text-sm leading-[1.75] text-brand-inkSoft">
                {siteConfig.streetNumber} {siteConfig.street}
                <br />
                {siteConfig.suburb}
                <br />
                {siteConfig.city}, {siteConfig.region}
              </address>
              <p className="mt-4 text-xs leading-[1.7] text-brand-inkMuted">
                Steve Biko Road was previously Voortrekkers Road, so you may
                know us as 867 Voortrekkersweg. It&apos;s the same workshop —
                our signage still carries both.
              </p>
              <DirectionsLink href={mapsUrl} />
            </div>

            <div className="rounded-2xl border border-brand-stone bg-white p-8 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold text-brand-ink">
                When we&apos;re open
              </h2>
              <dl className="mt-3 space-y-1.5 text-sm text-brand-inkSoft">
                <div className="flex justify-between gap-4">
                  <dt>Monday – Friday</dt>
                  <dd className="font-semibold text-brand-ink">07:30 – 17:00</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Saturday</dt>
                  <dd>Closed</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Public holidays</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-[1.7] text-brand-inkMuted">
                Please phone before arriving if you&apos;re dropping a vehicle
                off, so we can make sure someone is free to take it in.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-stone bg-white p-8 shadow-soft md:col-span-2 lg:col-span-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold text-brand-ink">
                Phone or email
              </h2>
              <ul className="mt-3 space-y-3 text-sm">
                <li>
                  <span className="block text-xs uppercase tracking-[0.14em] text-brand-inkMuted">
                    Workshop
                  </span>
                  <CallButton
                    location="contact_page"
                    variant="bare"
                    showNumber
                    className="mt-1 font-display text-lg font-bold"
                  />
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.14em] text-brand-inkMuted">
                    Email
                  </span>
                  <a
                    href={siteConfig.emailLink}
                    className="mt-1 inline-flex min-h-[44px] items-center break-all font-medium text-brand-indigo transition-colors hover:text-brand-indigoMid"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*
            Engine Shop — described as a facility, NOT given an address and NOT
            presented as a second branch. Address unconfirmed (C3).
          */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand-indigoLine bg-brand-indigoTint/50 p-7">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-indigo">
              <Navigation className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-base font-semibold text-brand-ink">
                Our engine shop
              </h2>
              <p className="mt-2 max-w-[65ch] text-sm leading-[1.7] text-brand-inkSoft">
                Engine reconditioning and rebuild work is carried out at our
                separate engine shop rather than sub-contracted out. If your
                vehicle is booked in for engine work, we&apos;ll tell you where
                to bring it when you book.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Map */}
        <section aria-labelledby="map-heading" className="bg-brand-linen px-6 py-16 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2
              id="map-heading"
              className="font-display text-2xl font-bold text-brand-ink md:text-3xl"
            >
              Find the workshop
            </h2>
            <p className="mt-3 max-w-[60ch] text-sm leading-[1.75] text-brand-inkSoft">
              We&apos;re on Steve Biko Road in Wonderboom South — the M5 running
              north through the Moot. Look for the Vision Motors signage.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-stone shadow-soft">
              <iframe
                title="Map showing Vision Motors, Steve Biko Road, Wonderboom South, Pretoria"
                src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
            <DirectionsLink href={mapsUrl} className="mt-6" />
          </div>
        </section>

        {/* Form */}
        <SectionContainer className="bg-brand-cream">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                tone="light"
                eyebrow="Send us a message"
                title="Rather send your details?"
                description="Fill this in and the workshop will come back to you. If it's urgent, phoning will always be faster."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-brand-stone bg-white p-7 shadow-soft sm:p-9">
                <BookingForm compact />
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

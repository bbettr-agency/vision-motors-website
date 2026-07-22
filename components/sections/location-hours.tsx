import { Clock, MapPin } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import CallButton from "@/components/ui/call-button";
import DirectionsLink from "@/components/funnel/directions-link";

// Location + hours. Both were confirmed in Phase 1 and were previously
// missing from the site entirely — a real usability gap for a workshop.
// Postcode deliberately omitted (0031 vs 0084 unresolved, C20).

const mapsQuery = encodeURIComponent(
  `${siteConfig.businessName}, ${siteConfig.addressDisplay}`
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function LocationHours() {
  return (
    <SectionContainer className="bg-brand-sand">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            eyebrow="Where we are"
            title="On Steve Biko Road, Wonderboom South"
            description="We're on the M5 running north through the Moot. Phone ahead if you're dropping a vehicle off so we can make sure someone is free to take it in."
          />
          <CallButton
            location="final_cta"
            variant="outlineLight"
            showNumber
            className="mt-9"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          <div className="rounded-2xl border border-brand-stone bg-white p-7 shadow-soft">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold text-brand-ink">
              The workshop
            </h3>
            <address className="mt-2.5 not-italic text-sm leading-[1.75] text-brand-inkSoft">
              {siteConfig.streetNumber} {siteConfig.street}
              <br />
              {siteConfig.suburb}
              <br />
              {siteConfig.city}
            </address>
            <DirectionsLink href={mapsUrl} className="mt-4" />
          </div>

          <div className="rounded-2xl border border-brand-stone bg-white p-7 shadow-soft">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo">
              <Clock className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold text-brand-ink">
              Opening hours
            </h3>
            <dl className="mt-2.5 space-y-1.5 text-sm text-brand-inkSoft">
              <div className="flex justify-between gap-3">
                <dt>Mon – Fri</dt>
                <dd className="font-semibold text-brand-ink">07:30 – 17:00</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Sat &amp; Sun</dt>
                <dd>Closed</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Public holidays</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

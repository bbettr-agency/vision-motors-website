import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import CallButton from "@/components/ui/call-button";
import ImageSlotView from "@/components/ui/image-slot";
import DirectionsLink from "@/components/funnel/directions-link";

// Location + hours. Both confirmed in Phase 1; previously missing from the site.
// Postcode deliberately omitted (0031 vs 0084 unresolved, C20).
//
// v6 ("workshop manual"): a workshop-DESTINATION block — big phone, an exterior
// image plate, and address/hours as a ruled spec strip. No white info cards.

const mapsQuery = encodeURIComponent(
  `${siteConfig.businessName}, ${siteConfig.addressDisplay}`
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function LocationHours() {
  return (
    <SectionContainer id="find-us" className="bg-brand-cream">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <SectionHeading
            tone="light"
            eyebrow="Find the workshop"
            title="On Steve Biko Road, Wonderboom South"
            description="We're on the M5 running north through the Moot. Phone ahead if you're dropping a vehicle off so we can make sure someone is free to take it in."
          />

          {/* Big phone — decorative emphasis; the tracked CTA is the button. */}
          <p
            aria-hidden
            className="mt-9 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl"
          >
            {siteConfig.phoneDisplay}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton location="final_cta" variant="brass" showNumber />
            <DirectionsLink href={mapsUrl} />
          </div>
        </div>

        {/* Exterior image plate — the physical destination. */}
        <div className="relative h-[38vh] min-h-[260px] w-full">
          <ImageSlotView
            slot={imagesConfig.exterior}
            tone="light"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>

      {/* Address + hours — ruled spec strip, no cards. */}
      <div className="mt-14 grid gap-y-8 border-t border-brand-ink/15 pt-10 sm:grid-cols-2 sm:gap-x-0 sm:divide-x sm:divide-brand-ink/15">
        <div className="sm:pr-10">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
            The workshop
          </h3>
          <address className="mt-4 not-italic font-display text-lg font-semibold uppercase leading-tight tracking-tight text-brand-ink">
            {siteConfig.streetNumber} {siteConfig.street}
            <br />
            {siteConfig.suburb}, {siteConfig.city}
          </address>
        </div>

        <div className="sm:pl-10">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
            Opening hours
          </h3>
          <dl className="mt-4 space-y-2 text-sm text-brand-inkSoft">
            <div className="flex justify-between gap-3 border-b border-brand-ink/10 pb-2">
              <dt>Mon – Fri</dt>
              <dd className="font-display font-bold uppercase tracking-tight text-brand-ink">
                07:30 – 17:00
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-brand-ink/10 pb-2">
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
    </SectionContainer>
  );
}

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import CallButton from "@/components/ui/call-button";
import ImageSlotView from "@/components/ui/image-slot";
import DirectionsLink from "@/components/funnel/directions-link";

// Location + hours. TWO confirmed branches on Steve Biko Road (2026-07-27) —
// shown as distinct workshops, NOT historical versions of one address.
// Shared phone/hours; 1197 postcode 0084 confirmed, 1059 postcode omitted (C20).
//
// v6 ("workshop manual"): a workshop-DESTINATION block — big phone, an exterior
// image plate, and both branches + hours as a ruled spec strip. No cards.

function mapsUrl(streetNumber: string, street: string): string {
  const q = encodeURIComponent(
    `${siteConfig.businessName}, ${streetNumber} ${street}, ${siteConfig.suburb}, ${siteConfig.city}`
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function LocationHours() {
  return (
    <SectionContainer id="find-us" className="bg-brand-cream">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <SectionHeading
            tone="light"
            eyebrow="Find the workshop"
            title="Two workshops on Steve Biko Road"
            description="Both branches are on Steve Biko Road in Wonderboom South, a short distance apart. Phone ahead if you're dropping a vehicle off and we'll make sure the right branch is ready for it."
          />

          {/* Big phone — decorative emphasis; the tracked CTA is the button. */}
          <p
            aria-hidden
            className="mt-9 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl"
          >
            {siteConfig.phoneDisplay}
          </p>

          <div className="mt-6">
            <CallButton location="final_cta" variant="brass" showNumber />
          </div>
        </div>

        {/* The customer-facing space — the workshop you walk into. */}
        <div className="relative h-[38vh] min-h-[260px] w-full overflow-hidden rounded-2xl">
          <ImageSlotView
            slot={imagesConfig.waitingArea}
            tone="light"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>

      {/* Branches + hours — ruled spec strip, no cards. */}
      <div className="mt-14 grid gap-y-10 border-t border-brand-ink/15 pt-10 md:grid-cols-3 md:gap-x-0 md:divide-x md:divide-brand-ink/15">
        {siteConfig.branches.map((branch, i) => (
          <div key={branch.id} className="md:px-8 md:first:pl-0">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
              Branch {String(i + 1).padStart(2, "0")} · {branch.label}
            </h3>
            <address className="mt-4 not-italic font-display text-lg font-semibold leading-tight tracking-tight text-brand-ink">
              {branch.streetNumber} {branch.street}
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
            <DirectionsLink
              href={mapsUrl(branch.streetNumber, branch.street)}
              className="mt-4"
            />
          </div>
        ))}

        <div className="md:px-8">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
            Opening hours
          </h3>
          <dl className="mt-4 space-y-2 text-sm text-brand-inkSoft">
            <div className="flex justify-between gap-3 border-b border-brand-ink/10 pb-2">
              <dt>Mon – Fri</dt>
              <dd className="font-display font-bold tracking-tight text-brand-ink">
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

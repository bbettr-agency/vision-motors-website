import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceRoutes, utilityRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site-config";
import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import CtaBand from "@/components/sections/cta-band";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES HUB
//
//  Purpose: route an unsure visitor to the right service page.
//  Organised into customer-facing categories, not an alphabetical list.
//
//  ⚠️ Service pages are Phase 3. Until each is built and `live: true`, its card
//  renders as a described capability WITHOUT a link — nothing points at a 404,
//  and nothing is orphaned.
// ─────────────────────────────────────────────────────────────────────────────

type Group = {
  key: string;
  eyebrow: string;
  title: string;
  intro: string;
  slugs: string[];
};

const groups: Group[] = [
  {
    key: "specialist",
    eyebrow: "Specialist work",
    title: "The work most workshops send away",
    intro:
      "Engine and driveline work is done here rather than sub-contracted out. This is the side of the business that separates us from a general service centre.",
    slugs: [
      "/engine-reconditioning-pretoria",
      "/ford-ranger-engine-specialists-pretoria",
      "/gearbox-repairs-pretoria",
      "/dsg-mechatronic-repairs-pretoria",
      "/driveline-repairs-pretoria",
    ],
  },
  {
    key: "everyday",
    eyebrow: "Everyday repairs",
    title: "Servicing and mechanical repairs",
    intro:
      "The routine work that keeps a vehicle reliable — for cars, bakkies and commercial vehicles of all makes and models.",
    slugs: [
      "/vehicle-diagnostics-pretoria",
      "/brake-clutch-repairs-pretoria",
      "/car-service-pretoria",
    ],
  },
];

/** Copy per service. Kept here rather than in the route so the hub reads as one document. */
const detail: Record<string, { icon: string; blurb: string }> = {
  "/vehicle-diagnostics-pretoria": {
    icon: "Gauge",
    blurb:
      "Warning lights, intermittent faults and problems another workshop has already looked at. We find the fault before anything is replaced.",
  },
  "/engine-reconditioning-pretoria": {
    icon: "Cog",
    blurb:
      "Full rebuilds and reconditioning in our own engine shop — rod resizing, line boring, crack repairs and component replacement. We also supply reconditioned engines.",
  },
  "/ford-ranger-engine-specialists-pretoria": {
    icon: "Wrench",
    blurb:
      "Engine work on the Ford Ranger, and on the Mazda BT-50 of the years that share its engines. Our engine shop carries Ranger and BT-50 signage for a reason.",
  },
  "/gearbox-repairs-pretoria": {
    icon: "Settings2",
    blurb:
      "Repair and overhaul of automatic and manual gearboxes, including slipping, jerking and gear-selection faults.",
  },
  "/dsg-mechatronic-repairs-pretoria": {
    icon: "CircuitBoard",
    blurb:
      "Dual-clutch gearbox and mechatronic unit work — the electronic control side that most general workshops send away.",
  },
  "/driveline-repairs-pretoria": {
    icon: "Disc3",
    blurb:
      "Differentials, transfer cases and propshafts. The driveline work that keeps bakkies, SUVs and 4x4s on the road.",
  },
  "/brake-clutch-repairs-pretoria": {
    icon: "CircleGauge",
    blurb:
      "Brakes, clutches and general mechanical repairs — diagnosed properly before anything is replaced.",
  },
  "/car-service-pretoria": {
    icon: "Car",
    blurb:
      "Routine servicing, oil and filter changes, belts and fuel-system work for cars, bakkies and commercial vehicles.",
  },
};

export default function ServicesPage() {
  const trail = buildTrail("/services");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero
          trail={trail}
          eyebrow="What we do"
          title="Vehicle repairs and servicing in Pretoria"
          intro={
            <>
              Vision Motors handles everyday servicing and repairs, and has the
              equipment and experience to take on complex mechanical faults —
              including engine and gearbox work carried out in our own engine
              shop.
            </>
          }
        />

        {groups.map((group, groupIndex) => (
          <SectionContainer
            key={group.key}
            className={groupIndex % 2 === 0 ? "bg-brand-cream" : "bg-brand-linen"}
          >
            <SectionHeading
              tone="light"
              eyebrow={group.eyebrow}
              title={group.title}
              description={group.intro}
              className="max-w-3xl"
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug) => {
                const route = serviceRoutes.find((r) => r.slug === slug);
                const info = detail[slug];
                if (!route || !info) return null;

                const inner = (
                  <>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo transition-all duration-300 group-hover:bg-brand-accent group-hover:text-brand-ink">
                      <Icon name={info.icon} className="h-5 w-5" />
                    </span>

                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-brand-ink">
                      {route.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.7] text-brand-inkSoft">
                      {info.blurb}
                    </p>

                    {route.live && (
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo">
                        Read more
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </span>
                    )}
                  </>
                );

                const cardClass =
                  "group flex flex-col rounded-2xl border border-brand-stone bg-white p-8 shadow-soft transition-all duration-300";

                // Not yet built → no link, no dead end.
                return route.live ? (
                  <Link
                    key={slug}
                    href={slug}
                    className={`${cardClass} hover:-translate-y-1 hover:border-brand-indigo/40 hover:shadow-softLift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={slug} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </SectionContainer>
        ))}

        {/* Makes — factual, from the client's own signage. Never "approved". */}
        <SectionContainer className="bg-brand-indigoDeep">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Makes and models"
                title="We work on all makes and models"
                description="Cars, bakkies, SUVs and commercial vehicles, petrol and diesel. The makes below appear on our workshop signage — we service and repair them independently."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="flex flex-wrap gap-3">
                {[
                  "Ford",
                  "Mazda",
                  "Toyota",
                  "Mercedes-Benz",
                  "BMW",
                  "Opel",
                  "Nissan",
                  "Isuzu",
                  "Fiat",
                  "Chevrolet",
                  "Volkswagen",
                  "Audi",
                ].map((make) => (
                  <li
                    key={make}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/85"
                  >
                    {make}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[60ch] text-xs leading-[1.7] text-brand-bone/55">
                Vision Motors is an independent workshop. We are not an
                authorised dealer or approved agent for any manufacturer.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Warranty — restrained wording only. No duration, no mileage. */}
        <SectionContainer className="bg-brand-sand">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="Workmanship"
              title="Ask us what's covered"
              description={siteConfig.warrantyInterimCopy}
            />
            <p className="mt-6 text-sm leading-[1.7] text-brand-inkSoft">
              You&apos;ll get a quote before any work starts, explained in plain
              language — and nothing gets done until you approve it.
            </p>
            <Link
              href={utilityRoutes.warrantyRights}
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo underline underline-offset-4 transition-colors hover:text-brand-indigoMid"
            >
              Servicing here and your manufacturer&apos;s warranty
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </SectionContainer>

        <CtaBand
          location="service_page"
          heading="Not sure which of these you need?"
          body="Describe what the car is doing and we'll work out the rest. Phoning is quickest."
        />
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

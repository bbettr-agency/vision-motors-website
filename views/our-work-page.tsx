import { Camera } from "lucide-react";

import { imagesConfig } from "@/config/images-config";
import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import CtaBand from "@/components/sections/cta-band";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";

// ─────────────────────────────────────────────────────────────────────────────
//  OUR WORK
//
//  ⚠️ ARCHITECTURE ONLY. Approved instruction: hold image-heavy proof sections
//  until authentic high-resolution photographs are supplied.
//
//  Exactly ONE publishable photograph exists company-wide. The categorised
//  gallery specified in the brief has seven categories and zero images for six
//  of them (docs/IMAGE-INVENTORY.md).
//
//  ⛔ NO `ImageGallery` schema is emitted — there is no gallery to describe yet.
//  ⛔ NO stock photography. The current live site's stock mechanics beside a UK
//     number plate are exactly the credibility failure this build corrects.
//
//  Every slot is config-driven. Adding a real photograph is a one-line change
//  to config/images-config.ts — no component work.
// ─────────────────────────────────────────────────────────────────────────────

const categories = [
  {
    key: "engine",
    title: "Engine reconditioning",
    body: "Rebuilds and reconditioning in our own engine shop — rod resizing, line boring, crack repairs and component replacement.",
    slot: imagesConfig.engineRoom,
    wide: true,
  },
  {
    key: "gearbox",
    title: "Gearboxes and driveline",
    body: "Automatic and manual gearbox overhauls, DSG and mechatronic units, differentials and transfer cases.",
    slot: imagesConfig.gearboxBench,
    wide: false,
  },
  {
    key: "diagnostics",
    title: "Diagnostics",
    body: "Finding the fault before anything is replaced — including the intermittent ones another workshop has already looked at.",
    slot: imagesConfig.diagnostics,
    wide: false,
  },
  {
    key: "workshop",
    title: "The workshop",
    body: "Wonderboom South, on Steve Biko Road. Cars, bakkies and commercial vehicles, all makes and models.",
    slot: imagesConfig.exterior,
    wide: true,
  },
  {
    key: "care",
    title: "How your car comes back",
    body: "Seat and carpet protection while we work, and your vehicle returned clean — something customers mention in their own reviews.",
    slot: imagesConfig.vehicleCare,
    wide: false,
  },
  {
    key: "team",
    title: "The team at work",
    body: "The same people, year after year. Customers name them in their reviews.",
    slot: imagesConfig.team,
    wide: false,
  },
];

export default function OurWorkPage() {
  const trail = buildTrail("/our-work");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero
          trail={trail}
          eyebrow="Our work"
          title="Inside the workshop"
          intro="One of our customers put it better than we could: take a walk through the engine overhaul room and go and look at the work. This page is being photographed properly so you can do that without leaving your desk."
        />

        {/* The one real photograph we have. */}
        <SectionContainer className="bg-brand-cream">
          <SectionHeading
            tone="light"
            eyebrow="The team"
            title="Real people, real workshop"
            description="No stock photography on this site. Every image is Vision Motors."
            className="max-w-3xl"
          />
          <div className="mt-12">
            <ImageSlotView
              slot={imagesConfig.hero}
              tone="light"
              className="rounded-3xl shadow-soft"
              sizes="(max-width: 1024px) 100vw, 80vw"
              showBrief={false}
            />
          </div>

          <figure className="mt-12 max-w-2xl border-l-2 border-brand-indigo/40 pl-6">
            <blockquote className="font-display text-lg leading-snug text-brand-ink">
              &ldquo;Do yourself a favor, take a walk through their engine
              overall room, go and check the work that they do. It&apos;s
              proper, it&apos;s sufficient.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-brand-inkMuted">
              <span className="font-semibold text-brand-ink">
                Hendrik Mostert
              </span>
              {" · "}Engine rebuild customer
            </figcaption>
          </figure>
        </SectionContainer>

        {/* Categorised gallery — structure in place, photography pending. */}
        <SectionContainer className="bg-brand-linen">
          <SectionHeading
            tone="light"
            eyebrow="Coming soon"
            title="More of the workshop, properly photographed"
            description="Rather than filling this page with stock images of somebody else's workshop, we're waiting for the real thing."
            className="max-w-3xl"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map((cat) => (
              <article
                key={cat.key}
                className={cat.wide ? "md:col-span-2" : undefined}
              >
                <ImageSlotView
                  slot={cat.slot}
                  tone="light"
                  className="rounded-2xl"
                  sizes={
                    cat.wide
                      ? "(max-width: 768px) 100vw, 80vw"
                      : "(max-width: 768px) 100vw, 40vw"
                  }
                />
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-ink">
                  {cat.title}
                </h3>
                <p className="mt-2 max-w-[58ch] text-sm leading-[1.75] text-brand-inkSoft">
                  {cat.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex items-start gap-4 rounded-2xl border border-brand-indigoLine bg-brand-indigoTint/50 p-7">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-indigo">
              <Camera className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-base font-semibold text-brand-ink">
                Why some spaces are empty
              </h2>
              <p className="mt-2 max-w-[65ch] text-sm leading-[1.75] text-brand-inkSoft">
                We&apos;d rather show you nothing than show you a stock
                photograph of a workshop that isn&apos;t ours. Photography of the
                engine shop, the diagnostic bay and the team is being arranged.
              </p>
            </div>
          </div>
        </SectionContainer>

        <CtaBand
          heading="Would rather see it in person?"
          body="You're welcome to come and look at the workshop. Phone ahead so someone is free to show you around."
        />
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

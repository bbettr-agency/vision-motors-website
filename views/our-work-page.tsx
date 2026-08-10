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
    key: "engine-bench",
    title: "Stripped to the block",
    body: "Engines stripped, measured and rebuilt on our own benches — petrol and diesel, cars, bakkies and commercial vehicles.",
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
    key: "bays",
    title: "All makes and models",
    body: "Everyday runabouts to workhorses, up on the ramps — petrol and diesel, all makes and models.",
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
          intro="One of our customers put it better than we could: take a walk through the engine overhaul room and go and look at the work. Here's a look inside — the engine shop, the diagnostic bay and the bays, photographed on site."
        />

        {/* Lead editorial image — the team at work. */}
        <SectionContainer className="bg-brand-cream">
          <SectionHeading
            tone="light"
            eyebrow="The team"
            title="Real people, real workshop"
            description="No stock photography on this site. Every image is Vision Motors, photographed on site."
            className="max-w-3xl"
          />
          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <ImageSlotView
              slot={imagesConfig.techniciansDiagnosis}
              tone="light"
              className="rounded-3xl shadow-soft"
              sizes="(max-width: 768px) 100vw, 45vw"
              showBrief={false}
            />

            <figure className="border-l-2 border-brand-blue/40 pl-6">
              <blockquote className="font-display text-xl leading-snug text-brand-ink sm:text-2xl">
                &ldquo;Do yourself a favor, take a walk through their engine
                overall room, go and check the work that they do. It&apos;s
                proper, it&apos;s sufficient.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-brand-inkMuted">
                <span className="font-semibold text-brand-ink">
                  Hendrik Mostert
                </span>
                {" · "}Engine rebuild customer
              </figcaption>
            </figure>
          </div>
        </SectionContainer>

        {/* Categorised gallery — real workshop photography. */}
        <SectionContainer className="bg-brand-bluegrey">
          <SectionHeading
            tone="light"
            eyebrow="Inside the workshop"
            title="A real look at the work"
            description="The engine shop, the diagnostic bay, the ramps and the team — every image here is Vision Motors, photographed on site."
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

          <p className="mt-14 max-w-[65ch] text-sm leading-[1.75] text-brand-inkSoft">
            No stock photography, and nothing generated — every image on this
            page was taken in our own workshop. Want to see the rest? You&apos;re
            welcome to come and look in person.
          </p>
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

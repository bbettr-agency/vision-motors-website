import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import { diagnosticPolicy } from "@/config/diagnostic-policy-config";
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
//  ABOUT — DELIBERATELY RESTRAINED
//
//  Approved instruction (2026-07-22): build the architecture, draft using
//  CONFIRMED FACTS ONLY, do not invent a company story.
//
//  ⛔ ABSENT ON PURPOSE, awaiting client confirmation:
//     - Founding year (C4). Site says "since 1992" AND "almost 30 years".
//     - Team roles/titles/qualifications (C7). Three portraits, two names,
//       ~180×275px — too small to publish and no roles confirmed.
//     - Company history / origin story. Nothing supplied.
//     - Engine Shop address (C3).
//     - RMI / MIWA / ARASA (C2) — logo files are not membership evidence.
//     - Any warranty term (C1).
//
//  There is NO "our mission and vision" filler standing in for the gap. When
//  the facts arrive this page gets a proper history section; until then it says
//  only what is true.
// ─────────────────────────────────────────────────────────────────────────────

/** Every item below is defensible from the client's own signage or published copy. */
const whatWeAre = [
  {
    title: "Independent, and family run",
    body: "We're not a franchise or a dealer group. The business is family owned and operated, which is why the same faces are still here year after year.",
  },
  {
    title: "A workshop with its own engine shop",
    body: "Engine reconditioning and rebuild work happens at our own engine shop rather than being sent out to a third party and marked up. Very few independents can say that.",
  },
  {
    title: "On Steve Biko Road since long before it was called that",
    body: "Our signage still carries both 867 Voortrekkersweg and 1059 Steve Biko Road, because plenty of customers have been coming to us since before the street was renamed.",
  },
];

export default function AboutPage() {
  const trail = buildTrail("/about-us");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="space-y-2.5 overflow-x-clip bg-brand-bluegrey pt-2.5 sm:space-y-4 sm:pt-4 lg:space-y-6 lg:pt-6">
        <PageHero
          trail={trail}
          eyebrow="About us"
          title="An independent Pretoria workshop with its own engine shop"
          intro="Vision Motors services and repairs everyday vehicles in Wonderboom South — and takes on the engine and gearbox work that most workshops send somewhere else."
        />

        <SectionContainer className="bg-brand-cream">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="What we are"
                title="Two sides to the same workshop"
                description="One side keeps everyday cars, bakkies and commercial vehicles running. The other rebuilds engines and driveline components on site."
              />

              <div className="mt-11 space-y-8">
                {whatWeAre.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-brand-blue/35 pl-6"
                  >
                    <h3 className="font-display text-base font-semibold text-brand-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-[55ch] text-sm leading-[1.75] text-brand-inkSoft">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <ImageSlotView
                slot={imagesConfig.hero}
                tone="light"
                className="rounded-3xl shadow-soft"
                sizes="(max-width: 1024px) 100vw, 45vw"
                showBrief={false}
              />
              <ImageSlotView
                slot={imagesConfig.exterior}
                tone="light"
                className="rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </SectionContainer>

        {/* How we work — the approval gate, the highest-ranked objection */}
        <SectionContainer className="bg-brand-navy">
          <SectionHeading
            eyebrow="How we work"
            title="You'll know what's wrong before you spend anything"
            description="The most common complaint about workshops isn't the repair — it's finding out afterwards what it cost and why. We work the other way round."
            align="center"
            className="max-w-2xl"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Diagnose first",
                b: "We find the actual fault rather than replacing parts until the symptom goes away. That's the difference between a repair and a guess.",
              },
              {
                t: "Explain it properly",
                b: "In plain language, without jargon. If we can show you the fault, we will.",
              },
              {
                t: "Nothing without your say-so",
                b: "You get a quote, and work starts only when you approve it. If we find something else along the way, we come back to you first.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-white/10 bg-brand-navyCard p-8 shadow-card"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-brand-bone/75">
                  {item.b}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[68ch] text-center text-sm leading-[1.7] text-brand-bone/75">
            {diagnosticPolicy.short}
          </p>

          <p className="mx-auto mt-6 max-w-[60ch] text-center text-sm leading-[1.7] text-brand-bone/75">
            {siteConfig.warrantyInterimCopy}
          </p>
        </SectionContainer>

        {/* Team — architecture prepared, content awaiting confirmation */}
        <SectionContainer className="bg-brand-cream">
          <SectionHeading
            tone="light"
            eyebrow="The team"
            title="The people who'll work on your car"
            description="Two branches, two managers on the floor. Full team profiles are being photographed."
            className="max-w-3xl"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/*
              ⛔ Portraits exist but are ~180×275px — avatar-size only — and no
              roles are confirmed. Rendering documented placeholders rather than
              publishing unusable images or inventing job titles (C7).
            */}
            <ImageSlotView
              slot={imagesConfig.team}
              tone="light"
              className="rounded-2xl sm:col-span-2"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="rounded-2xl border border-brand-line bg-white p-8 shadow-soft">
              <h3 className="font-display text-base font-semibold text-brand-ink">
                A manager on the floor at each branch
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-brand-inkSoft">
                <span className="font-semibold text-brand-ink">
                  Jacques du Randt
                </span>{" "}
                is Branch Manager at the engine shop (1197 Steve Biko Road);{" "}
                <span className="font-semibold text-brand-ink">
                  Christo Vorster
                </span>{" "}
                runs the main workshop at 1059. Both are thanked by name in
                reviews customers wrote themselves.
              </p>
            </div>
          </div>
        </SectionContainer>

        <CtaBand
          heading="Come and see the workshop"
          body="If you're weighing up who to trust with your car, phone us and ask. We'd rather have the conversation than sell you something."
        />
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

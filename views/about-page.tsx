import Image from "next/image";

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import { teamMembers } from "@/config/team-config";
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
    title: "Two workshops, one team",
    body: "Vision Motors runs two workshops in Wonderboom South, Pretoria — Vision Motors on the M5 for servicing and repairs, and The Engine Shop / Vision Motors on Steve Biko Road for engine reconditioning and rebuilds.",
  },
];

/** Compact, all-true facts — they add structure without inventing a story. */
const quickFacts = [
  { value: "2", label: "Workshops in Wonderboom South" },
  { value: "In-house", label: "Engine reconditioning & rebuilds" },
  { value: "Family", label: "Owned and run" },
  { value: "Mon–Fri", label: "07:30 – 17:00" },
];

export default function AboutPage() {
  const trail = buildTrail("/about-us");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
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

              {/* Quick facts — balances the taller image column and adds
                  scannable, all-true detail. */}
              <dl className="mt-12 grid grid-cols-2 gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-brand-line bg-white p-5"
                  >
                    <dt className="font-display text-2xl font-bold tracking-tight text-brand-ink">
                      {fact.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-brand-inkSoft">
                      {fact.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Heights are capped so the image column tracks the text column
                instead of running far past it and leaving dead space. */}
            <div className="space-y-5">
              <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-soft sm:h-[500px]">
                <ImageSlotView
                  slot={imagesConfig.techniciansDiagnosis}
                  tone="light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  showBrief={false}
                />
              </div>
              <div className="relative h-[240px] overflow-hidden rounded-2xl sm:h-[360px]">
                <ImageSlotView
                  slot={imagesConfig.exterior}
                  tone="light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
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
            ].map((item, i) => (
              <div
                key={item.t}
                className="flex flex-col rounded-2xl border border-white/10 bg-brand-navyCard p-8 shadow-card"
              >
                <span className="font-mono text-xs font-medium tracking-[0.2em] text-brand-cta">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-brand-bone/75">
                  {item.b}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8">
            <p className="text-sm leading-[1.7] text-brand-bone/80">
              {diagnosticPolicy.short}
            </p>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-[1.7] text-brand-bone/60">
              {siteConfig.warrantyInterimCopy}
            </p>
          </div>
        </SectionContainer>

        {/* Team — the four real people, grouped by workshop so the branch
            association is glanceable. Names / roles from team-config (confirmed);
            nothing invented. */}
        <SectionContainer className="bg-brand-bluegrey">
          <SectionHeading
            tone="light"
            eyebrow="The team"
            title="The people who'll work on your car"
            description="Two workshops, one team — the same faces year after year. Here's who you'll deal with at each branch."
            className="max-w-3xl"
          />

          <div className="mt-14 space-y-14">
            {siteConfig.branches.map((branch) => {
              const people = teamMembers.filter(
                (m) => m.branchId === branch.id
              );
              if (people.length === 0) return null;
              return (
                <div key={branch.id}>
                  {/* Branch header — the association at a glance. */}
                  <div className="flex items-center gap-4">
                    <h3 className="font-display text-lg font-bold tracking-tight text-brand-ink sm:text-xl">
                      {branch.name}
                    </h3>
                    <span className="h-px flex-1 bg-brand-line" aria-hidden />
                    <span className="whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brand-inkMuted">
                      {branch.streetLine}
                    </span>
                  </div>

                  {/* Compact roster — small headshots (full width on mobile,
                      capped to ~208px on larger screens so they never dominate). */}
                  <div className="mt-6 flex flex-wrap gap-6">
                    {people.map((member) => (
                      <figure
                        key={member.name}
                        className="w-full overflow-hidden rounded-2xl border border-brand-line bg-white shadow-soft sm:w-52"
                      >
                        <div className="relative aspect-[4/5] bg-brand-bluegrey">
                          <Image
                            src={member.image}
                            alt={member.alt}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, 208px"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="p-4">
                          <h4 className="font-display text-base font-bold text-brand-ink">
                            {member.name}
                          </h4>
                          <p className="mt-0.5 text-sm text-brand-inkSoft">
                            {member.role}
                          </p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              );
            })}
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

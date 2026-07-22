import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site-config";
import { serviceRoutes, utilityRoutes } from "@/config/routes";
import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import CallButton from "@/components/ui/call-button";
import CtaBand from "@/components/sections/cta-band";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";
import type { ImageSlot } from "@/types/site";

// ─────────────────────────────────────────────────────────────────────────────
//  SHARED SERVICE PAGE TEMPLATE — Phase 3 uses this.
//
//  ⚠️ THIS IS A STRUCTURE, NOT A CONTENT GENERATOR.
//
//  Approved production rule: every service page needs its own brief and must be
//  independently valuable. Template-swapped pages with only the service name
//  changed are explicitly prohibited — and would cannibalise each other anyway.
//
//  Each page MUST supply:
//    - `symptoms`      in the customer's own words, specific to that job
//    - `whatsInvolved` a real explanation, not a feature list
//    - `uniqueAngle`   the thing only this page can say
//    - `proofImage`    a real photograph, or the page does not ship
//    - `faqs`          page-specific; drives FAQPage schema
//
//  ⛔ No technical fault claims may be added without client confirmation
//     (FACT-VERIFICATION-REGISTER.md C21). See docs/SERVICE-PAGE-BRIEFS.md for
//     the specific claims that are prohibited.
// ─────────────────────────────────────────────────────────────────────────────

export type ServicePageProps = {
  slug: string;
  /** H1. Includes the location where it reads naturally. */
  title: string;
  eyebrow: string;
  intro: string;
  /** Customer-phrased symptoms. Not service names. */
  symptoms: string[];
  /** What the job actually involves — the confidence builder. */
  whatsInvolved: { heading: string; body: string }[];
  /** The thing only this page can say. Mandatory — no generic filler. */
  uniqueAngle: { heading: string; body: ReactNode };
  proofImage: ImageSlot;
  faqs: { question: string; answer: string }[];
  /** 2–3 genuinely related services. Never all eight. */
  relatedSlugs: string[];
};

export default function ServicePageTemplate(props: ServicePageProps) {
  const trail = buildTrail(props.slug, props.title);
  const related = serviceRoutes.filter((r) =>
    props.relatedSlugs.includes(r.slug)
  );

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd
        data={serviceSchema({
          name: props.title,
          description: props.intro,
          path: props.slug,
        })}
      />
      {props.faqs.length > 0 && <JsonLd data={faqPageSchema(props.faqs)} />}
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero
          trail={trail}
          eyebrow={props.eyebrow}
          title={props.title}
          intro={props.intro}
        >
          <CallButton location="service_page" variant="brass" showNumber />
        </PageHero>

        {/* Symptom-led opening — matches how people actually search. */}
        <SectionContainer className="bg-brand-cream">
          <SectionHeading
            tone="light"
            eyebrow="Sound familiar?"
            title="What people usually notice first"
            className="max-w-3xl"
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {props.symptoms.map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-3 rounded-2xl border border-brand-stone bg-white p-5 shadow-soft"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accentInk"
                  strokeWidth={3}
                  aria-hidden
                />
                <span className="text-sm leading-[1.65] text-brand-ink">
                  {symptom}
                </span>
              </li>
            ))}
          </ul>
        </SectionContainer>

        {/* What's involved */}
        <SectionContainer className="bg-brand-linen">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="What's involved"
                title="What actually happens"
              />
              <div className="mt-11 space-y-8">
                {props.whatsInvolved.map((item) => (
                  <div
                    key={item.heading}
                    className="border-l-2 border-brand-indigo/35 pl-6"
                  >
                    <h3 className="font-display text-base font-semibold text-brand-ink">
                      {item.heading}
                    </h3>
                    <p className="mt-2.5 max-w-[55ch] text-sm leading-[1.75] text-brand-inkSoft">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <ImageSlotView
              slot={props.proofImage}
              tone="light"
              className="rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </SectionContainer>

        {/* Unique angle — the reason this page exists */}
        <SectionContainer className="bg-brand-indigoDeep">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Why us for this"
              title={props.uniqueAngle.heading}
            />
            <div className="mt-6 text-base leading-[1.8] text-brand-bone/80">
              {props.uniqueAngle.body}
            </div>
            <p className="mt-8 text-sm leading-[1.7] text-brand-bone/60">
              {siteConfig.warrantyInterimCopy}
            </p>
          </div>
        </SectionContainer>

        {/* FAQ */}
        {props.faqs.length > 0 && (
          <SectionContainer className="bg-brand-cream">
            <SectionHeading
              tone="light"
              eyebrow="Questions"
              title="What people ask us about this"
              className="max-w-3xl"
            />
            <dl className="mt-10 divide-y divide-brand-stone border-y border-brand-stone">
              {props.faqs.map((faq) => (
                <div key={faq.question} className="py-7">
                  <dt className="font-display text-base font-semibold text-brand-ink md:text-lg">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 max-w-[68ch] text-sm leading-[1.8] text-brand-inkSoft">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionContainer>
        )}

        {/* Related — 2-3 only, never all eight */}
        {related.length > 0 && (
          <SectionContainer className="bg-brand-linen">
            <SectionHeading
              tone="light"
              eyebrow="Related work"
              title="You might also need"
              className="max-w-3xl"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) =>
                r.live ? (
                  <Link
                    key={r.slug}
                    href={r.slug}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-indigo/40 hover:shadow-softLift"
                  >
                    <span className="font-display text-base font-semibold text-brand-ink">
                      {r.label}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-brand-indigo transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                ) : (
                  <div
                    key={r.slug}
                    className="rounded-2xl border border-brand-stone bg-white p-6 text-base font-semibold text-brand-ink shadow-soft"
                  >
                    {r.label}
                  </div>
                )
              )}
            </div>
            <Link
              href={utilityRoutes.services}
              className="mt-10 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-indigo underline underline-offset-4 hover:text-brand-indigoMid"
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </SectionContainer>
        )}

        <CtaBand location="service_page" />
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

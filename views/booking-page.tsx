import { CalendarClock, PhoneCall, Wrench } from "lucide-react";

import { formConfig } from "@/config/form-config";
import { siteConfig } from "@/config/site-config";
import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import CallButton from "@/components/ui/call-button";
import BookingForm from "@/components/funnel/booking-form";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";

// ─────────────────────────────────────────────────────────────────────────────
//  BOOKING PAGE
//
//  For the visitor who won't phone. Its job is to remove "what happens if I
//  submit this?" before the form is reached.
//
//  ⚠️ NO `Reservation` schema — a submitted date is a REQUEST, not a confirmed
//  reservation. Claiming otherwise in structured data would be false.
//
//  Calling stays visible throughout: it is the primary conversion, and this
//  page must not become a form-only dead end for someone with a broken car.
// ─────────────────────────────────────────────────────────────────────────────

const whatHappens = [
  {
    icon: PhoneCall,
    title: "We call you back",
    body: "Someone from the workshop contacts you to confirm a time that works — using the method you chose.",
  },
  {
    icon: CalendarClock,
    title: "We agree the date together",
    body: "Your preferred date is a request. We'll confirm it or offer the nearest slot we can genuinely commit to.",
  },
  {
    icon: Wrench,
    title: "We diagnose, then quote",
    body: "We find the actual fault and explain it in plain language. Nothing gets done until you approve it.",
  },
];

export default function BookingPage() {
  const trail = buildTrail("/book-a-vehicle-in");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero
          trail={trail}
          eyebrow="Book your car in"
          title="Send us your vehicle details"
          intro="Tell us what the car is doing and when suits you. The workshop will come back to you to confirm a time. If your car isn't driveable or it's urgent, phoning is quicker."
        >
          <CallButton location="booking_page" variant="brass" showNumber />
        </PageHero>

        <SectionContainer className="bg-brand-cream">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* What happens next — kills the main objection before the form */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold leading-tight text-brand-ink md:text-3xl">
                What happens after you send this
              </h2>

              <ol className="mt-9 space-y-7">
                {whatHappens.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-indigoTint text-brand-indigo">
                      <step.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-brand-ink">
                        <span className="mr-2 text-brand-accentInk">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[48ch] text-sm leading-[1.75] text-brand-inkSoft">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-2xl border border-brand-stone bg-white p-7 shadow-soft">
                <h3 className="font-display text-base font-semibold text-brand-ink">
                  Would rather just talk to someone?
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-brand-inkSoft">
                  The workshop is open Monday to Friday, 07:30 to 17:00.
                </p>
                <CallButton
                  location="booking_page"
                  variant="outlineLight"
                  showNumber
                  className="mt-5"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-brand-stone bg-white p-7 shadow-soft sm:p-9">
                <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                  {formConfig.headings.title}
                </h2>
                <p className="mt-2 text-sm leading-[1.7] text-brand-inkSoft">
                  {formConfig.headings.subtitle}
                </p>
                <div className="mt-8">
                  <BookingForm />
                </div>
              </div>

              <p className="mt-6 text-center text-xs leading-[1.7] text-brand-inkMuted">
                {siteConfig.warrantyInterimCopy}
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

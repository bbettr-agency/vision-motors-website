import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import SkipLink from "@/components/layout/skip-link";
import JsonLd from "@/components/ui/json-ld";
import { faqSchema } from "@/lib/schema";

import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import SymptomBand from "@/components/sections/symptom-band";
import ServicesGrid from "@/components/sections/services-grid";
import DiagnosticCapability from "@/components/sections/diagnostic-capability";
import WhyUs from "@/components/sections/why-us";
import RightsSection from "@/components/sections/rights-section";
import Testimonials from "@/components/sections/testimonials";
import ProcessSteps from "@/components/sections/process-steps";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import EngineShop from "@/components/sections/engine-shop";
import LocationHours from "@/components/sections/location-hours";

/**
 * Homepage composition. Section ORDER lives here and nowhere else.
 * Every section answers a named visitor question — see the approved plan §6/§7.
 */
export default function Homepage() {
  return (
    <>
      <SkipLink />
      <JsonLd data={faqSchema} />

      <Header />

      {/*
        `overflow-x-clip`, NOT `overflow-hidden`: it still clips any horizontal
        spill, but — unlike `overflow: hidden` — it does not create a scroll
        container, so the hero's `position: sticky` left column works. Using
        `overflow-hidden` here silently breaks sticky for every descendant.
      */}
      <main id="main" className="overflow-x-clip bg-brand-ink">
        {/*
          SECTION ORDER — reviewed section by section in Phase 2.
          Rhythm: dark anchor → light → light → dark → light → dark → light →
          dark → light → light → dark. No two dark sections run together
          except the hero/trust pair, which reads as one unit.

          CHANGED FROM THE DEMO:
          - WorkshopProof REMOVED. It was four placeholder tiles carrying no
            information. Its job is now done by EngineShop (a real story with a
            real differentiator) and by /our-work (the gallery). Kept in the
            codebase for when photography lands.
          - EngineShop ADDED — the strongest new proof available.
          - LocationHours ADDED — address and hours were confirmed in Phase 1
            and were previously missing from the site entirely.
        */}
        <Hero />
        <TrustStrip />
        <SymptomBand />
        <ServicesGrid />
        <DiagnosticCapability />
        <EngineShop />
        <WhyUs />
        <RightsSection />
        <Testimonials />
        <ProcessSteps />
        <Faq />
        <LocationHours />
        <FinalCta />
      </main>

      <Footer />

      {/* Overlays live outside <main>, after the footer. */}
      <StickyMobileBar />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { utilityRoutes } from "@/config/routes";

// ─────────────────────────────────────────────────────────────────────────────
//  WORKSHOP BAND — the "what does the operation actually look like?" moment.
//
//  A single full-bleed REAL photograph of the workshop with a short,
//  confidence-building line and a route into Our Work. Deliberately a different
//  composition from every other homepage section (edge-to-edge image, text set
//  low-left) so the page rhythm varies. Image-forward: minimal copy, no boxes.
//  ❌ No numeric/established-years claim (fact-gated) — the photograph is the proof.
// ─────────────────────────────────────────────────────────────────────────────

export default function WorkshopBand() {
  return (
    <section
      id="workshop"
      className="relative isolate flex min-h-[58vh] items-end overflow-hidden md:min-h-[62vh]"
    >
      <Image
        src="/images/vision-motors-workshop-bays-pretoria.jpg"
        alt="Customer vehicles up on the ramps in the Vision Motors workshop, Wonderboom South, Pretoria"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* Readability gradient — heaviest bottom-left where the copy sits. */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-ink/90 via-brand-ink/55 to-brand-ink/20"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-14 md:py-20 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-cta">
            Inside the workshop
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            A real, working workshop
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-brand-mist">
            Bays full, engines on the bench and vehicles up on the ramps. One of
            our customers said it best: take a walk through the engine overhaul
            room and look at the work before you commit to it.
          </p>
          <Link
            href={utilityRoutes.work}
            className="group mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cta/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
          >
            See our work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

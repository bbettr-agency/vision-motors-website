"use client";


import { imagesConfig } from "@/config/images-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  WORKSHOP PROOF — proves this is a real operation rather than claiming it.
//
//  IMAGE REALITY: only ONE authentic Vision Motors photograph exists. The rest
//  of this section renders documented placeholders carrying the photographer's
//  brief, so the gap is visible and actionable rather than papered over with
//  stock photography (SYSTEM/08 Image Strategy Rule).
// ─────────────────────────────────────────────────────────────────────────────

export default function WorkshopProof() {
  return (
    <SectionContainer id="workshop" className="bg-brand-charcoal">
      <SectionHeading
        eyebrow="The workshop"
        title="Come and look at the work"
        description="One of our customers put it better than we could: take a walk through the engine overhaul room and see what comes out of it."
        className="max-w-3xl"
      />

      <div className="mt-12 grid auto-rows-[220px] gap-5 sm:auto-rows-[260px] md:grid-cols-3 lg:auto-rows-[300px]">
        <Reveal
          className="md:col-span-2"
        >
          <ImageSlotView
            slot={imagesConfig.engineRoom}
            fill
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Reveal>

        <Reveal
          delay={0.08}
        >
          <ImageSlotView
            slot={imagesConfig.gearboxBench}
            fill
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </Reveal>

        <Reveal
          delay={0.12}
        >
          <ImageSlotView
            slot={imagesConfig.team}
            fill
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </Reveal>

        <Reveal
          delay={0.16}
          className="md:col-span-2"
        >
          <ImageSlotView
            slot={imagesConfig.exterior}
            fill
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Reveal>
      </div>

      <figure className="mt-10 max-w-2xl">
        <blockquote className="font-display text-lg leading-snug text-white/85">
          &ldquo;Do yourself a favor, take a walk through their engine overall
          room, go and check the work that they do. It&apos;s proper, it&apos;s
          sufficient.&rdquo;
        </blockquote>
        <figcaption className="mt-3 text-sm text-white/45">
          <span className="font-semibold text-white/70">Hendrik Mostert</span>
          {" · "}Engine rebuild customer
        </figcaption>
      </figure>
    </SectionContainer>
  );
}

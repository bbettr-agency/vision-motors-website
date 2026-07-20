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
//
//  v2 (visual only): moved to a warm light surface. This is the section that
//  will eventually carry real workshop photography, and photographs read better
//  on light — they look like a gallery rather than holes cut into a black page.
//  The placeholders use the light variant for the same reason.
// ─────────────────────────────────────────────────────────────────────────────

export default function WorkshopProof() {
  return (
    <SectionContainer id="workshop" className="bg-brand-cream">
      <SectionHeading
        tone="light"
        eyebrow="The workshop"
        title="Come and look at the work"
        description="One of our customers put it better than we could: take a walk through the engine overhaul room and see what comes out of it."
        className="max-w-3xl"
      />

      <div className="mt-14 grid auto-rows-[220px] gap-5 sm:auto-rows-[260px] md:grid-cols-3 lg:auto-rows-[300px]">
        <Reveal className="md:col-span-2">
          <ImageSlotView
            slot={imagesConfig.engineRoom}
            fill
            tone="light"
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ImageSlotView
            slot={imagesConfig.gearboxBench}
            fill
            tone="light"
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <ImageSlotView
            slot={imagesConfig.team}
            fill
            tone="light"
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </Reveal>

        <Reveal delay={0.16} className="md:col-span-2">
          <ImageSlotView
            slot={imagesConfig.exterior}
            fill
            tone="light"
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Reveal>
      </div>

      <figure className="mt-12 max-w-2xl border-l-2 border-brand-accent/50 pl-6">
        <blockquote className="font-display text-lg leading-snug text-brand-ink">
          &ldquo;Do yourself a favor, take a walk through their engine overall
          room, go and check the work that they do. It&apos;s proper, it&apos;s
          sufficient.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-sm text-brand-inkMuted">
          <span className="font-semibold text-brand-ink">Hendrik Mostert</span>
          {" · "}Engine rebuild customer
        </figcaption>
      </figure>
    </SectionContainer>
  );
}

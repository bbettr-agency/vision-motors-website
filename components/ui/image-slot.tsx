import Image from "next/image";
import { Camera } from "lucide-react";

import type { ImageSlot as ImageSlotType } from "@/types/site";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  Renders a real photograph when one exists, and a clearly-labelled,
//  intentional-looking placeholder when it doesn't.
//
//  Per SYSTEM/08: a documented placeholder beats a misleading stock photo.
//  Only ONE authentic Vision Motors photograph currently exists — every other
//  image on the client's live site is stock or decorative.
//
//  `showBrief` surfaces the photographer's brief in the demo so the client can
//  see exactly what is needed. Set false for a client-facing presentation.
// ─────────────────────────────────────────────────────────────────────────────

type Props = {
  slot: ImageSlotType;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  showBrief?: boolean;
  /**
   * Fill the parent element instead of setting an aspect ratio.
   * Use when the grid controls the cell height — combining `h-full` with an
   * aspect ratio makes the ratio drive WIDTH, which overflows the container.
   */
  fill?: boolean;
};

export default function ImageSlotView({
  slot,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showBrief = true,
  fill = false,
}: Props) {
  const sizing = fill
    ? { className: "h-full w-full", style: undefined }
    : { className: "w-full", style: { aspectRatio: slot.aspect } };

  if (slot.src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-brand-graphite",
          sizing.className,
          className
        )}
        style={sizing.style}
      >
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden border border-dashed border-white/15 bg-brand-graphite p-6 text-center",
        sizing.className,
        className
      )}
      style={sizing.style}
      // Decorative placeholder — announce nothing meaningful to screen readers.
      role="img"
      aria-label={`Photograph pending: ${slot.alt}`}
    >
      <div className="absolute inset-0 bg-radial-glow opacity-40" aria-hidden />

      <Camera className="relative h-7 w-7 text-brand-accent/70" aria-hidden />

      <p className="relative mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-accent/80">
        Client photo required
      </p>

      {showBrief && (
        <p className="relative mt-2 max-w-xs text-xs leading-relaxed text-white/45">
          {slot.shotBrief}
        </p>
      )}
    </div>
  );
}

import Image from "next/image";
import { Crop } from "lucide-react";

import type { ImageSlot as ImageSlotType } from "@/types/site";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  Renders a real photograph when one exists, and — when it doesn't — a
//  deliberate TECHNICAL HOLDING PLATE, not a fake photo.
//
//  Per SYSTEM/08 and the redesign brief (Correction 5): a documented holding
//  plate beats misleading stock. The plate reads unmistakably as an editorial
//  reservation — mono shot code, required subject, required crop, and a
//  `CLIENT PHOTOGRAPHY REQUIRED` status — framed with crop marks and a faint
//  service-manual grid. It must NEVER simulate a diagnostic screen, an engine,
//  tools or a workshop scene that could be mistaken for real Vision Motors work.
//
//  Only ONE authentic Vision Motors photograph currently exists; every other
//  slot is `src: null` and renders this plate until a real shot lands (a
//  one-line `src` change in config/images-config.ts).
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
  /** Surface the slot sits on. Drives plate styling. */
  tone?: "dark" | "light";
};

/** Small L-shaped crop mark, one per corner — the editorial "holding" signal. */
function CropMark({ pos, tone }: { pos: string; tone: "dark" | "light" }) {
  const color = tone === "dark" ? "border-brand-steel/60" : "border-brand-inkMuted/50";
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute h-4 w-4", color, pos)}
    />
  );
}

export default function ImageSlotView({
  slot,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showBrief = true,
  fill = false,
  tone = "dark",
}: Props) {
  const isDark = tone === "dark";

  const sizing = fill
    ? { className: "h-full w-full", style: undefined }
    : { className: "w-full", style: { aspectRatio: slot.aspect } };

  if (slot.src) {
    return (
      <div
        className={cn(
          "group relative overflow-hidden",
          isDark ? "bg-brand-charcoalLight" : "bg-brand-bluegrey",
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
          // Slow, restrained editorial zoom on hover — one sitewide easing,
          // GPU transform only, and disabled entirely for reduced-motion.
          className={cn(
            "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-safe:group-hover:scale-[1.045] motion-reduce:transition-none",
            imageClassName
          )}
        />
      </div>
    );
  }

  const shotCode = slot.id.replace(/([a-z])([A-Z])/g, "$1-$2").toUpperCase();

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden border p-5 sm:p-6",
        isDark
          ? "border-white/12 bg-brand-ink text-brand-bone"
          : "border-brand-line bg-brand-bluegrey text-brand-inkMuted",
        sizing.className,
        className
      )}
      style={sizing.style}
      // Decorative holding plate — announce it plainly, nothing meaningful.
      role="img"
      aria-label={`Photograph pending: ${slot.alt}`}
    >
      {/* Faint service-manual grid. */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-[length:28px_28px] opacity-70",
          isDark ? "bg-grid-dark" : "bg-grid-light"
        )}
      />
      {/* Crop marks. */}
      <CropMark pos="left-2 top-2 border-l border-t" tone={tone} />
      <CropMark pos="right-2 top-2 border-r border-t" tone={tone} />
      <CropMark pos="bottom-2 left-2 border-b border-l" tone={tone} />
      <CropMark pos="bottom-2 right-2 border-b border-r" tone={tone} />

      {/* Top row — shot code + crop icon. */}
      <div className="relative flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em]">
        <span>PLATE · {shotCode}</span>
        <Crop className="h-3.5 w-3.5" aria-hidden />
      </div>

      {/* Status + required subject + crop brief. */}
      <div className="relative">
        <span
          className={cn(
            "inline-block border px-2 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.2em]",
            isDark
              ? "border-brand-cta/50 text-brand-cta"
              : "border-brand-blue/40 text-brand-blue"
          )}
        >
          Client photography required
        </span>

        <p
          className={cn(
            "mt-3 font-display text-base font-semibold leading-tight sm:text-lg",
            isDark ? "text-white" : "text-brand-ink"
          )}
        >
          {slot.alt}
        </p>

        {showBrief && (
          <p className="mt-2 max-w-md text-xs leading-relaxed">
            <span className="font-mono uppercase tracking-[0.15em]">Crop:</span>{" "}
            {slot.shotBrief}
          </p>
        )}
      </div>
    </div>
  );
}

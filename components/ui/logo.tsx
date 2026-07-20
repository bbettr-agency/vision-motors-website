import { cn } from "@/utils/cn";

// ⚠️ TEMPORARY TYPE LOCKUP.
// The client's only available logo asset is a low-resolution white-on-dark PNG
// hosted on their current page-builder's CDN. Rather than embed a third-party
// CDN image (which next.config.js deliberately disallows) or ship a poor-quality
// raster, this renders a clean type lockup in the real brand colours — brass on
// dark, matching the embroidered uniform mark in the workshop photograph.
//
// TODO(client): supply vector logo files (SVG/AI/EPS). Swap this component's
// internals for next/image; nothing else in the codebase needs to change.

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export default function Logo({ className, tone = "dark" }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="Vision Motors"
    >
      <span className="font-display text-lg font-extrabold uppercase tracking-[0.18em] text-brand-accent">
        Vision
      </span>
      <span
        className={cn(
          "font-display text-[0.65rem] font-semibold uppercase tracking-[0.42em]",
          isDark ? "text-white/80" : "text-brand-ink/70"
        )}
      >
        Motors
      </span>
    </span>
  );
}

import Image from "next/image";

import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  OFFICIAL VISION MOTORS WORDMARK (supplied 2026-08-04 as a raster PNG).
//
//  The brand mark is indigo (#290F74) on white — which cannot sit on the navy
//  header/footer as-is (a white box, and indigo-on-navy fails contrast). With
//  the client's approval to make it fit, it is reversed to WHITE for dark
//  surfaces, and kept in brand indigo for light surfaces. Both are transparent
//  PNGs with anti-aliased edges (luminance-derived alpha) trimmed tight to the
//  glyphs — no halo, no white box.
//
//  TODO(client): supply a VECTOR (SVG/AI/EPS) for pixel-perfect scaling at large
//  sizes (FACT-VERIFICATION-REGISTER.md C5). The raster is ample at header/footer
//  size (source 503×193, only ever downscaled). Swapping the files below is the
//  only change needed when the vector arrives.
// ─────────────────────────────────────────────────────────────────────────────

const LOGO = {
  dark: "/images/vision-motors-logo-white.png", // reversed, for navy surfaces
  light: "/images/vision-motors-logo-indigo.png", // brand indigo, for light surfaces
} as const;

// Intrinsic dimensions of the trimmed wordmark (for aspect ratio).
const W = 503;
const H = 193;

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  /** Eager-load + preload — set on the header (above the fold). */
  priority?: boolean;
};

export default function Logo({
  className,
  tone = "dark",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={tone === "dark" ? LOGO.dark : LOGO.light}
      alt="Vision Motors"
      width={W}
      height={H}
      priority={priority}
      sizes="150px"
      className={cn("h-11 w-auto sm:h-12", className)}
    />
  );
}

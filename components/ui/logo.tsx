import { cn } from "@/utils/cn";

// ⚠️ TEMPORARY TYPE LOCKUP — NOT the official logo.
// The real Vision Motors mark is indigo (#290F74). It is not supplied as a
// usable vector (FACT-VERIFICATION-REGISTER.md C5), and indigo would not read
// on the navy header/footer anyway. So this renders a clean type lockup sized
// and spaced to sit natively on navy: white "Vision" + soft-blue "Motors".
// The official logo is NOT recoloured here — it simply isn't used yet.
//
// TODO(client): supply vector logo files (SVG/AI/EPS). If the indigo mark reads
// acceptably on navy, use it via next/image with the correct light/dark variant;
// otherwise a navy-safe variant is needed. Swapping this component's internals
// is a local change — nothing else in the codebase depends on it.

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
      <span
        className={cn(
          "font-display text-2xl font-extrabold uppercase leading-[0.9] tracking-[0.14em] sm:text-3xl",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        Vision
      </span>
      <span
        className={cn(
          "font-display text-[0.72rem] font-semibold uppercase tracking-[0.46em] sm:text-[0.8rem]",
          isDark ? "text-brand-blueSoft" : "text-brand-blue"
        )}
      >
        Motors
      </span>
    </span>
  );
}

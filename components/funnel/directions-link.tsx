"use client";

import { Navigation } from "lucide-react";

import { trackDirections } from "@/lib/tracking";
import { cn } from "@/utils/cn";

/** Tracked directions link — `get_directions` is a real conversion signal. */
export default function DirectionsLink({
  href,
  className,
  label = "Get directions",
}: {
  href: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDirections("main")}
      className={cn(
        "inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-indigo underline underline-offset-4 transition-colors hover:text-brand-indigoMid focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo",
        className
      )}
    >
      <Navigation className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </a>
  );
}

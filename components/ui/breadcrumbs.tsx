import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { routeLabels } from "@/config/routes";
import { cn } from "@/utils/cn";

/**
 * Visible breadcrumb trail. The matching `BreadcrumbList` JSON-LD is emitted by
 * `lib/schema.ts` from the SAME `trail` array, so the visible crumbs and the
 * structured data can never drift apart.
 */
export type Crumb = { label: string; href: string };

/** Build a trail from a path. Falls back to routeLabels for the leaf. */
export function buildTrail(path: string, leafLabel?: string): Crumb[] {
  const trail: Crumb[] = [{ label: "Home", href: "/" }];
  if (path === "/") return trail;

  // Service pages nest under /services for a meaningful trail, even though
  // their URLs are flat (see docs/SITE-ARCHITECTURE.md § URL convention).
  if (path.endsWith("-pretoria")) {
    trail.push({ label: "Services", href: "/services" });
  }

  trail.push({ label: leafLabel ?? routeLabels[path] ?? path, href: path });
  return trail;
}

export default function Breadcrumbs({
  trail,
  tone = "light",
  className,
}: {
  trail: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className={cn(
                    "h-3 w-3 shrink-0",
                    isDark ? "text-white/35" : "text-brand-inkMuted/60"
                  )}
                  aria-hidden
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    isDark ? "text-white/70" : "text-brand-inkMuted"
                  )}
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={cn(
                    "rounded transition-colors focus:outline-none focus-visible:ring-2",
                    isDark
                      ? "text-white/55 hover:text-brand-accent focus-visible:ring-brand-accent"
                      : "text-brand-indigo hover:text-brand-indigoMid focus-visible:ring-brand-indigo"
                  )}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

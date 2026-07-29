import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "section" | "div" | "footer";
};

// v5.2: each section is a large rounded PANEL floating on the warm page. The
// side gutter (mx) + the parent <main>'s vertical rhythm (space-y) let the warm
// background show around every panel, so each reads as its own premium panel.
// `overflow-clip` clips inner decoration to the rounded corners (and, unlike
// overflow-hidden, does not break descendant position:sticky). The bg is passed
// in via `className` (e.g. bg-brand-cream / bg-brand-navy).
const panelBase =
  "relative mx-2.5 overflow-clip rounded-panel px-6 py-24 shadow-panel sm:mx-4 md:py-32 lg:mx-6 lg:rounded-panel-lg lg:px-8";

export default function SectionContainer({
  children,
  className,
  innerClassName,
  id,
  as = "section",
}: SectionContainerProps) {
  const Tag = as;

  return (
    <Tag id={id} className={cn(panelBase, className)}>
      <div className={cn("relative mx-auto max-w-7xl", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

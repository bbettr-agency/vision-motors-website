import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "section" | "div" | "footer";
};

// Spacing values from SYSTEM/01-DESIGN-TOKENS.md §3.
export default function SectionContainer({
  children,
  className,
  innerClassName,
  id,
  as = "section",
}: SectionContainerProps) {
  const Tag = as;

  return (
    <Tag id={id} className={cn("relative px-6 py-20 md:py-28 lg:px-8", className)}>
      <div className={cn("relative mx-auto max-w-7xl", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

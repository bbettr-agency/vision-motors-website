import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import OurWorkPage from "@/views/our-work-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Vision Motors Workshop Gallery | Pretoria",
  description:
    "Real photographs from inside Vision Motors and The Engine Shop / Vision Motors in Wonderboom South, Pretoria — the workshop, engine reconditioning, diagnostics and the team at work.",
  path: "/our-work",
});

export default function Page() {
  return <OurWorkPage />;
}

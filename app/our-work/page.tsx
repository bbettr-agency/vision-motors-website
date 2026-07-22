import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import OurWorkPage from "@/views/our-work-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Our Work | Vision Motors Workshop, Pretoria",
  description:
    "Inside the Vision Motors workshop and engine shop in Wonderboom South, Pretoria — engine reconditioning, gearboxes, diagnostics and mechanical repairs.",
  path: "/our-work",
});

export default function Page() {
  return <OurWorkPage />;
}

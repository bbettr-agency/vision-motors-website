import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import AboutPage from "@/views/about-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "About Vision Motors | Independent Workshop, Pretoria",
  description:
    "Vision Motors is an independent, family-run vehicle workshop in Wonderboom South, Pretoria, with its own engine shop for the work most workshops send away.",
  path: "/about-us",
});

export default function Page() {
  return <AboutPage />;
}

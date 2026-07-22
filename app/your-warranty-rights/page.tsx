import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import WarrantyRightsPage from "@/views/warranty-rights-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Your Warranty Rights | Service Where You Choose",
  description:
    "Competition Commission guidelines set out your right to service your vehicle at an independent workshop while it is still under manufacturer warranty.",
  path: "/your-warranty-rights",
});

export default function Page() {
  return <WarrantyRightsPage />;
}

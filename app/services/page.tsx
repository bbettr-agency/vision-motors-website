import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import ServicesPage from "@/views/services-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Car Repair & Servicing Pretoria | Vision Motors",
  description:
    "Diagnostics, engine reconditioning, gearbox, DSG and mechatronic repairs, driveline work, brakes and servicing from an independent Pretoria workshop.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}

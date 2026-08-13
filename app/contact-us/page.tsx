import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import ContactPage from "@/views/contact-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Contact Vision Motors | Wonderboom South, Pretoria",
  description:
    "Contact Vision Motors in Wonderboom South, Pretoria — two workshops. Call 012 335 0070, WhatsApp, get directions, or book online. Mon–Fri 07:30–17:00.",
  path: "/contact-us",
});

export default function Page() {
  return <ContactPage />;
}

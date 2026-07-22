import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import ContactPage from "@/views/contact-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Contact Vision Motors | Wonderboom South, Pretoria",
  description:
    "Phone Vision Motors on 012 335 0070. Independent workshop at 1059 Steve Biko Road, Wonderboom South, Pretoria. Open Monday to Friday, 07:30 to 17:00.",
  path: "/contact-us",
});

export default function Page() {
  return <ContactPage />;
}

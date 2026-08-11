import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import ContactPage from "@/views/contact-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Contact Vision Motors | Wonderboom South, Pretoria",
  description:
    "Contact Vision Motors in Wonderboom South, Pretoria. Two workshops: Vision Motors, 867 M5 (082 823 5178) and The Engine Shop / Vision Motors, 999 Steve Biko Rd (071 048 8213). Company line 012 335 0070. Open Monday to Friday, 07:30 to 17:00.",
  path: "/contact-us",
});

export default function Page() {
  return <ContactPage />;
}

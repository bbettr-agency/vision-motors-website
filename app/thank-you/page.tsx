import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import ThankYouPage from "@/views/thank-you-page";

export const metadata: Metadata = createMetadata({
  title: "Thank You",
  description:
    "Thanks for your enquiry. The Vision Motors workshop will be in touch to arrange a time.",
  path: "/thank-you",
  // Paired with the disallow in app/robots.ts.
  noindex: true,
});

export default function Page() {
  return <ThankYouPage />;
}

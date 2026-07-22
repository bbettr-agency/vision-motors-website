import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import BookingPage from "@/views/booking-page";

export const metadata: Metadata = createMetadata({
  titleAbsolute: "Book Your Car In | Vision Motors Pretoria",
  description:
    "Send Vision Motors your vehicle details and preferred date. The workshop will contact you to confirm a time. Or phone 012 335 0070 for anything urgent.",
  path: "/book-a-vehicle-in",
});

export default function Page() {
  return <BookingPage />;
}

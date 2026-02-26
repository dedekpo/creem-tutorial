// app/checkout/route.ts
import { Checkout } from "@creem_io/nextjs";

export const GET = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: true, // flip to false in production
  defaultSuccessUrl: "/thank-you",
});

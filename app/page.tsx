import { CreemCheckout } from "@creem_io/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-4">
        <CreemCheckout
          productId="prod_5d9DZ6PAUJ0nL5ISgos6m7"
          successUrl="/thank-you"
        >
          <button className="border border-black rounded-md shadow-md p-2">
            Pay Now
          </button>
        </CreemCheckout>
        <CreemCheckout
          productId="prod_FkdBP121qSDhtQPtPML65"
          successUrl="/thank-you"
        >
          <button className="border border-black rounded-md shadow-md p-2">
            Subscribe
          </button>
        </CreemCheckout>
      </div>

      <Link href="/login">Login</Link>
    </div>
  );
}

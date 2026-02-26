"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function SubscribeButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);
    await authClient.creem.createCheckout({
      productId: "prod_5FqHCltQNQu0deJNWLVVTa",
    });
  };

  async function fetchHasAccessGranted() {
    const { data } = await authClient.creem.hasAccessGranted();
    return data;
  }

  useEffect(() => {
    fetchHasAccessGranted();
  }, []);

  return (
    <button
      disabled={isLoading}
      onClick={handleSubscribe}
      className="border border-black rounded-md shadow-md p-2"
    >
      {isLoading ? "Loading..." : "Subscribe"}
    </button>
  );
}

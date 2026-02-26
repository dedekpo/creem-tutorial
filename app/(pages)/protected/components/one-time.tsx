"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function OneTimeButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleOneTime = async () => {
    setIsLoading(true);
    await authClient.creem.createCheckout({
      productId: "prod_19szD79uYrM4bie74c8fxv",
    });
    setIsLoading(false);
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleOneTime}
      className="border border-black rounded-md shadow-md p-2"
    >
      {isLoading ? "Loading..." : "Pay Now"}
    </button>
  );
}

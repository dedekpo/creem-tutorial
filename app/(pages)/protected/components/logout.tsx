"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);
    const { data } = await authClient.signOut();
    if (data?.success) {
      window.location.href = "/login";
    }
    setIsLoading(false);
  };

  return (
    <button disabled={isLoading} onClick={logout}>
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}

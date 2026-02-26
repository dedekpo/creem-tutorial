"use client";

import { authClient } from "@/lib/auth-client";

export default async function CreatePortalButton() {
  const handlePortal = async () => {
    // No need to redirect, the portal will be opened in the same tab
    await authClient.creem.createPortal();
  };

  return (
    <button
      onClick={handlePortal}
      className="border border-black rounded-md shadow-md p-2"
    >
      Create Portal
    </button>
  );
}

"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/protected",
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <br />
      <button
        className="border border-black rounded-md shadow-md p-2"
        onClick={signIn}
      >
        Login with Google
      </button>
    </div>
  );
}

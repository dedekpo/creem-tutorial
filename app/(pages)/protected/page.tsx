import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import CreatePortalButton from "./components/create-portal";
import LogoutButton from "./components/logout";
import SubscribeButton from "./components/subscribe";
import OneTimeButton from "./components/one-time";

export default async function ProtectedPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return redirect("/login");
  }

  const hasAccess = await auth.api.hasAccessGranted({
    headers: await headers(),
  });

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Protected Page</h1>

      <OneTimeButton />

      <SubscribeButton />

      {hasAccess?.hasAccessGranted ? (
        <CreatePortalButton />
      ) : (
        <div>No subscription yet</div>
      )}

      <LogoutButton />
    </div>
  );
}

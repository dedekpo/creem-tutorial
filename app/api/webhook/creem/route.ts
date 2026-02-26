// app/api/webhook/creem/route.ts
import { Webhook } from "@creem_io/nextjs";

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onGrantAccess: async ({ customer, metadata }) => {
    console.log("onGrantAccess", customer, metadata);
    // The user should be granted access
    // const userId = metadata?.referenceId as string;
    // await grantAccess(userId, customer.email);
  },
  onRevokeAccess: async ({ customer, metadata }) => {
    // The user should have their access revoked
    // const userId = metadata?.referenceId as string;
    // await revokeAccess(userId, customer.email);
  },
});

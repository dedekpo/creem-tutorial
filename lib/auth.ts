// lib/auth.ts
import { betterAuth } from "better-auth";
import { creem } from "@creem_io/better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    creem({
      apiKey: process.env.CREEM_API_KEY!,
      webhookSecret: process.env.CREEM_WEBHOOK_SECRET, // Optional
      testMode: true, // Use test mode for development
      defaultSuccessUrl: "/thank-you", // Redirect URL after payments
      persistSubscriptions: true, // Enable database persistence (recommended)

      onCheckoutCompleted: async ({ customer, metadata }) => {
        console.log("onCheckoutCompleted", customer, metadata);
      },

      onGrantAccess: async ({ customer, metadata }) => {
        console.log("onGrantAccess", customer, metadata);
      },

      onRevokeAccess: async ({ customer, metadata }) => {
        console.log("onRevokeAccess", customer, metadata);
      },
    }),
  ],
});

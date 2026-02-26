# Creem x Better Auth Tutorial

A tutorial project demonstrating how to integrate [Creem](https://creem.io) with [Better Auth](https://better-auth.com) in a Next.js application.

## Prerequisites

- [Creem Account](https://creem.io)
- [Neon Database](https://neon.com/)
- [Google OAuth Credentials](https://console.cloud.google.com/)

## Getting Started

1. **Clone and Install**

   ```bash
   npm install
   ```

2. **Configure Environment**
   Copy `.example.env` to `.env.local` and fill in your credentials:

   ```bash
   cp .example.env .env.local
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Features

- **Authentication**: Powered by Better Auth with Google social login.
- **Payments & Subscriptions**: Integrated via the `@creem_io/better-auth` plugin.
- **Access Control**: Automatic handling of access grants and revocations based on Creem subscription status.

## Key Files

- `lib/auth.ts`: Better Auth configuration with Creem plugin.
- `app/(pages)/protected`: Example of a protected route requiring authentication and active subscription.

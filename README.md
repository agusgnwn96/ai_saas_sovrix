# Sovrix AI

An AI SaaS platform built with Next.js 14, offering conversation, image, video, music, and code generation powered by Anthropic Claude and Replicate.

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + shadcn/ui
- **Auth** — Clerk
- **Database** — Prisma + PostgreSQL
- **AI (Chat & Code)** — Anthropic Claude (`claude-sonnet-4-6`)
- **AI (Image / Music / Video)** — Replicate
- **Payments** — Stripe

## Features

- Conversation with Claude AI
- Image generation (Stable Diffusion XL)
- Music generation (Riffusion)
- Video generation (Zeroscope)
- Code generation with syntax highlighting
- Free tier (5 generations) + Pro subscription ($20/month)
- Stripe billing portal for subscription management

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### 1. Clone and install

```bash
git clone https://github.com/agusgnwn96/ai_saas_sovrix.git
cd ai_saas_sovrix
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Fill in the following in `.env`:

| Variable | Source |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | [dashboard.clerk.com](https://dashboard.clerk.com) |
| `CLERK_SECRET_KEY` | [dashboard.clerk.com](https://dashboard.clerk.com) |
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |
| `REPLICATE_API_TOKEN` | [replicate.com/account](https://replicate.com/account/api-tokens) |
| `DATABASE_URL` | Your PostgreSQL connection string |
| `STRIPE_API_KEY` | [dashboard.stripe.com](https://dashboard.stripe.com) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook settings |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` in development |

### 3. Set up the database

```bash
npx prisma db push
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/
│   ├── (auth)/              # Sign-in / Sign-up pages
│   ├── (dashboard)/         # Protected dashboard routes
│   │   ├── conversation/    # Claude chat
│   │   ├── code/            # Code generation
│   │   ├── image/           # Image generation
│   │   ├── music/           # Music generation
│   │   ├── video/           # Video generation
│   │   └── settings/        # Billing & subscription
│   ├── api/                 # API route handlers
│   │   ├── conversation/
│   │   ├── code/
│   │   ├── image/
│   │   ├── music/
│   │   ├── video/
│   │   ├── stripe/
│   │   └── webhook/
│   ├── layout.tsx
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # shadcn/ui base components
│   ├── modals/              # Pro upgrade modal
│   └── ...                  # Shared layout components
├── hooks/                   # Zustand stores & custom hooks
├── lib/                     # Utilities, Prisma client, Stripe, constants
└── prisma/
    └── schema.prisma        # UserApiLimit + UserSubscription models
```

## Stripe Webhook (Local Development)

To test Stripe webhooks locally, use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret printed by the CLI into `STRIPE_WEBHOOK_SECRET` in your `.env`.

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push the repo to GitHub
2. Import the project in Vercel
3. Add all environment variables from `.env`
4. Set `NEXT_PUBLIC_APP_URL` to your production URL
5. Update your Stripe webhook endpoint to the production URL

## License

MIT

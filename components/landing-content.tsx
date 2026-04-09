"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import {
  MessageSquare, ImageIcon, VideoIcon, Music, Code, Zap,
  Check, ArrowRight, Shield, Clock, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MessageSquare,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "AI Conversation",
    description: "Chat with Claude Sonnet — the world's most capable conversational AI for research, writing, and analysis.",
  },
  {
    icon: ImageIcon,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    title: "Image Generation",
    description: "Turn text prompts into stunning, photorealistic images with Stable Diffusion XL.",
  },
  {
    icon: Code,
    color: "text-green-400",
    bg: "bg-green-500/10",
    title: "Code Generation",
    description: "Write, debug, and explain code in any language using natural language prompts.",
  },
  {
    icon: Music,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Music Generation",
    description: "Create original music clips from text descriptions — any genre, any mood.",
  },
  {
    icon: VideoIcon,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    title: "Video Generation",
    description: "Generate short AI video clips from your prompts with cinematic quality.",
  },
  {
    icon: Shield,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    title: "Enterprise-Ready",
    description: "Built with security-first architecture, Clerk auth, and Stripe billing out of the box.",
  },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Software Engineer",
    initials: "AR",
    gradient: "from-violet-500 to-indigo-500",
    quote: "Sovrix AI has completely changed how I write code. The code generation is genuinely incredible.",
  },
  {
    name: "Samantha Lee",
    role: "Content Creator",
    initials: "SL",
    gradient: "from-pink-500 to-rose-500",
    quote: "I use it every day for generating marketing copy and images. It saves me hours every single week.",
  },
  {
    name: "Jordan Kim",
    role: "Product Manager",
    initials: "JK",
    gradient: "from-emerald-500 to-teal-500",
    quote: "The conversation feature is so natural. It feels like talking to a brilliant senior colleague.",
  },
  {
    name: "Maria Santos",
    role: "Graphic Designer",
    initials: "MS",
    gradient: "from-orange-500 to-amber-500",
    quote: "The image generation quality is stunning. My clients love the creative concepts we produce together.",
  },
];

const proFeatures = [
  "Unlimited AI generations",
  "Priority response speed",
  "All 5 AI tools unlocked",
  "HD image generation",
  "Advanced code assistance",
  "Cancel anytime",
];

export function LandingContent() {
  const { isSignedIn } = useAuth();

  return (
    <div className="relative">
      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium mb-4">
              <Star className="w-3 h-3" /> Everything you need
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Five AI tools,{" "}
              <span className="gradient-text">one platform</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Stop juggling multiple subscriptions. Sovrix AI gives you everything in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group glass rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", f.bg)}>
                  <f.icon className={cn("w-5 h-5", f.color)} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Loved by <span className="gradient-text">creators</span>
            </h2>
            <p className="text-zinc-400 text-lg">Join thousands of creators already using Sovrix AI.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-bold text-white flex-shrink-0", t.gradient)}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">{t.name}</p>
                    <p className="text-zinc-500 text-xs mt-1">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Simple <span className="gradient-text">pricing</span>
            </h2>
            <p className="text-zinc-400 text-lg">Start free, upgrade when you need more.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <p className="text-zinc-400 text-sm font-medium mb-2">Free</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white">$0</span>
                  <span className="text-zinc-500">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["5 free generations", "Access to all tools", "Standard speed", "Community support"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="block">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Get started free
                </Button>
              </Link>
            </div>

            {/* Pro */}
            <div className="relative rounded-2xl p-px bg-gradient-to-b from-violet-500/50 to-indigo-500/50">
              <div className="bg-[#0f0f1a] rounded-2xl p-8 h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <p className="text-violet-400 text-sm font-medium mb-2">Pro</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white">$20</span>
                    <span className="text-zinc-500">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {proFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={isSignedIn ? "/settings" : "/sign-up"} className="block">
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25">
                    <Zap className="w-4 h-4 mr-2 fill-white" />
                    Upgrade to Pro
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 pointer-events-none" />
            <h2 className="relative text-4xl md:text-5xl font-extrabold text-white mb-4">
              Start creating with AI{" "}
              <span className="gradient-text">today</span>
            </h2>
            <p className="relative text-zinc-400 text-lg mb-8">
              No credit card required. 5 free generations on sign up.
            </p>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-xl shadow-violet-500/30 px-10 h-12 text-base font-semibold"
              >
                Get started for free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-zinc-500 text-sm">© 2026 Sovrix AI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-zinc-600 text-sm">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

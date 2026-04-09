"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10K+", label: "Active users" },
  { value: "1M+", label: "Generations" },
  { value: "5",   label: "AI tools" },
  { value: "99%", label: "Uptime" },
];

export function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Powered by Claude Sonnet 4.6</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          One platform for
          <br />
          <span className="gradient-text">all your AI needs</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          Generate conversations, images, music, videos, and code with the world&apos;s
          most advanced AI models — all in one place.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-16">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all px-8 h-12 text-base font-semibold"
            >
              Start for free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="#features">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-8 text-base"
            >
              See features
            </Button>
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl px-4 py-3 flex flex-col items-center"
            >
              <span className="text-2xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs text-zinc-500 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/constants";
import { FreeCounter } from "@/components/free-counter";

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

export function Sidebar({ apiLimitCount = 0, isPro = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#0a0a0f] border-r border-white/5">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-white/5">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow flex-shrink-0">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none tracking-tight">
              Sovrix <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">AI</span>
            </h1>
            {isPro && (
              <span className="text-[10px] font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent leading-none">
                PRO
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                isActive ? "bg-white/10" : "bg-transparent group-hover:bg-white/5"
              )}>
                <route.icon className={cn("w-4 h-4", isActive ? route.color : "text-zinc-500 group-hover:text-zinc-300")} />
              </div>
              <span className="leading-none">{route.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="p-3 border-t border-white/5">
        <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
    </div>
  );
}

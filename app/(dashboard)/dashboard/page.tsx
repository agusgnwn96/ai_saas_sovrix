import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { tools } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <div className="px-4 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          What will you{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            create today?
          </span>
        </h2>
        <p className="text-zinc-400 text-sm">
          Choose a tool below to start generating.
        </p>
      </div>

      {/* Tool grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {tools.map((tool, i) => (
          <Link key={tool.href} href={tool.href}>
            <div className={cn(
              "group relative rounded-2xl border border-white/8 bg-white/3 p-6",
              "hover:border-white/20 hover:bg-white/5 hover:-translate-y-0.5",
              "transition-all duration-200 cursor-pointer overflow-hidden",
              i === 0 && "md:col-span-2 xl:col-span-1"
            )}>
              {/* Subtle gradient glow on hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none",
                tool.bgColor
              )} style={{ filter: "blur(40px)", transform: "scale(0.8)" }} />

              <div className="relative flex items-start justify-between mb-4">
                <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", tool.bgColor)}>
                  <tool.icon className={cn("w-5 h-5", tool.color)} />
                </div>
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-1.5">{tool.label}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

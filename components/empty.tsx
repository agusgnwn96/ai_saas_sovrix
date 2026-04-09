import { Sparkles } from "lucide-react";

interface EmptyProps {
  label: string;
}

export function Empty({ label }: EmptyProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-zinc-600" />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 blur-xl -z-10" />
      </div>
      <p className="text-zinc-500 text-sm text-center max-w-xs">{label}</p>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { MAX_FREE_COUNTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

export function FreeCounter({ apiLimitCount = 0, isPro = false }: FreeCounterProps) {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted || isPro) return null;

  const pct = (apiLimitCount / MAX_FREE_COUNTS) * 100;

  return (
    <div className="rounded-xl border border-white/8 bg-white/3 p-4">
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
        <span>Free generations</span>
        <span className="font-medium text-white">{apiLimitCount} / {MAX_FREE_COUNTS}</span>
      </div>
      <Progress
        value={pct}
        className="h-1.5 bg-white/10 mb-3"
      />
      <Button
        onClick={proModal.onOpen}
        className="w-full h-8 text-xs bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-md shadow-violet-500/20"
      >
        <Zap className="w-3 h-3 mr-1.5 fill-white" />
        Upgrade to Pro
      </Button>
    </div>
  );
}

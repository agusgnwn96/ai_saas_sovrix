"use client";

import { useState } from "react";
import axios from "axios";
import { Check, Zap, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useProModal } from "@/hooks/use-pro-modal";
import { tools } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const proPerks = [
  "Unlimited AI generations",
  "All 5 tools unlocked",
  "Priority response speed",
  "HD image generation",
];

export function ProModal() {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch {
      toast({ description: "Something went wrong.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="bg-[#0f0f1a] border-white/10 text-white max-w-md p-0 overflow-hidden">
        {/* Header gradient */}
        <div className="relative px-6 pt-8 pb-6 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border-b border-white/5">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <DialogHeader>
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl font-bold text-white">
              Upgrade to Sovrix Pro
            </DialogTitle>
            <p className="text-center text-zinc-400 text-sm mt-1">
              Unlock unlimited generations for $20/month
            </p>
          </DialogHeader>
        </div>

        {/* Tools */}
        <div className="px-6 py-4 space-y-2">
          {tools.map((tool) => (
            <div key={tool.label} className="flex items-center gap-3 py-1">
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", tool.bgColor)}>
                <tool.icon className={cn("w-4 h-4", tool.color)} />
              </div>
              <span className="text-sm text-zinc-300 flex-1">{tool.label}</span>
              <Zap className="w-4 h-4 text-violet-400 fill-violet-400" />
            </div>
          ))}
        </div>

        {/* Perks */}
        <div className="px-6 pb-4 space-y-2">
          <div className="h-px bg-white/5 mb-3" />
          {proPerks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-sm text-zinc-400">
              <Check className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              {perk}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <Button
            disabled={loading}
            onClick={onSubscribe}
            className="w-full h-11 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25 font-semibold"
          >
            <Zap className="w-4 h-4 mr-2 fill-white" />
            Upgrade now · $20/month
          </Button>
          <p className="text-center text-zinc-600 text-xs mt-3">Cancel anytime. No questions asked.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

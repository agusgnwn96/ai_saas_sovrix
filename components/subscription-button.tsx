"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
  isPro?: boolean;
}

export function SubscriptionButton({ isPro = false }: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
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
    <Button
      disabled={loading}
      onClick={onClick}
      className={
        isPro
          ? "border border-white/20 bg-white/5 hover:bg-white/10 text-white"
          : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25"
      }
    >
      {isPro ? (
        "Manage subscription"
      ) : (
        <>
          <Zap className="w-4 h-4 mr-2 fill-white" />
          Upgrade to Pro · $20/month
        </>
      )}
    </Button>
  );
}

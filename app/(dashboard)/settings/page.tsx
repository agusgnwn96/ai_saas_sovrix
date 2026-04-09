import { Settings, Zap, Check } from "lucide-react";
import { checkSubscription } from "@/lib/subscription";
import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";

const freeFeatures = ["5 generations total", "All 5 tools", "Standard speed"];
const proFeatures = ["Unlimited generations", "All 5 tools", "Priority speed", "HD images", "Cancel anytime"];

export default async function SettingsPage() {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage your account and subscription."
        icon={Settings}
        iconColor="text-zinc-400"
        bgColor="bg-white/5"
      />

      <div className="px-4 lg:px-8 pb-8">
        <div className="max-w-2xl">
          {/* Current plan card */}
          <div className="rounded-2xl border border-white/8 bg-white/3 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-zinc-400 text-sm mb-1">Current plan</p>
                <div className="flex items-center gap-2">
                  <h3 className="text-white text-2xl font-bold">
                    {isPro ? "Pro" : "Free"}
                  </h3>
                  {isPro && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold">
                      Active
                    </span>
                  )}
                </div>
              </div>
              {isPro && (
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <Zap className="w-6 h-6 text-white fill-white" />
                </div>
              )}
            </div>

            <ul className="space-y-2 mb-6">
              {(isPro ? proFeatures : freeFeatures).map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <SubscriptionButton isPro={isPro} />
          </div>
        </div>
      </div>
    </div>
  );
}

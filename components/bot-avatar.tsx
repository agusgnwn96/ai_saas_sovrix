import { Avatar } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";

export function BotAvatar() {
  return (
    <Avatar className="h-8 w-8 flex-shrink-0">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
    </Avatar>
  );
}

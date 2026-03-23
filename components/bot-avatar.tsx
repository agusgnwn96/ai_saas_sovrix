import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function BotAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center">
        <span className="text-white font-bold text-xs">S</span>
      </div>
    </Avatar>
  );
}

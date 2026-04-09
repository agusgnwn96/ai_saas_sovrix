import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export function Heading({ title, description, icon: Icon, iconColor, bgColor }: HeadingProps) {
  return (
    <div className="px-4 lg:px-8 py-6 border-b border-white/5 mb-6">
      <div className="flex items-center gap-4">
        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0", bgColor)}>
          <Icon className={cn("w-6 h-6", iconColor)} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
          <p className="text-sm text-zinc-500 mt-0.5">{description}</p>
        </div>
      </div>
    </div>
  );
}

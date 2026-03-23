import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { tools } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI — Experience the power of AI with Sovrix
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer mb-3">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div>
                  <p className="font-semibold">{tool.label}</p>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

export default function LandingPage() {
  return (
    <div className="h-full">
      <div
        className="h-full bg-[#111827]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.3), transparent)`,
        }}
      >
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
      </div>
    </div>
  );
}

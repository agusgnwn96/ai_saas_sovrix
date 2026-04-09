import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}

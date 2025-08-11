import { CommunitySection } from "@/components/sections/community-section";
import { EducationSection } from "@/components/sections/education-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Navigation } from "@/components/sections/navigation";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <EducationSection />
        <CommunitySection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

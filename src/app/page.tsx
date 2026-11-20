import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import {
  BrandSection,
  ContactSection,
  ExpertiseSection,
  HomeFooter,
  StoriesSection,
  TeamSection,
  WorksSection,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <main className="bg-[#19032a]">
      <HeroSection />

      <div className="relative z-10 px-4 py-[140px]">
        <ServicesSection />
      </div>

      <div className="px-4 pb-[140px]">
        <StatsSection />
      </div>

      <BrandSection />
      <StoriesSection />
      <ExpertiseSection />
      <WorksSection />
      <TeamSection />
      <ContactSection />
      <HomeFooter />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import InstallationSection from "@/components/InstallationSection";
import CommandsSection from "@/components/CommandsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <InstallationSection />
      <CommandsSection />
      <FooterSection />
    </div>
  );
};

export default Index;

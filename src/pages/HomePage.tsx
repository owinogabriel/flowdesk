import CtaBanner from "../components/sections/CtaBanner";
import FeatureSection from "../components/sections/FeaturesSection";
import HeroSection from "../components/sections/HeroSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="page-fade ">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}

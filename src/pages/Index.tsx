import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ChecklistSection from "@/components/landing/ChecklistSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import ConversionDesign from "@/components/landing/ConversionDesign";
import CredibilitySection from "@/components/landing/CredibilitySection";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <ChecklistSection />
      <ServicesGrid />
      <ConversionDesign />
      <CredibilitySection />
      <ProcessTimeline />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

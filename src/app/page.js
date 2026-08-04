import CategoryCarousel from "@/components/home-tab/CategoryCarousel";
import HeroSection from "@/components/home-tab/heroSection";
import PartnerLinks from "@/components/home-tab/PartnerLinks";
import ProductShowcase from "@/components/home-tab/ProductShowcase";
import QualityPromiseSection from "@/components/home-tab/QualityPromiseSection";
import QualitySection from "@/components/home-tab/QualitySection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
       <ProductShowcase />
       <QualitySection />
       <CategoryCarousel />
      <QualityPromiseSection />
      <PartnerLinks />
      <Footer />
    </>
  );
}
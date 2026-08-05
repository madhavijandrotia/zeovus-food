import CapabilitiesSection from "@/components/innovation-tab/CapabilitiesSection";
import FormulationBriefSection from "@/components/innovation-tab/FormulationBriefSection";
import HeroInnovation from "@/components/innovation-tab/hero-innovation"
import ProductInnovationShowcase from "@/components/innovation-tab/ProductInnovationShowcase";
import Footer from "@/components/layout/Footer";

const FormulationPage = () => {
    return (
        <>
        <HeroInnovation />
        <CapabilitiesSection /> 
        <ProductInnovationShowcase />
        <Footer />
        </>
    )
}

export default FormulationPage;
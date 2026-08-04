import Footer from "@/components/layout/Footer";
import EnquirySection from "@/components/working-with-us-tab/EnquirySection";
import HeroWorking from "@/components/working-with-us-tab/hero-working";
import PartnershipOptionsSection from "@/components/working-with-us-tab/PartnershipOptionsSection";
import ProcessFlowSection from "@/components/working-with-us-tab/ProcessFlowSection";

const WorkingPage = () => {
    return (
        <>
        <HeroWorking />
        <PartnershipOptionsSection />
        <ProcessFlowSection />
        <EnquirySection />
        <Footer />
        </>
    )
}

export default WorkingPage;
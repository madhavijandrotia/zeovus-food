import Footer from "@/components/layout/Footer";
import CertificationWall from "@/components/manufacturing-tab/CertificationWall";
import ClosingCTA from "@/components/manufacturing-tab/ClosingCTA";
import HeroManufacturing from "@/components/manufacturing-tab/hero-manufacturing";
import ManufacturingSystemSection from "@/components/manufacturing-tab/ManufacturingSystemSection";
import QualityCertificationSection from "@/components/manufacturing-tab/QualityCertificationSection";

const ManufacturingPage = () => {
    return (
        <>
        <HeroManufacturing />
        <ManufacturingSystemSection />
        <QualityCertificationSection />
        <CertificationWall />
        <ClosingCTA />
        <Footer />
        </>
    )
}

export default ManufacturingPage;
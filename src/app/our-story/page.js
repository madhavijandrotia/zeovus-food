import Footer from "@/components/layout/Footer";
import CsrQuoteSection from "@/components/our-story-tab/CsrQuoteSection";
import GlobalStandardsSection from "@/components/our-story-tab/GlobalStandardsSection";
import GrowthTimeline from "@/components/our-story-tab/GrowthTimeline";
import HeroStory from "@/components/our-story-tab/hero-story"
import JourneySection from "@/components/our-story-tab/JourneySection";
import LeadershipNoteSection from "@/components/our-story-tab/LeadershipNoteSection";
import ProofBar from "@/components/our-story-tab/ProofBar";
import WhoWeServeSection from "@/components/our-story-tab/WhoWeServeSection";

const OurStory = () => {
    return (
        <>
        <HeroStory />
        <ProofBar />
        <JourneySection />
        <GrowthTimeline />
        <GlobalStandardsSection />
        <WhoWeServeSection />
        <LeadershipNoteSection />
        <CsrQuoteSection />
        <Footer />
        </>
    )
}

export default OurStory;
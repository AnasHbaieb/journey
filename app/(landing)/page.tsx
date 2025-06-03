import HeroSection from "./components/HeroSection"
import TrustedByProfessionals from "./components/TrustedByProfessionals"
import MeetOurFeaturedExperts from "./components/MeetOurFeaturedExperts"
import WhyChooseExpertJourney from "./components/WhyChooseExpertJourney"
import CTA from "./components/CTA"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black text-white">
      <HeroSection />
      <TrustedByProfessionals />
      <MeetOurFeaturedExperts />
      <WhyChooseExpertJourney />
      <CTA />
    </div>
  )
}

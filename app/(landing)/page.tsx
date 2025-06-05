import HeroSection from "./components/HeroSection"
import TrustedByProfessionals from "./components/TrustedByProfessionals"
import WhyChooseExpertJourney from "./components/WhyChooseExpertJourney"
import CTA from "./components/CTA"
import Header from "./components/Header"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black text-white">
      <Header />
      <HeroSection />
      <TrustedByProfessionals />
      <WhyChooseExpertJourney />
      <CTA />
    </div>
  )
}

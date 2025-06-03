import HeroSection from "./components/HeroSection"
import ExpertCards from "./components/ExpertCards"
import CTA from "./components/CTA"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection />
      {/* Expert Cards */}
      <section className="container mx-auto px-4 py-16">
        <ExpertCards />
      </section>

      <CTA />
    </div>
  )
}

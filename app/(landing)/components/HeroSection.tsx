import { experts } from "../../data/mockdata"
import { Users, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover Expert
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Journeys
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore the inspiring professional journeys of industry experts. Learn from their experiences, mistakes, and
          achievements as they share their path to success.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{experts.length} Expert Stories</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>Real Experiences</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { experts } from "../data/mockdata"
import { ArrowRight, Users, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
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

        {/* Expert Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <Link
              key={expert.id}
              href={`/journey/${expert.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={expert.photo || "/placeholder.svg"}
                    alt={expert.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-100 group-hover:border-blue-200 transition-colors"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {expert.name}
                </h3>

                <p className="text-blue-600 font-medium mb-3">{expert.title}</p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{expert.about}</p>

                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                  <span>View Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Own Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are learning from expert experiences and accelerating their career
            growth.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

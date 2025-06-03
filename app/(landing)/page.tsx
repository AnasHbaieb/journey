import Link from "next/link"
import Image from "next/image"
import { experts } from "../data/mockdata"
import { ArrowRight, Users, Star, Globe, Award } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-32">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-900 font-medium text-sm mb-8">
            <Users className="w-4 h-4" />
            <span>Featuring {experts.length} Industry Leaders</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Learn from Tech
            <span className="text-gray-900 relative">
              {" "}Pioneers
              <div className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-10"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-14 leading-relaxed">
            Discover the journeys, challenges, and triumphs of industry experts who have shaped the future of technology.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-gray-900" />
              <span className="text-gray-900 font-medium">Real Experiences</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full shadow-sm">
              <Globe className="w-4 h-4 text-gray-900" />
              <span className="text-gray-900 font-medium">Global Impact</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-gray-900" />
              <span className="text-gray-900 font-medium">Industry Leaders</span>
            </div>
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {experts.map((expert) => (
            <Link
              key={expert.id}
              href={`/journey/${expert.slug}`}
              className="group relative bg-white rounded-xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="relative">
                {/* Expert Image */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gray-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <Image
                    src={expert.photo || "/placeholder.svg"}
                    alt={expert.name}
                    width={128}
                    height={128}
                    className="relative w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Expert Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {expert.name}
                  </h3>

                  <p className="text-gray-900 font-medium mb-5">{expert.title}</p>

                  <p className="text-gray-700 text-sm mb-8 line-clamp-3">{expert.about}</p>

                  {/* Achievements Preview */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {expert.achievements.slice(0, 2).map((achievement, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-50 text-gray-900 text-sm font-medium rounded-full"
                      >
                        {achievement.split(" ")[0]}
                      </span>
                    ))}
                  </div>

                  {/* View Journey Button */}
                  <div className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all">
                    <span>View Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-950 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Own Journey?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of professionals who are learning from expert experiences and accelerating their career growth.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
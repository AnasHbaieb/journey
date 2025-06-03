import Link from "next/link"
import Image from "next/image"
import { experts } from "../data/mockdata"
import { ArrowRight, Users, Star, Globe, Award } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm mb-6">
            <Users className="w-4 h-4" />
            <span>{experts.length} Industry Leaders</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Learn from Tech
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}Pioneers
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the journeys, challenges, and triumphs of industry experts who have shaped the future of technology.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Star className="w-4 h-4 text-amber-500" />
              <span>Real Experiences</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span>Global Impact</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Award className="w-4 h-4 text-purple-500" />
              <span>Industry Leaders</span>
            </div>
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experts.map((expert) => (
            <Link
              key={expert.id}
              href={`/journey/${expert.slug}`}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Expert Image */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <Image
                    src={expert.photo || "/placeholder.svg"}
                    alt={expert.name}
                    width={112}
                    height={112}
                    className="relative w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Expert Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {expert.name}
                  </h3>

                  <p className="text-blue-600 font-medium mb-4">{expert.title}</p>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">{expert.about}</p>

                  {/* Achievements Preview */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {expert.achievements.slice(0, 2).map((achievement, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {achievement.split(" ")[0]}
                      </span>
                    ))}
                  </div>

                  {/* View Journey Button */}
                  <div className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
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
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 skew-y-3 transform origin-bottom-right" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Own Journey?</h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Join thousands of professionals who are learning from expert experiences and accelerating their career growth.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
import Link from "next/link"
import Image from "next/image"
import { experts } from "../data/mockdata"
import { ArrowRight, Users, Star, Globe, Award } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-40">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-black/5 rounded-2xl text-black font-medium text-sm mb-12 hover:bg-black/10 transition-colors">
            <Users className="w-4 h-4" />
            <span>Featuring {experts.length} Industry Leaders</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-10 tracking-tight">
            Learn from Tech
            <span className="text-black relative inline-block">
              {" "}Pioneers
              <div className="absolute bottom-2 left-0 w-full h-4 bg-blue-100/50 -z-10 transform -rotate-1"></div>
            </span>
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-16 leading-relaxed">
            Discover the journeys, challenges, and triumphs of industry experts who have shaped the future of technology.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-3 px-8 py-4 bg-black/5 rounded-2xl hover:bg-black/10 transition-all">
              <Star className="w-4 h-4 text-black" />
              <span className="text-black font-medium">Real Experiences</span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 bg-black/5 rounded-2xl hover:bg-black/10 transition-all">
              <Globe className="w-4 h-4 text-black" />
              <span className="text-black font-medium">Global Impact</span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 bg-black/5 rounded-2xl hover:bg-black/10 transition-all">
              <Award className="w-4 h-4 text-black" />
              <span className="text-black font-medium">Industry Leaders</span>
            </div>
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {experts.map((expert) => (
            <Link
              key={expert.id}
              href={`/journey/${expert.slug}`}
              className="group relative bg-white rounded-3xl p-10 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="relative">
                {/* Expert Image */}
                <div className="relative w-40 h-40 mx-auto mb-10">
                  <div className="absolute inset-0 bg-black/5 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <Image
                    src={expert.photo || "/placeholder.svg"}
                    alt={expert.name}
                    width={160}
                    height={160}
                    className="relative w-full h-full object-cover rounded-3xl shadow-lg"
                  />
                </div>

                {/* Expert Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {expert.name}
                  </h3>

                  <p className="text-black font-medium mb-6">{expert.title}</p>

                  <p className="text-black/70 text-sm mb-8 line-clamp-3">{expert.about}</p>

                  {/* Achievements Preview */}
                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {expert.achievements.slice(0, 2).map((achievement, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-black/5 text-black text-sm font-medium rounded-2xl"
                      >
                        {achievement.split(" ")[0]}
                      </span>
                    ))}
                  </div>

                  {/* View Journey Button */}
                  <div className="inline-flex items-center gap-2 text-black font-medium group-hover:gap-3 transition-all">
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
      <section className="relative bg-black py-32">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your Own Journey?</h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join thousands of professionals who are learning from expert experiences and accelerating their career growth.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
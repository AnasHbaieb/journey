import Link from "next/link"
import Image from "next/image"
import { experts } from "../data/mockdata"
import { ArrowRight, Users, Star, Globe, Award } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-40">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl text-black font-medium text-sm mb-12 shadow-sm hover:shadow-md transition-all">
            <Users className="w-5 h-5" />
            <span>Discover {experts.length} Tech Pioneers</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-10 tracking-tight">
            Expert
            <span className="text-black relative inline-block ml-5">
              Journeys
              <div className="absolute bottom-5 left-0 w-full h-4 bg-[#E4E6FF] -z-10 transform -skew-x-6"></div>
            </span>
          </h1>
          <p className="text-2xl text-black/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            Learn from the visionaries who shaped modern technology through their experiences, challenges, and innovations.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Star className="w-5 h-5 text-[#4F46E5]" />
              <span className="text-black font-medium">Real Stories</span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Globe className="w-5 h-5 text-[#4F46E5]" />
              <span className="text-black font-medium">Tech Impact</span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Award className="w-5 h-5 text-[#4F46E5]" />
              <span className="text-black font-medium">Innovation</span>
            </div>
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {experts.map((expert) => (
            <Link
              key={expert.id}
              href={`/journey/${expert.slug}`}
              className="group bg-white rounded-3xl p-12 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative">
                {/* Expert Image */}
                <div className="relative w-48 h-48 mx-auto mb-10">
                  <div className="absolute inset-0 bg-[#E4E6FF] rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <Image
                    src={expert.photo || "/placeholder.svg"}
                    alt={expert.name}
                    width={192}
                    height={192}
                    className="relative w-full h-full object-cover rounded-3xl shadow-lg"
                  />
                </div>

                {/* Expert Info */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {expert.name}
                  </h3>

                  <p className="text-[#4F46E5] font-medium mb-6">{expert.title}</p>

                  <p className="text-black/70 mb-8 line-clamp-3">{expert.about}</p>

                  {/* Achievements Preview */}
                  <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {expert.achievements.slice(0, 2).map((achievement, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-[#F8F9FF] text-black text-sm font-medium rounded-xl"
                      >
                        {achievement.split(" ")[0]}
                      </span>
                    ))}
                  </div>

                  {/* View Journey Button */}
                  <div className="inline-flex items-center gap-2 text-[#4F46E5] font-medium group-hover:gap-4 transition-all">
                    <span>Explore Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-black py-32">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(79,70,229,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:24px_24px]" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">Start Your Tech Journey</h2>
            <p className="text-2xl text-white/80 mb-12 leading-relaxed">
              Join a community of innovators and learn from the experiences that shaped modern technology.
            </p>
            <button className="bg-white text-black px-12 py-6 rounded-2xl font-semibold hover:bg-[#F8F9FF] transition-all text-lg">
              Begin Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
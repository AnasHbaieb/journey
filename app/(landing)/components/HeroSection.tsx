'use client'
import { useState, useEffect } from "react"
import FeaturedExpertCard from "./FeaturedExpertCard"
import { experts } from "../../data/mockdata"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0)
  const [heroSearchTerm, setHeroSearchTerm] = useState("")
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertIndex((prevIndex) => (prevIndex + 1) % experts.length)
    }, 5000) // Change expert every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentExpert = experts[currentExpertIndex]

  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-8 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-purple-300 mb-2">Browse Professionals & Experts</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Discover Expert
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {" "}
            Journeys
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Explore the inspiring professional journeys of industry experts. Learn from their experiences, mistakes, and
          achievements as they share their path to success.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-16">
          <input
            type="text"
            placeholder="Search for an expert or topic..."
            className="w-full max-w-md p-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={heroSearchTerm}
            onChange={(e) => setHeroSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                router.push(`/?search=${heroSearchTerm}`)
              }
            }}
          />
          <button 
            className="ml-3 px-6 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition duration-300"
            onClick={() => router.push(`/?search=${heroSearchTerm}`)}
          >
            Search
          </button>
        </div>

        {/* Featured Expert Card */}
        {currentExpert && <FeaturedExpertCard expert={currentExpert} />}
      </div>
    </section>
  )
}

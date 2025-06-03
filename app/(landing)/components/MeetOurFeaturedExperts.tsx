'use client'
import ExpertCard from "./ExpertCard"
import { experts } from "../../data/mockdata"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function MeetOurFeaturedExperts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const searchParams = useSearchParams()

  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>()
    experts.forEach(expert => {
      expert.category?.forEach(cat => categories.add(cat))
    })
    return ["All", ...Array.from(categories).sort()]
  }, [experts])

  useEffect(() => {
    const urlSearchTerm = searchParams.get('search')
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm)
      // Scroll to this section if a search term is present
      document.getElementById('featured-experts-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [searchParams])

  const filteredExperts = useMemo(() => {
    return experts.filter(
      (expert) => {
        const matchesSearchTerm = (
          expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          expert.title.toLowerCase().includes(searchTerm.toLowerCase())
        )

        const matchesCategory = (
          selectedCategory === "All" ||
          (expert.category && expert.category.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase()))
        )

        return matchesSearchTerm && matchesCategory
      }
    )
  }, [searchTerm, selectedCategory, experts])

  return (
    <section id="featured-experts-section" className="py-16 px-4 md:px-8 text-center bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Meet Our Featured Experts
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore a diverse range of professionals across various industries, discover their unique journeys.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Search for experts..."
            className="w-full md:w-1/3 p-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-3">
            {uniqueCategories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  )
} 
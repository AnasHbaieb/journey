'use client'
import ExpertCard from "./ExpertCard"
import { experts } from "../../data/mockdata"
import { useState, useMemo } from "react"

export default function MeetOurFeaturedExperts() {
  const [searchTerm] = useState("")
  const [selectedCategory] = useState("All") 

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
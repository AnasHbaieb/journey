'use client'

import React, { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { experts, Expert } from "../../../data/mockdata"
import Result from "./Result"
import SearchInput from "./SearchInput"
import CategoryFilter from "./CategoryFilter"

export default function SearchSection() {
  const searchParams = useSearchParams()
  const initialSearchTerm = searchParams.get("search") || ""

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const availableCategories = useMemo(() => {
    const categories = new Set<string>()
    experts.forEach((expert: Expert) => {
      expert.category?.forEach((cat: string) => categories.add(cat))
    })
    return ["All", ...Array.from(categories).sort()]
  }, [experts])

  const filteredExperts = useMemo(() => {
    return experts.filter(
      (expert: Expert) => {
        const matchesSearchTerm = (
          expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          expert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          expert.about.toLowerCase().includes(searchTerm.toLowerCase())
        )

        const matchesCategory = (
          selectedCategory === "All" ||
          (expert.category && expert.category.some((cat: string) => cat.toLowerCase() === selectedCategory.toLowerCase()))
        )

        return matchesSearchTerm && matchesCategory
      }
    )
  }, [searchTerm, selectedCategory, experts])

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Find Your Expert Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover industry experts who can guide you through their experiences and insights
        </p>
      </div>

      <div className="rounded-2xl shadow-lg border border-gray-100 p-8 mb-12 backdrop-blur-sm bg-white/50">
        <div className="flex flex-col md:flex-row gap-4">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            availableCategories={availableCategories} 
          />
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg">
        <Result filteredExperts={filteredExperts} />
      </div>
    </section>
  )
}
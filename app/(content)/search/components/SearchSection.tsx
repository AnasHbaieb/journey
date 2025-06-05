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
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Expert Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover industry experts who can guide you through their experiences and insights
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            availableCategories={availableCategories} 
          />
        </div>
      </div>

      <Result filteredExperts={filteredExperts} />
    </section>
  )
}
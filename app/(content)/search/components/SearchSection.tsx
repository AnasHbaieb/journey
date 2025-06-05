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
    <section className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Search for Experts</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Explore a wide range of experts across various fields. Search by name or description, or browse by category.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          availableCategories={availableCategories} 
        />
      </div>
      {/* Render the Result component here, passing filteredExperts */}
      <Result filteredExperts={filteredExperts} />
    </section>
  )
} 
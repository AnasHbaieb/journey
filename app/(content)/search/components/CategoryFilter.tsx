import React from "react"
import { ChevronDown } from "lucide-react"

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  availableCategories: string[];
}

export default function CategoryFilter({ selectedCategory, setSelectedCategory, availableCategories }: CategoryFilterProps) {
  return (
    <div className="relative">
      <select
        className="appearance-none w-full md:w-48 pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition duration-200"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {availableCategories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  )
}
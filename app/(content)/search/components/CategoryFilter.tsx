import React from "react"

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  availableCategories: string[];
}

export default function CategoryFilter({ selectedCategory, setSelectedCategory, availableCategories }: CategoryFilterProps) {
  return (
    <select
      className="p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent bg-white transition duration-300 ease-in-out cursor-pointer text-lg text-gray-700 appearance-none pr-10"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {availableCategories.map(category => (
        <option key={category} value={category}>{category === "All" ? "All Categories" : category}</option>
      ))}
    </select>
  )
} 
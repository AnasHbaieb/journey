import React from "react"

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  availableCategories: string[];
}

export default function CategoryFilter({ selectedCategory, setSelectedCategory, availableCategories }: CategoryFilterProps) {
  return (
    <select
      className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {availableCategories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  )
}
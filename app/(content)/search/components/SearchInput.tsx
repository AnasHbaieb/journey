import React from "react"

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search for an expert or topic..."
      className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
} 
import React from "react"

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search for an expert or topic..."
        className="w-full p-4 pl-12 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out text-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
} 
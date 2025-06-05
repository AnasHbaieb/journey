import React from "react"
import ExpertCard from "../../../(landing)/components/ExpertCard"
import { Expert } from "../../../data/mockdata"

interface ResultProps {
  filteredExperts: Expert[];
}

export default function Result({ filteredExperts }: ResultProps) {
  return (
    <section className="mt-12">
      {filteredExperts.length === 0 ? (
        <p className="text-center text-gray-500 text-2xl font-semibold py-20 bg-white rounded-xl shadow-md mx-auto max-w-lg">
          No experts found matching your search/filter criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      )}
    </section>
  )
} 
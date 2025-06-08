import React from "react"
import ExpertCard from "../../../(landing)/components/ExpertCard"
import { Expert } from "../../../data/mockdata"
import { UserX } from "lucide-react"

interface ResultProps {
  filteredExperts: Expert[];
}

export default function Result({ filteredExperts }: ResultProps) {
  return (
    <section className="mt-12">
      {filteredExperts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <UserX className="w-20 h-20 text-gray-300 mb-6" />
          <p className="text-2xl text-gray-700 font-medium mb-2">
            No experts found matching your criteria
          </p>
          <p className="text-gray-500">
            Try adjusting your search terms or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      )}
    </section>
  )
}
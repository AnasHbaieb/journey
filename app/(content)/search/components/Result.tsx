import React from "react"
import ExpertCard from "../../../(landing)/components/ExpertCard"
import { Expert } from "../../../data/mockdata"
import { UserX } from "lucide-react"

interface ResultProps {
  filteredExperts: Expert[];
}

export default function Result({ filteredExperts }: ResultProps) {
  return (
    <section>
      {filteredExperts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <UserX className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-xl text-gray-600 font-medium">
            No experts found matching your criteria
          </p>
          <p className="text-gray-500 mt-2">
            Try adjusting your search terms or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      )}
    </section>
  )
}
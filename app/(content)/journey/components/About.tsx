import type { Expert } from "../../../data/mockdata"
import { GraduationCap, Trophy } from "lucide-react"

interface AboutProps {
  expert: Expert
}

export default function About({ expert }: AboutProps) {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About {expert.name}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Studies */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Education & Certifications</h3>
          </div>
          <ul className="space-y-2">
            {expert.studies.map((study, index) => (
              <li key={index} className="text-gray-700 pl-4 border-l-2 border-blue-100">
                {study}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
          </div>
          <ul className="space-y-2">
            {expert.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700 pl-4 border-l-2 border-amber-100">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

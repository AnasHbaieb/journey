'use client'
import Image from "next/image"
import Link from "next/link"
import { Expert } from "../../data/mockdata"

interface ExpertCardProps {
  expert: Expert
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 overflow-hidden relative">
        {expert.photo ? (
          <Image
            src={expert.photo}
            alt={expert.name}
            fill
            className="object-cover absolute inset-0"
          />
        ) : (
          <span className="text-gray-400 text-xl font-bold">Image</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
      <p className="text-purple-400 text-sm mb-3">{expert.title}</p>
      <p className="text-gray-400 text-sm mb-6">{expert.about}</p>
      <div className="flex justify-around w-full mb-6">
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-blue-400">{expert.journey.length}+</p>
          <p className="text-gray-400 text-xs">Journeys</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-green-400">{expert.achievements.length}</p>
          <p className="text-gray-400 text-xs">Achievements</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-yellow-400">{expert.studies.length}</p>
          <p className="text-gray-400 text-xs">Studies</p>
        </div>
      </div>
      <Link href={`/journey/${expert.slug}`}>
        <button className="px-6 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition duration-300">
          Discover His Journey
        </button>
      </Link>
    </div>
  )
} 
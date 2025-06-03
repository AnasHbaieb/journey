'use client'
import Image from "next/image"
import Link from "next/link"
import { Expert } from "../../data/mockdata"

interface FeaturedExpertCardProps {
  expert: Expert
}

export default function FeaturedExpertCard({ expert }: FeaturedExpertCardProps) {
  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-700">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-2 border-white mb-4 overflow-hidden relative">
          {expert.photo ? (
            <Image
              src={expert.photo}
              alt={expert.name}
              fill
              className="object-cover absolute inset-0"
            />
          ) : (
            <span className="text-gray-400 text-3xl font-bold relative z-10">Image</span>
          )}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{expert.name}</h2>
        <p className="text-purple-400 mb-4">{expert.title}</p>
        <p className="text-gray-400 text-sm mb-6">
          {expert.about}
        </p>
        <Link href={`/journey/${expert.slug}`}>
          <button className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition duration-300">
            Discover His Journey
          </button>
        </Link>
      </div>
    </div>
  )
} 
'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Expert } from "../../data/mockdata"

interface ExpertCardProps {
  expert: Expert
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-28 h-28 rounded-full bg-gray-50 mb-5 overflow-hidden relative border-4 border-blue-300 shadow-inner">
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
      <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{expert.name}</h3>
      <p className="text-blue-700 text-lg mb-4 font-medium">{expert.title}</p>
      <p className="text-gray-600 text-base mb-7 line-clamp-4 leading-relaxed">{expert.about}</p>
      <div className="flex justify-around w-full mb-7 mt-auto">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-blue-600">{expert.journey.length}+</p>
          <p className="text-gray-500 text-sm">Journeys</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-green-600">{expert.achievements.length}</p>
          <p className="text-gray-500 text-sm">Achievements</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-yellow-600">{expert.studies.length}</p>
          <p className="text-gray-500 text-sm">Studies</p>
        </div>
      </div>
      <Link href={`/journey/${expert.slug}`}>
        <button className="mt-5 px-10 py-4 bg-blue-600 rounded-full text-white font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105">
          Discover His Journey
        </button>
      </Link>
    </div>
  )
} 
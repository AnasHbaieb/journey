import Link from "next/link"
import Image from "next/image"
import { experts } from "../../data/mockdata"
import { ArrowRight } from "lucide-react"

export default function ExpertCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experts.map((expert) => (
        <Link
          key={expert.id}
          href={`/journey/${expert.slug}`}
          className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
        >
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={expert.photo || "/placeholder.svg"}
                alt={expert.name}
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-full border-4 border-gray-100 group-hover:border-blue-200 transition-colors"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {expert.name}
            </h3>

            <p className="text-blue-600 font-medium mb-3">{expert.title}</p>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{expert.about}</p>

            <div className="flex items-center justify-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
              <span>View Journey</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

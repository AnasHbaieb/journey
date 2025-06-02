import Image from "next/image"
import type { Expert } from "../../../data/mockdata"
import NameIcon from "./NameIcon"

interface HeroCardProps {
  expert: Expert
}

export default function HeroCard({ expert }: HeroCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src={expert.photo || "/placeholder.svg"}
              alt={expert.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2">
            <NameIcon name={expert.name} />
          </div>
        </div>

        {/* Expert Info */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{expert.name}</h1>
          <p className="text-lg lg:text-xl text-blue-600 font-medium mb-4">{expert.title}</p>
          <p className="text-gray-700 leading-relaxed max-w-2xl">{expert.about}</p>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import type { MediaCard as MediaCardType } from "../../../data/mockdata"

interface MediaCardProps {
  media: MediaCardType
}

export default function MediaCard({ media }: MediaCardProps) {
  return (
    <div className="relative group">
      {media.video ? (
      <div className="relative  rounded-xl shadow-lg">
          <video
            src={media.video}
            controls
            className="w-full h-64 object-cover"
          />
        </div>):
        (
      <div className="relative overflow-hidden rounded-2xl bg-gray-50">
          <Image
            src={media.image || "/placeholder.svg"}
            alt={media.caption}
            width={400}
            height={240}
            className="w-full h-64 object-cover"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>)}
      <div className="flex items-start gap-3">
        <div className="w-1 h-4 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
        <p className="text-sm font-medium text-gray-700">{media.caption}</p>
      </div>
    </div>
  )
}

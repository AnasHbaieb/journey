import type { JourneyStep } from "../../../data/mockdata"
import MediaCard from "./MediaCard"
import ToDoBlock from "./ToDoBlock"
import { Hash } from "lucide-react"

interface TimelineProps {
  journey: JourneyStep[]
}

export default function Timeline({ journey }: TimelineProps) {
  return (
    <section className="mb-12">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {journey.map((step, index) => (
            <div key={index} className="relative">
              {/* Year Badge */}
              <div className="flex justify-center mb-8">
                <div className="bg-black text-white px-6 py-2 rounded-full border-4 border-white shadow-lg">
                  <span className="font-mono font-bold">{step.date}</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Cards Container */}
              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                {/* Media Card */}
                <div className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm">
                  {/* Header with Brand Pattern */}
                  <div className="relative h-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                    <div className="absolute top-0 left-4 w-8 h-full bg-white/30 transform skew-x-12"></div>
                    <div className="absolute top-0 right-6 w-4 h-full bg-white/20 transform -skew-x-12"></div>
                  </div>

                  <div className="p-6">
                    {/* Brand Label */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                          VISUAL
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">#{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <MediaCard media={step.media} />
                  </div>
                </div>

                {/* Story Card */}
                <div className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm">
                  {/* Header with Brand Pattern */}
                  <div className="relative h-4 bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="absolute top-0 left-6 w-6 h-full bg-white/30 rounded-full"></div>
                    <div className="absolute top-0 right-4 w-10 h-full bg-white/20 transform skew-y-12"></div>
                  </div>

                  <div className="p-6">
                    {/* Brand Label */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider font-mono">
                          STORY
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">CH.{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.media.caption}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{step.story}</p>
                    <ToDoBlock todo={step.todo} mistakes={step.mistakes} />
                  </div>
                </div>
              </div>

              {/* Simple Connector */}
              {index < journey.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="w-px h-8 bg-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

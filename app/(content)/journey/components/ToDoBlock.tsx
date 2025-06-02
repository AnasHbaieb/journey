import { Lightbulb, Target } from "lucide-react"

interface ToDoBlockProps {
  todo: string
  mistakes: string
}

export default function ToDoBlock({ todo, mistakes }: ToDoBlockProps) {
  return (
    <div className="space-y-4">
      {/* Todo */}
      <div className="flex gap-3 p-4 bg-green-50 rounded-2xl border-l-4 border-green-500">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Target className="w-3 h-3 text-white" />
        </div>
        <div>
          <span className="text-xs font-bold text-green-800 uppercase tracking-wider font-mono block mb-1">NEXT</span>
          <p className="text-xs text-green-700 leading-relaxed">{todo}</p>
        </div>
      </div>

      {/* Mistakes */}
      <div className="flex gap-3 p-4 bg-orange-50 rounded-2xl border-l-4 border-orange-500">
        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-3 h-3 text-white" />
        </div>
        <div>
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider font-mono block mb-1">
            LEARNED
          </span>
          <p className="text-xs text-orange-700 leading-relaxed">{mistakes}</p>
        </div>
      </div>
    </div>
  )
}

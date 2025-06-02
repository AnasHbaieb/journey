import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Experts</span>
          </Link>
          <div className="text-sm text-gray-500">Expert Journey</div>
        </div>
      </div>
    </header>
  )
}



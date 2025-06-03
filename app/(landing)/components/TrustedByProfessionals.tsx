import { Users, Hourglass, Globe, Activity } from "lucide-react"

export default function TrustedByProfessionals() {
  return (
    <section className="py-16 px-4 md:px-8 text-center bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Trusted by Professionals Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <p className="text-3xl font-extrabold text-blue-400 mb-2">500+</p>
            <p className="text-gray-300">Expert Stories</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <Hourglass className="w-12 h-12 text-green-400 mb-4" />
            <p className="text-3xl font-extrabold text-green-400 mb-2">50+</p>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <Globe className="w-12 h-12 text-purple-400 mb-4" />
            <p className="text-3xl font-extrabold text-purple-400 mb-2">200+</p>
            <p className="text-gray-300">Success Stories</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <Activity className="w-12 h-12 text-yellow-400 mb-4" />
            <p className="text-3xl font-extrabold text-yellow-400 mb-2">15+</p>
            <p className="text-gray-300">Industries Covered</p>
          </div>
        </div>
      </div>
    </section>
  )
} 
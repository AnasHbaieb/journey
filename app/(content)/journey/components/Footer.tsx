import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Connect with Our Experts</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Discover more inspiring journeys and connect with industry experts who are shaping the future of technology.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">© 2025 Expert Journeys. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

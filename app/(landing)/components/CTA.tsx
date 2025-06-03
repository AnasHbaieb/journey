export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-8 text-center bg-gradient-to-br from-purple-950 via-gray-900 to-black relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Start Your Own Journey?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are learning from expert experiences and accelerating their career growth and gaining actionable insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="px-8 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition duration-300 shadow-lg">
            Get Started Now
          </button>
          <button className="px-8 py-3 bg-transparent border border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-900 hover:bg-opacity-20 transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>
        <div className="text-sm text-gray-500 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span>✅ 1000+ Happy Subscribers</span>
          <span>✅ 4.9 Average Rating</span>
          <span>✅ Instant Customer Support</span>
        </div>
      </div>
    </section>
  )
}

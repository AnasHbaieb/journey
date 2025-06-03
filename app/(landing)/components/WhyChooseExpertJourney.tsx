export default function WhyChooseExpertJourney() {
  return (
    <section className="py-16 px-4 md:px-8 text-center bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Choose Expert.Journey?
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We provide you with an unparalleled learning experience driven by inspiration, actionable insights, and career growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl mb-4">
              {/* Icon Placeholder */}
              💡
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real Inspiration</h3>
            <p className="text-gray-400 text-sm">
              Discover real-life experiences and lessons learned from experts journeys, challenges, and triumphs.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl mb-4">
              {/* Icon Placeholder */}
              🚀
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Actionable Insights</h3>
            <p className="text-gray-400 text-sm">
              Receive practical advice and actionable guidance you can apply to your career pursuits immediately.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-3xl mb-4">
              {/* Icon Placeholder */}
              🌱
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
            <p className="text-gray-400 text-sm">
              Enhance your knowledge and skills, and unlock new opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
import { getExpertBySlug, getAllExpertSlugs } from "../../data/mockdata"

export async function generateStaticParams() {
  const slugs = getAllExpertSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ExpertDetailPage({ params }: { params: { slug: string } }) {
  const expert = getExpertBySlug(params.slug)

  if (!expert) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Expert Not Found</h1>
        <p className="text-lg text-gray-400 mt-4">The expert you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 mt-10">
        <h1 className="text-4xl font-bold text-white mb-4">{expert.name}</h1>
        <p className="text-purple-400 text-xl mb-6">{expert.title}</p>
        <p className="text-gray-300 text-lg mb-8">{expert.about}</p>

        {/* Add more expert details here as needed */}
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Journey</h2>
        <ul className="list-disc list-inside text-gray-300">
          {expert.journey.map((step, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{step.date}:</span> {step.story}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Achievements</h2>
        <ul className="list-disc list-inside text-gray-300">
          {expert.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Studies</h2>
        <ul className="list-disc list-inside text-gray-300">
          {expert.studies.map((study, index) => (
            <li key={index}>{study}</li>
          ))}
        </ul>

      </div>
    </div>
  )
} 
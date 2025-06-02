import { notFound } from "next/navigation"
import { getExpertBySlug, getAllExpertSlugs } from "../../../data/mockdata"
import Header from "../components/Header"
import HeroCard from "../components/HeroCard"
import About from "../components/About"
import Timeline from "../components/Timeline"
import Footer from "../components/Footer"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all expert slugs
export async function generateStaticParams() {
  const slugs = getAllExpertSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const expert = getExpertBySlug(slug)

  if (!expert) {
    return {
      title: "Expert Not Found",
    }
  }

  return {
    title: `${expert.name} - ${expert.title} | Expert Journey`,
    description: expert.about,
    openGraph: {
      title: `${expert.name} - ${expert.title}`,
      description: expert.about,
      images: [expert.photo],
    },
  }
}

export default async function ExpertJourneyPage({ params }: PageProps) {
  const { slug } = await params
  const expert = getExpertBySlug(slug)

  if (!expert) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <HeroCard expert={expert} />
        <About expert={expert} />
        <Timeline journey={expert.journey} />
      </main>

      <Footer />
    </div>
  )
}

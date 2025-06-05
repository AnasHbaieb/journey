import Header from "../journey/components/Header"
import Footer from "../journey/components/Footer"
import SearchSection from "./components/SearchSection"

export default function SearchExpertsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchSection />
      </main>
      <Footer />
    </div>
  )
}

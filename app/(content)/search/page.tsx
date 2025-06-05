import Header from "../journey/components/Header"
import Footer from "../journey/components/Footer"
import SearchSection from "./components/SearchSection"

export default function SearchExpertsPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <SearchSection />
      </main>
      <Footer />
    </div>
  )
}

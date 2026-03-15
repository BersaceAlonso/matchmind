import FeaturedMatchesSection from '../components/home/FeaturedMatchesSection'
import HeroSection from '../components/home/HeroSection'

function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <HeroSection />
      <FeaturedMatchesSection />
    </main>
  )
}

export default HomePage

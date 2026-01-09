import Header from "@/components/header"
import Hero from "@/components/hero"
import SearchSection from "@/components/search-section"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sahayak - Find Local Service Workers",
  description:
    "Connect with verified local service workers for all your needs. Book plumbers, electricians, cleaners, and more in minutes.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SearchSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

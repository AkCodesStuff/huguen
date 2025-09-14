import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </main>
  )
}

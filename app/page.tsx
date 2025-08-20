import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import About from '@/components/about/about'
import Stats from '@/components/stats/stats'
import Team from '@/components/team/team'
import Testimonials from '@/components/testimonials/testimonials'
import CTA from '@/components/cta/cta'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <main className="pt-header-mobile sm:pt-header-desktop">
      <Hero />
      <Services />
      <About />
      <Stats />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

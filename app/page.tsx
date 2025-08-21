import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import About from '@/components/about/about'
import Stats from '@/components/stats/stats'
import Team from '@/components/team/team'
import Testimonials from '@/components/testimonials/testimonials'
import CTA from '@/components/cta/cta'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
  title: 'StryveAhead - Scale Your Brand Across Q-Commerce, E-Commerce & Modern Trade',
  description: 'We specialise in helping brands establish strong presence, optimise operations, and achieve long-term growth across Q-Commerce, E-Commerce, and Modern Trade channels.',
}

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
        <Stats />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <CTA />
      </section>
      <Footer />
    </main>
  )
}

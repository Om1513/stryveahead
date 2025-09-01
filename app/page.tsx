import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import About from '@/components/about/about'
import Stats from '@/components/stats/stats'
import Portfolio from '@/components/portfolio/portfolio'
import Team from '@/components/team/team'
import CTA from '@/components/cta/cta'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
  title: 'StryveAhead Advisors - Accelerate Scale, Unlock Competitive Advantage, Maximise Profitability',
  description: 'We partner with high-growth brands to accelerate scale, unlock competitive advantage, and maximise profitability. End-to-end solutions from strategic planning to execution excellence.',
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
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <CTA />
      </section>
      <Footer />
    </main>
  )
}

import type { Metadata } from 'next'
import { Suspense } from 'react'
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

// Preload critical data and images
async function preloadData() {
  // This runs at build time for static generation
  return {
    timestamp: Date.now(),
  }
}

export default async function Home() {
  // Preload data during server-side rendering
  await preloadData()

  return (
    <main className="pt-20">
      <Hero />
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <section id="services">
          <Services />
        </section>
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <section id="about">
          <About />
          <Stats />
        </section>
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <section id="portfolio">
          <Portfolio />
        </section>
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <section id="team">
          <Team />
        </section>
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <section id="contact">
          <CTA />
        </section>
      </Suspense>
      <Footer />
    </main>
  )
}

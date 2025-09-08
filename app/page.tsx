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
  title: 'Raise. Scale. Grow.',
  description: 'At StryveAhead Advisors, we empower D2C founders to secure early-stage funding while building investor-ready businesses. With expertise in sales strategy, marketing execution, supply chain readiness and financial planning, we bridge the gap between vision and scalable growth. Our mission: to transform promising brands into VC-backed, high-growth companies.',
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

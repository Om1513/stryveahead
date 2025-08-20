'use client'

import { useState } from 'react'
import Container from '@/components/container'
import Stat from './stat'
import { statsContent } from '@/lib/data/content'

export default function Stats() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)
  const [lastHighlightedCardId, setLastHighlightedCardId] = useState<string>('happy-clients') // Default to second card initially

  const handleCardHover = (cardId: string) => {
    setHoveredCardId(cardId)
    setLastHighlightedCardId(cardId) // Remember this as the last highlighted card
  }

  const handleCardLeave = () => {
    setHoveredCardId(null) // Clear hover state but keep lastHighlightedCardId
  }

  return (
    <section 
      className="relative py-24 bg-[#F5F5F5] overflow-hidden"
      onMouseLeave={handleCardLeave}
    >
      {/* Decorative Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="947"
          height="300"
          viewBox="0 0 947 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute scale-75 md:scale-100"
        >
          <circle cx="473.5" cy="150.5" r="193.5" stroke="white" strokeWidth="4" />
          <circle cx="473.5" cy="150.5" r="279.5" stroke="white" strokeWidth="4" />
          <circle cx="473.5" cy="150.5" r="363.5" stroke="white" strokeWidth="4" />
          <circle cx="473.5" cy="150.5" r="471.5" stroke="white" strokeWidth="4" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsContent.stats.map((stat) => {
            // Determine if this card should be highlighted
            const isHighlighted = hoveredCardId 
              ? hoveredCardId === stat.id 
              : lastHighlightedCardId === stat.id // Use last highlighted card when no hover

            return (
              <Stat
                key={stat.id}
                number={stat.number}
                label={stat.label}
                highlighted={isHighlighted}
                onMouseEnter={() => handleCardHover(stat.id)}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}

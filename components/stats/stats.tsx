'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/container'
import Stat from './stat'
import { statsContent } from '@/lib/data/content'
import { staggerContainer } from '@/lib/animations/variants'

export default function Stats() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)
  const [lastHighlightedCardId, setLastHighlightedCardId] = useState<string>('brands-supported') // Default to highlighted card initially

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
          <motion.circle 
            cx="473.5" 
            cy="150.5" 
            r="193.5" 
            stroke="white" 
            strokeWidth="4"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle 
            cx="473.5" 
            cy="150.5" 
            r="279.5" 
            stroke="white" 
            strokeWidth="4"
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.circle 
            cx="473.5" 
            cy="150.5" 
            r="363.5" 
            stroke="white" 
            strokeWidth="4"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.circle 
            cx="473.5" 
            cy="150.5" 
            r="471.5" 
            stroke="white" 
            strokeWidth="4"
            animate={{
              scale: [1, 1.01, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.div>
      </Container>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface RippleBackgroundProps {
  className?: string
  ringCount?: number
  color?: string
}

export default function RippleBackground({ 
  className = '', 
  ringCount = 4,
  color = 'white'
}: RippleBackgroundProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: ringCount }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full border-2 border-${color}`}
          style={{
            width: 100 + (index * 80),
            height: 100 + (index * 80),
          }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 0.2, 0],
          }}
          transition={{
            duration: 4,
            ease: 'easeOut',
            repeat: Infinity,
            delay: index * 0.8,
          }}
        />
      ))}
    </div>
  )
}

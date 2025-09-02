'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'
import { clients } from '@/lib/data/clients'
import ClientLogo from './client-logo'

interface ClientLogoBeltProps {
  className?: string
}

export default function ClientLogoBelt({ className }: ClientLogoBeltProps) {
  const [isPaused, setIsPaused] = useState(false)
  const x = useMotionValue(0)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const pausedPositionRef = useRef<number>(0)
  
  // Calculate dimensions
  const logoWidth = 200 // Width per logo including gap
  const totalLogos = clients.length
  const singleSetWidth = totalLogos * logoWidth
  const animationDuration = 100 // seconds for one complete cycle
  
  const startAnimation = useCallback(() => {
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime - pausedPositionRef.current
      }
      
      if (!isPaused) {
        const elapsed = currentTime - startTimeRef.current
        const progress = (elapsed / (animationDuration * 1000)) % 1
        const position = -progress * singleSetWidth
        
        x.set(position)
        pausedPositionRef.current = elapsed
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [isPaused, animationDuration, singleSetWidth, x])
  
  useEffect(() => {
    startAnimation()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, startAnimation])
  
  useEffect(() => {
    if (isPaused) {
      startTimeRef.current = undefined
    } else {
      startTimeRef.current = undefined
    }
  }, [isPaused])

  const handleHoverStart = () => {
    setIsPaused(true)
  }

  const handleHoverEnd = () => {
    setIsPaused(false)
  }

  // Create multiple sets for seamless infinite scroll
  const logoSets = Array(3).fill(clients).flat()

  return (
    <div className={cn('relative overflow-hidden w-full', className)}>
      <motion.div
        className="flex items-center gap-8"
        style={{ x }}
      >
        {logoSets.map((client, index) => {
          const setIndex = Math.floor(index / totalLogos)
          const logoIndex = index % totalLogos
          
          return (
            <motion.div
              key={`set${setIndex}-${logoIndex}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ClientLogo
                client={client}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

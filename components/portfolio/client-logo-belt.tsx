'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { clients } from '@/lib/data/clients'
import ClientLogo from './client-logo'

interface ClientLogoBeltProps {
  className?: string
}

export default function ClientLogoBelt({ className }: ClientLogoBeltProps) {
  const [isPaused, setIsPaused] = useState(false)

  const handleHoverStart = () => {
    setIsPaused(true)
  }

  const handleHoverEnd = () => {
    setIsPaused(false)
  }

  return (
    <div className={cn('relative overflow-hidden w-full', className)}>
      <div
        className={cn(
          'flex items-center gap-8 animate-slide',
          isPaused && 'animation-play-state-paused'
        )}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {/* First set of logos */}
        {clients.map((client, index) => (
          <ClientLogo
            key={`set1-${index}`}
            client={client}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        ))}
        
        {/* Second set of logos for seamless loop */}
        {clients.map((client, index) => (
          <ClientLogo
            key={`set2-${index}`}
            client={client}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        ))}
        
        {/* Third set to ensure perfect seamless transition */}
        {clients.map((client, index) => (
          <ClientLogo
            key={`set3-${index}`}
            client={client}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        ))}
        
        {/* Fourth set for extra smoothness */}
        {clients.map((client, index) => (
          <ClientLogo
            key={`set4-${index}`}
            client={client}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        ))}
      </div>
    </div>
  )
}

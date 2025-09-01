'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Client } from '@/lib/data/clients'

interface ClientLogoProps {
  client: Client
  className?: string
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export default function ClientLogo({ 
  client, 
  className,
  onHoverStart,
  onHoverEnd 
}: ClientLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverStart?.()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverEnd?.()
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center p-4 client-logo-hover',
        'min-w-[140px] h-[80px]', // Fixed dimensions for consistent spacing
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={`${client.name} logo`}
    >
      <Image
        src={client.logoPath}
        alt={`${client.name} logo`}
        width={120}
        height={60}
        className={cn(
          'max-w-[120px] max-h-[60px] object-contain client-logo-image',
          'filter grayscale transition-all duration-300 ease-out',
          isHovered && 'grayscale-0 brightness-110'
        )}
        priority={false}
        sizes="(max-width: 768px) 80px, 120px"
      />
      
      {/* Enhanced glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg pointer-events-none animate-pulse" />
      )}
    </div>
  )
}

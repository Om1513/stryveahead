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

  // Special sizing for specific clients
  const isSpecialSize = client.name === 'Noto' || client.name === 'Scandalous' || client.name === 'BBetter'
  const imageWidth = isSpecialSize ? 400 : 200
  const imageHeight = isSpecialSize ? 200 : 100

  return (
    <div
      className={cn(
        'relative flex items-center justify-center p-4',
        'w-[220px] h-[120px]', // Fixed dimensions for consistent spacing
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
        width={imageWidth}
        height={imageHeight}
        className={cn(
          'object-contain transition-all duration-300 ease-out',
          isSpecialSize ? 'w-[400px] h-[200px]' : 'w-[200px] h-[100px]'
        )}
        priority={false}
        sizes="(max-width: 768px) 150px, 240px"
      />
      
      {/* Enhanced glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg pointer-events-none animate-pulse" />
      )}
    </div>
  )
}

'use client'

import { useEffect } from 'react'

interface ImagePreloaderProps {
  images: string[]
}

export default function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    // Preload critical images
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
          img.src = src
        })
      })

      try {
        await Promise.allSettled(imagePromises)
        console.log('Critical images preloaded successfully')
      } catch (error) {
        console.warn('Some images failed to preload:', error)
      }
    }

    preloadImages()
  }, [images])

  return null // This component doesn't render anything
}

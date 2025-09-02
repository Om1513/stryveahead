'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedWrapperProps {
  children: ReactNode
  variants?: Variants
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export default function AnimatedWrapper({
  children,
  variants,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
}: AnimatedWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once,
    amount: threshold,
  })

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

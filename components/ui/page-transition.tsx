'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { pageTransition } from '@/lib/animations/variants'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export default function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

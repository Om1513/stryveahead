import { Transition } from 'framer-motion'

// Smooth easing curves
export const easeInOutCubic = [0.25, 0.46, 0.45, 0.94] as const
export const easeOutQuart = [0.25, 1, 0.5, 1] as const
export const easeInOutQuart = [0.76, 0, 0.24, 1] as const

// Common transition configurations
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: easeInOutCubic,
}

export const quickTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut',
}

export const slowTransition: Transition = {
  duration: 1.2,
  ease: easeInOutCubic,
}

// Spring configurations
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

export const gentleSpring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
}

export const bouncySpring: Transition = {
  type: 'spring',
  stiffness: 600,
  damping: 20,
}

// Stagger configurations
export const staggerFast = {
  staggerChildren: 0.05,
  delayChildren: 0.1,
}

export const staggerMedium = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
}

export const staggerSlow = {
  staggerChildren: 0.2,
  delayChildren: 0.3,
}

// Apple-style transitions
export const appleTransition: Transition = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
}

export const appleHoverTransition: Transition = {
  duration: 0.2,
  ease: 'easeOut',
}

// Ripple animation transition
export const rippleTransition: Transition = {
  duration: 3,
  ease: 'easeOut',
  repeat: Infinity,
  repeatDelay: 0.5,
}

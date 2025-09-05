'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  detailedDescription: string
  icon: string
}

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
  icon: React.ReactNode
}

export default function ServiceModal({ service, isOpen, onClose, icon }: ServiceModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="p-8 pt-12">
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20">
                  {icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="font-inter text-3xl font-bold leading-tight text-heading text-center mb-4">
                {service.title}
              </h2>

              {/* One-line description */}
              <p className="font-inter text-lg font-medium leading-7 text-paragraph text-center mb-6">
                {service.description}
              </p>

              {/* Separator line */}
              <div className="w-24 h-0.5 bg-orange-500 mx-auto mb-6" />

              {/* Detailed description */}
              <div className="max-w-xl mx-auto">
                <p className="font-inter text-base font-normal leading-7 text-paragraph text-center">
                  {service.detailedDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

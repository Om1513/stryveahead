'use client'

import Container from '@/components/container'
import Logo from '@/components/header/logo'
import { footerContent } from '@/lib/data/content'
import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations/variants'

export default function Footer() {

  return (
    <footer className="bg-soft">
      <Container>
        <motion.div 
          className="flex justify-center items-center py-12 sm:py-16 lg:py-17"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* Logo */}
            <motion.div 
              className="mb-12 sm:mb-16 lg:mb-18"
              variants={fadeIn}
            >
              <Logo />
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="flex items-center gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 flex-wrap justify-center"
              variants={slideInLeft}
            >
              {footerContent.quickLinks.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className="text-paragraph text-center font-asap text-sm sm:text-base font-bold leading-6 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm whitespace-nowrap"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: 'easeOut'
                      }
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="flex items-center gap-4 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 flex-wrap justify-center"
              variants={slideInRight}
            >
              {/* Location */}
              <motion.div 
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1,
                      ease: 'easeOut'
                    }
                  }
                }}
              >
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-paragraph font-asap text-sm sm:text-base font-normal leading-6 whitespace-nowrap">
                  {footerContent.contact.address.street}, {footerContent.contact.address.city}
                </span>
              </motion.div>

              {/* Phone */}
              <motion.a
                href={`tel:${footerContent.contact.phone}`}
                className="flex items-center gap-2 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                      ease: 'easeOut'
                    }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-paragraph font-asap text-sm sm:text-base font-normal leading-6 whitespace-nowrap">
                  {footerContent.contact.phone}
                </span>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${footerContent.contact.email}`}
                className="flex items-center gap-2 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.3,
                      ease: 'easeOut'
                    }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-paragraph font-asap text-sm sm:text-base font-normal leading-6 whitespace-nowrap">
                  {footerContent.contact.email}
                </span>
              </motion.a>
            </motion.div>

            {/* Company Description */}
            <motion.p 
              className="text-paragraph text-center font-plus-jakarta text-sm sm:text-base font-normal leading-6 max-w-[600px] sm:max-w-[700px] px-4"
              variants={staggerItem}
            >
              We partner with high-growth brands to accelerate scale, unlock competitive advantage, and maximise profitability.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import Container from '@/components/container'
import { motion } from 'framer-motion'
import { heroContent } from '@/lib/data/content'
import { staggerContainer, staggerItem, slideInRight, floating } from '@/lib/animations/variants'

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Semi-transparent white rectangles */}
        <div className="absolute -left-96 -top-2 w-[720px] h-[665px] bg-white/5 rounded-[80px]" />
        <div className="absolute -left-[70px] top-[496px] w-[496px] h-[576px] bg-white/5 rounded-[80px]" />
        <div className="absolute left-[1071px] top-[247px] w-[496px] h-[665px] bg-white/5 rounded-[80px]" />
        
        {/* Animated Dots pattern */}
        <motion.div 
          className="absolute right-10 bottom-32 opacity-30"
          variants={floating}
          animate="animate"
          style={{ padding: '10px' }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const row = Math.floor(i / 6)
            const col = i % 6
            return (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: `${col * 40 + 10}px`,
                  top: `${row * 40 + 10}px`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            )
          })}
        </motion.div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="text-white lg:flex-[2] lg:max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-hero font-bold font-sf-pro mb-6 sm:mb-8 leading-[1.1] tracking-[-0.02em]"
              variants={staggerItem}
            >
              {heroContent.title}
            </motion.h1>

            <motion.p 
              className="text-body-lg sm:text-xl font-sf-pro mb-8 sm:mb-12 text-white/90 leading-[1.5] font-medium tracking-[-0.01em]"
              variants={staggerItem}
            >
              {heroContent.description}
            </motion.p>

            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                className="bg-orange-button hover:bg-orange-button/90 text-white font-semibold font-sf-pro px-6 sm:px-12 py-4 sm:py-5 h-[50px] sm:h-[60px] rounded-2xl shadow-[0px_62px_85px_-22px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 text-base sm:text-lg tracking-[-0.01em]"
              >
                {heroContent.primaryCta}
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="relative h-[300px] sm:h-[400px] lg:h-[592px] lg:flex-[1] lg:ml-12 w-full"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 rounded-2xl shadow-[24px_30px_51px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <motion.div 
                  className="text-center text-gray-600 px-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4" variants={staggerItem}>StryveAhead</motion.div>
                  <motion.div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6" variants={staggerItem}>Growth Intelligence Suite</motion.div>
                  <motion.div className="text-sm sm:text-base lg:text-lg" variants={staggerItem}>Dashboard Preview</motion.div>
                  <motion.div className="text-xs sm:text-sm lg:text-base mt-2 sm:mt-4 opacity-75" variants={staggerItem}>Real-time Q-Commerce Analytics</motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

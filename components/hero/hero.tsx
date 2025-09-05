'use client'

import { Button } from '@/components/ui/button'
import Container from '@/components/container'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="text-white lg:flex-[2] lg:max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-[55px] font-bold font-inter mb-6 sm:mb-8 leading-[60px] tracking-[-0.02em]"
              variants={staggerItem}
            >
              {heroContent.title}
            </motion.h1>

            <motion.p 
              className="text-body-lg sm:text-xl font-inter mb-8 sm:mb-12 text-white/90 leading-[1.5] font-medium tracking-[-0.01em]"
              variants={staggerItem}
            >
              {heroContent.description}
            </motion.p>

            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                className="bg-orange-button hover:bg-orange-button/90 text-white font-semibold font-inter px-6 sm:px-12 py-4 sm:py-5 h-[50px] sm:h-[60px] rounded-2xl shadow-[0px_62px_85px_-22px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 text-base sm:text-lg tracking-[-0.01em]"
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
              <Image 
                src="/images/hero/home.jpg" 
                alt="StryveAhead Growth Intelligence Suite"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

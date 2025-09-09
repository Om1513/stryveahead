'use client'

import Container from '@/components/container'
import FeatureItem from './feature-item'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutContent } from '@/lib/data/content'
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations/variants'

export default function About() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/about/teamwork.jpg" 
                alt="StryveAhead Team Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-[67px] font-bold leading-[80px] text-neutral-900 mb-4 sm:mb-6 font-inter"
              variants={staggerItem}
            >
              {aboutContent.title}
            </motion.h2>
            
            <motion.p 
              className="text-body-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed"
              variants={staggerItem}
            >
              {aboutContent.description}
            </motion.p>
            
            <motion.div 
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutContent.features.map((feature, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <FeatureItem>
                    {feature}
                  </FeatureItem>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

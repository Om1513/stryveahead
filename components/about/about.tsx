'use client'

import Container from '@/components/container'
import FeatureItem from './feature-item'
import { Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutContent } from '@/lib/data/content'
import { slideInLeft, slideInRight, staggerContainer, staggerItem, floating } from '@/lib/animations/variants'

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
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/about/teamwork.jpg" 
                alt="StryveAhead Team Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-large border border-neutral-100"
              variants={floating}
              animate="animate"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-1">{aboutContent.yearsExperience}</div>
                <div className="text-xs sm:text-sm text-neutral-600">Years of Excellence</div>
              </div>
            </motion.div>
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
              className="text-h2 font-bold text-neutral-900 mb-4 sm:mb-6 font-poppins"
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
            
            <motion.div 
              className="bg-neutral-50 p-4 sm:p-6 rounded-xl"
              variants={staggerItem}
            >
              <h3 className="text-h5 font-semibold text-neutral-900 mb-3 sm:mb-4 font-poppins">
                {aboutContent.contactSection.title}
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-neutral-500">Call us directly</p>
                    <a 
                      href={`tel:${aboutContent.contactSection.phone}`}
                      className="text-body font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                    >
                      {aboutContent.contactSection.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-neutral-500">Send us an email</p>
                    <a 
                      href={`mailto:${aboutContent.contactSection.email}`}
                      className="text-body font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                    >
                      {aboutContent.contactSection.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

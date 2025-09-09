'use client'

import Container from '@/components/container'
import LargeTeamCard from './large-team-card'
import { motion } from 'framer-motion'
import { teamContent } from '@/lib/data/content'
import { slideInLeft, slideInRight } from '@/lib/animations/variants'

export default function Team() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">

      {/* Background circle on the right */}
      <div className="absolute right-[72px] top-[108px] w-[496px] h-[576px] rounded-[80px] bg-neutral-600 opacity-5"></div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-[528px] flex-shrink-0 order-2 lg:order-1"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <div className="mb-8 text-center lg:text-left">
              <h2 className="hidden lg:block text-[60px] font-bold leading-[60px] text-neutral-900 mb-8 font-inter">
                {teamContent.title}
              </h2>
              <p className="text-base font-normal leading-6 text-neutral-600 font-inter whitespace-pre-line text-center lg:text-left">
                {teamContent.description}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Large Team Card */}
          <motion.div 
            className="flex-1 flex justify-center lg:max-w-[640px] order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <LargeTeamCard
              name={teamContent.members[0].name}
              title={teamContent.members[0].title}
              imageUrl={teamContent.members[0].imageUrl}
              featured={teamContent.members[0].featured || false}
              bio={teamContent.members[0].bio}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

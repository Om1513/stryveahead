'use client'

import Container from '@/components/container'
import LargeTeamCard from './large-team-card'
import { motion } from 'framer-motion'
import { teamContent } from '@/lib/data/content'
import { slideInLeft, slideInRight } from '@/lib/animations/variants'

export default function Team() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      
      {/* Animated Gradient dots pattern on the left */}
      <motion.div 
        className="absolute left-[-57px] top-[604px] w-[216px] h-[136px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <svg width="159" height="136" viewBox="0 0 159 136" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <motion.circle 
            cx="31" cy="8" r="8" fill="url(#paint0_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.circle 
            cx="71" cy="8" r="8" fill="url(#paint1_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.circle 
            cx="111" cy="8" r="8" fill="url(#paint2_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.circle 
            cx="151" cy="8" r="8" fill="url(#paint3_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
          <motion.circle 
            cx="31" cy="48" r="8" fill="url(#paint4_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.circle 
            cx="31" cy="88" r="8" fill="url(#paint5_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.0,
            }}
          />
          <motion.circle 
            cx="31" cy="128" r="8" fill="url(#paint6_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
          <motion.circle 
            cx="71" cy="48" r="8" fill="url(#paint7_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4,
            }}
          />
          <motion.circle 
            cx="71" cy="88" r="8" fill="url(#paint8_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          />
          <motion.circle 
            cx="71" cy="128" r="8" fill="url(#paint9_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8,
            }}
          />
          <motion.circle 
            cx="111" cy="48" r="8" fill="url(#paint10_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.0,
            }}
          />
          <motion.circle 
            cx="111" cy="88" r="8" fill="url(#paint11_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.2,
            }}
          />
          <motion.circle 
            cx="111" cy="128" r="8" fill="url(#paint12_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.4,
            }}
          />
          <motion.circle 
            cx="151" cy="48" r="8" fill="url(#paint13_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.6,
            }}
          />
          <motion.circle 
            cx="151" cy="88" r="8" fill="url(#paint14_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.8,
            }}
          />
          <motion.circle 
            cx="151" cy="128" r="8" fill="url(#paint15_linear)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.0,
            }}
          />
          <defs>
            <linearGradient id="paint0_linear" x1="21.7305" y1="-1.30982" x2="40.9144" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="61.7305" y1="-1.30982" x2="80.9144" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="101.73" y1="-1.30982" x2="120.914" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="141.73" y1="-1.30982" x2="160.914" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint4_linear" x1="21.7305" y1="38.6902" x2="40.9144" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="21.7305" y1="78.6902" x2="40.9144" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint6_linear" x1="21.7305" y1="118.69" x2="40.9144" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint7_linear" x1="61.7305" y1="38.6902" x2="80.9144" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint8_linear" x1="61.7305" y1="78.6902" x2="80.9144" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint9_linear" x1="61.7305" y1="118.69" x2="80.9144" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint10_linear" x1="101.73" y1="38.6902" x2="120.914" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint11_linear" x1="101.73" y1="78.6902" x2="120.914" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint12_linear" x1="101.73" y1="118.69" x2="120.914" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint13_linear" x1="141.73" y1="38.6902" x2="160.914" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint14_linear" x1="141.73" y1="78.6902" x2="160.914" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint15_linear" x1="141.73" y1="118.69" x2="160.914" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Background circle on the right */}
      <div className="absolute right-[72px] top-[108px] w-[496px] h-[576px] rounded-[80px] bg-neutral-600 opacity-5"></div>

      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-[528px] flex-shrink-0"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="text-[67px] font-bold leading-[80px] text-neutral-900 mb-8 font-asap">
                {teamContent.title}
              </h2>
              <p className="text-base font-normal leading-6 text-neutral-600 font-plus-jakarta">
                {teamContent.description}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Large Team Card */}
          <motion.div 
            className="flex-1 flex justify-center lg:max-w-[640px]"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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

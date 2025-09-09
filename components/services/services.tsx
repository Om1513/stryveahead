'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/container'
import ServiceCard from './service-card'
import ServiceModal from './service-modal'
import { servicesContent } from '@/lib/data/content'
import { SupportAgentIcon, AccountBalanceWalletIcon, TrendingUpIcon, AnalyticsIcon, StorefrontIcon, CampaignIcon, InventoryIcon, GroupsIcon } from './service-icons'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/variants'

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'trending_up':
      return <TrendingUpIcon color="orange" />
    case 'storefront':
      return <StorefrontIcon color="orange" />
    case 'campaign':
      return <CampaignIcon color="orange" />
    case 'inventory':
      return <InventoryIcon color="orange" />
    case 'account_balance_wallet':
      return <AccountBalanceWalletIcon color="orange" />
    case 'analytics':
      return <AnalyticsIcon color="orange" />
    case 'groups':
      return <GroupsIcon color="orange" />
    case 'support_agent':
      return <SupportAgentIcon color="orange" />
    default:
      return null
  }
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesContent.services[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: typeof servicesContent.services[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section 
      className="relative py-24 bg-white overflow-hidden"
      aria-label="Services section"
    >
      {/* Background decorative elements */}
      <div className="absolute -left-[105px] top-[322px] w-[496px] h-[576px] rounded-[80px] bg-paragraph opacity-5" />
      <div className="absolute left-[526px] top-[424px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
      <div className="absolute left-[954px] top-[420px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
      <div className="absolute left-[321px] top-[420px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
      <div className="absolute left-[1177px] top-[618px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />
      <div className="absolute left-[98px] top-[617px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />
      <div className="absolute left-[749px] top-[570px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />

      <Container>
        <div className="relative">
          {/* Header Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 mb-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Title */}
            <motion.div className="lg:max-w-[545px]" variants={staggerItem}>
              <h2 className="font-inter text-[67px] font-bold leading-[80px] text-heading">
                {servicesContent.title}
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.div className="lg:max-w-[661px] lg:ml-auto" variants={staggerItem}>
              <p className="font-inter text-base font-normal leading-6 text-paragraph mt-8">
                {servicesContent.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Services Grid - 4x2 Layout */}
          <motion.div 
            className="relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {servicesContent.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={getServiceIcon(service.icon)}
                  onClick={() => openModal(service)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
        icon={selectedService ? getServiceIcon(selectedService.icon) : null}
      />
    </section>
  )
}

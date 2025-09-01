'use client'

import { useState, useEffect, useCallback } from 'react'
import Container from '@/components/container'
import ServiceCard from './service-card'
import { servicesContent } from '@/lib/data/content'
import { SupportAgentIcon, AccountBalanceWalletIcon, TrendingUpIcon, AnalyticsIcon, StorefrontIcon, CampaignIcon, InventoryIcon, GroupsIcon } from './service-icons'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const getServiceIcon = (iconName: string, color: 'orange' | 'white') => {
  switch (iconName) {
    case 'trending_up':
      return <TrendingUpIcon color={color} />
    case 'storefront':
      return <StorefrontIcon color={color} />
    case 'campaign':
      return <CampaignIcon color={color} />
    case 'inventory':
      return <InventoryIcon color={color} />
    case 'account_balance_wallet':
      return <AccountBalanceWalletIcon color={color} />
    case 'analytics':
      return <AnalyticsIcon color={color} />
    case 'groups':
      return <GroupsIcon color={color} />
    case 'support_agent':
      return <SupportAgentIcon color={color} />
    default:
      return null
  }
}

export default function Services() {
  // State management for service positions - [leftIndex, centerIndex, rightIndex]
  const [serviceOrder, setServiceOrder] = useState([0, 1, 2]) // Default: Sales Strategy, Platform Onboarding, Marketing
  const [isAnimating, setIsAnimating] = useState(false)
  const totalServices = servicesContent.services.length

  // Cycle to next service (circular rolling)
  const handleRollServices = useCallback(() => {
    if (isAnimating) return // Prevent multiple clicks during animation
    
    setIsAnimating(true)
    
    // Roll services: move each position to the next service in the array (circular)
    setServiceOrder(prev => [
      (prev[0] + 1) % totalServices, // left moves to next service
      (prev[1] + 1) % totalServices, // center moves to next service
      (prev[2] + 1) % totalServices  // right moves to next service
    ])
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 600) // Match animation duration
  }, [isAnimating, totalServices])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target === document.body || (e.target as HTMLElement).closest('[data-services-navigation]')) {
        switch (e.key) {
          case 'ArrowLeft':
          case 'ArrowRight':
            e.preventDefault()
            handleRollServices()
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isAnimating, handleRollServices])

  return (
    <section 
      className="relative py-24 bg-white overflow-hidden" 
      data-services-navigation
      aria-label="Services section with interactive navigation"
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
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Title */}
            <div className="lg:max-w-[545px]">
              <h2 className="font-asap text-[67px] font-bold leading-[80px] text-heading">
                {servicesContent.title}
              </h2>
            </div>
            
            {/* Description */}
            <div className="lg:max-w-[661px] lg:ml-auto">
              <p className="font-plus-jakarta text-base font-normal leading-6 text-paragraph mt-8">
                {servicesContent.description}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-0 max-w-[1342px] mx-auto">
              {/* Render services in their current positions */}
              {serviceOrder.map((serviceIndex, position) => {
                const service = servicesContent.services[serviceIndex]
                const positions = ['left', 'center', 'right'] as const
                const currentPosition = positions[position]
                
                return (
                  <ServiceCard
                    key={`${service.id}-${position}`}
                    title={service.title}
                    description={service.description}
                    icon={getServiceIcon(service.icon, currentPosition === 'center' ? 'white' : 'orange')}
                    position={currentPosition}
                    isAnimating={isAnimating}
                  />
                )
              })}
            </div>

            {/* Roll Services Button */}
            <div className="flex justify-center mt-16">
              <Button
                onClick={handleRollServices}
                disabled={isAnimating}
                className={`bg-gradient-hero text-white font-plus-jakarta font-semibold px-6 py-3 rounded-full transition-all duration-200 ease-out shadow-lg focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 flex items-center gap-2 ${
                  isAnimating 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:scale-110 hover:shadow-xl'
                }`}
                aria-label={`Roll services${isAnimating ? ' - animating' : ''}`}
              >
                {isAnimating ? 'Rolling...' : 'Next Service'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Keyboard Navigation Instructions */}
            <div className="flex justify-center mt-6">
              <p className="text-sm text-paragraph/70 font-plus-jakarta">
                Use arrow keys or button to roll services
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

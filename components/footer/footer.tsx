'use client'

import Container from '@/components/container'
import Logo from '@/components/header/logo'
import { footerContent } from '@/lib/data/content'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>('twitter')

  const handleIconHover = (iconId: string) => {
    setHoveredIcon(iconId)
  }

  const handleIconLeave = () => {
    // Keep the last hovered icon state
  }

  const getIconStyles = (iconId: string) => {
    const isHovered = hoveredIcon === iconId
    return {
      container: `flex w-10 h-10 justify-center items-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
        isHovered 
          ? 'bg-gradient-to-br from-orange-600 to-orange-400 hover:scale-105' 
          : 'bg-white hover:scale-105'
      }`,
      stroke: isHovered ? 'white' : '#6A6A6A',
      fill: isHovered ? 'white' : '#6A6A6A'
    }
  }

  return (
    <footer className="bg-soft">
      <Container>
        <div className="flex justify-center items-center py-17">
          <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* Logo */}
            <div className="mb-18">
              <Logo />
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-12 mb-20 flex-wrap justify-center">
              {footerContent.quickLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-paragraph text-center font-asap text-base font-bold leading-6 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-12 mb-20 flex-wrap justify-center">
              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-paragraph font-asap text-base font-normal leading-6 whitespace-nowrap">
                  {footerContent.contact.address.street}, {footerContent.contact.address.city}
                </span>
              </div>

              {/* Phone */}
              <a
                href={`tel:${footerContent.contact.phone}`}
                className="flex items-center gap-2 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
              >
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-paragraph font-asap text-base font-normal leading-6 whitespace-nowrap">
                  {footerContent.contact.phone}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="flex items-center gap-2 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
              >
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-paragraph font-asap text-base font-normal leading-6 whitespace-nowrap">
                  {footerContent.contact.email}
                </span>
              </a>
            </div>

            {/* Company Description */}
            <p className="text-paragraph text-center font-plus-jakarta text-base font-normal leading-6 max-w-[700px]">
              {footerContent.description}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

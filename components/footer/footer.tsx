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

            {/* Social Media Icons */}
            <div className="flex items-center gap-10 mb-20">
              {/* Twitter */}
              <a
                href={footerContent.socialLinks.find(s => s.id === 'twitter')?.href || '#'}
                className={getIconStyles('twitter').container}
                aria-label="Twitter"
                onMouseEnter={() => handleIconHover('twitter')}
                onMouseLeave={handleIconLeave}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3.01006C23 3.01006 20.982 4.20206 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C21 7.23206 20.972 6.95406 20.92 6.68006C21.94 5.67406 23 3.01006 23 3.01006Z"
                    stroke={getIconStyles('twitter').stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={footerContent.socialLinks.find(s => s.id === 'instagram')?.href || '#'}
                className={getIconStyles('instagram').container}
                aria-label="Instagram"
                onMouseEnter={() => handleIconHover('instagram')}
                onMouseLeave={handleIconLeave}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                    stroke={getIconStyles('instagram').stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                    stroke={getIconStyles('instagram').stroke}
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 6.51002L17.51 6.49902"
                    stroke={getIconStyles('instagram').stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={footerContent.socialLinks.find(s => s.id === 'facebook')?.href || '#'}
                className={getIconStyles('facebook').container}
                aria-label="Facebook"
                onMouseEnter={() => handleIconHover('facebook')}
                onMouseLeave={handleIconLeave}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                    stroke={getIconStyles('facebook').stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={footerContent.socialLinks.find(s => s.id === 'youtube')?.href || '#'}
                className={getIconStyles('youtube').container}
                aria-label="YouTube"
                onMouseEnter={() => handleIconHover('youtube')}
                onMouseLeave={handleIconLeave}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 12L10.5 14V10L14 12Z"
                    fill={getIconStyles('youtube').fill}
                    stroke={getIconStyles('youtube').stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12.7069V11.2919C2 8.3969 2 6.9489 2.905 6.0179C3.811 5.0859 5.237 5.0459 8.088 4.9649C9.438 4.9269 10.818 4.8999 12 4.8999C13.181 4.8999 14.561 4.9269 15.912 4.9649C18.763 5.0459 20.189 5.0859 21.094 6.0179C22 6.9489 22 8.3979 22 11.2919V12.7069C22 15.6029 22 17.0499 21.095 17.9819C20.189 18.9129 18.764 18.9539 15.912 19.0339C14.562 19.0729 13.182 19.0999 12 19.0999C10.6958 19.096 9.39163 19.074 8.088 19.0339C5.237 18.9539 3.811 18.9139 2.905 17.9819C2 17.0499 2 15.6019 2 12.7079V12.7069Z"
                    stroke={getIconStyles('youtube').stroke}
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
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

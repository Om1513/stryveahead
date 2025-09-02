'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, CheckCircle } from 'lucide-react'
import { ctaContent } from '@/lib/data/content'
import { fadeInUp, staggerItem } from '@/lib/animations/variants'

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  designation: string
  industry: string
}

export default function CTA() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    industry: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'company', 'designation', 'industry']
    const emptyFields = requiredFields.filter(field => !formData[field as keyof FormData].trim())
    
    if (emptyFields.length > 0) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      // For now, just simulate success - integration will be added later
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage({ type: 'success', text: 'Thank you for your interest! We will get back to you soon.' })
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        industry: ''
      })
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Circular Patterns */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full max-w-[1440px] max-h-[1440px]" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_cta)">
            <motion.circle 
              cx="720" 
              cy="300" 
              r="720" 
              fill="white"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
          <g filter="url(#filter1_d_cta)">
            <motion.circle 
              cx="720" 
              cy="300" 
              r="597.333" 
              fill="white"
              animate={{
                scale: [1, 1.015, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </g>
          <g filter="url(#filter2_d_cta)">
            <motion.circle 
              cx="720" 
              cy="300" 
              r="477.333" 
              fill="white"
              animate={{
                scale: [1, 1.01, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </g>
          <g filter="url(#filter3_d_cta)">
            <motion.circle 
              cx="720" 
              cy="300" 
              r="328" 
              fill="white"
              animate={{
                scale: [1, 1.005, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
          </g>
          <defs>
            <filter id="filter0_d_cta" x="-27" y="-441" width="1542" height="1542" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="24" dy="30"/>
              <feGaussianBlur stdDeviation="25.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_cta"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_cta" result="shape"/>
            </filter>
            <filter id="filter1_d_cta" x="95.6667" y="-318.334" width="1296.67" height="1296.67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="24" dy="30"/>
              <feGaussianBlur stdDeviation="25.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_cta"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_cta" result="shape"/>
            </filter>
            <filter id="filter2_d_cta" x="215.667" y="-198.333" width="1056.67" height="1056.67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="24" dy="30"/>
              <feGaussianBlur stdDeviation="25.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_cta"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_cta" result="shape"/>
            </filter>
            <filter id="filter3_d_cta" x="365" y="-49" width="758" height="758" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="24" dy="30"/>
              <feGaussianBlur stdDeviation="25.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_cta"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_cta" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      
      <Container className="relative z-10">
        {/* Gradient Box */}
        <motion.div 
          className="mx-auto max-w-6xl rounded-2xl bg-gradient-cta shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)] p-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.h2 
            className="text-[67px] font-bold leading-[80px] text-white font-asap mb-6"
            variants={staggerItem}
          >
            {ctaContent.title}
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-white text-base leading-6 font-normal font-plus-jakarta max-w-[844px] mx-auto mb-12"
            variants={staggerItem}
          >
            {ctaContent.description}
          </motion.p>
          
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <Input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="bg-white rounded-xl p-4">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
              
              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number / WhatsApp *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="bg-white rounded-xl p-4">
                  <Input
                    type="text"
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
              
              {/* Row 3: Designation & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <Input
                    type="text"
                    placeholder="Designation / Role *"
                    value={formData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="bg-white rounded-xl p-4">
                  <Input
                    type="text"
                    placeholder="Industry / Sector *"
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-16 px-12 bg-orange-button hover:bg-orange-button/90 text-white font-asap font-semibold text-base leading-6 rounded-2xl shadow-[0_62px_85px_-22px_rgba(0,0,0,0.30)] transition-colors"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    ctaContent.buttonText
                  )}
                </Button>
              </div>
              
              {/* Disclaimer */}
              <p className="text-white/70 text-sm text-center font-plus-jakarta">
                {ctaContent.disclaimer}
              </p>
            </form>
          </div>
          
          {/* Message Display */}
          {message && (
            <div className={`flex items-center justify-center gap-2 text-sm mt-6 transition-all duration-300 animate-in slide-in-from-bottom-2 ${
              message.type === 'success' ? 'text-green-100' : 'text-red-100'
            }`}>
              {message.type === 'success' && <CheckCircle className="h-4 w-4 animate-in zoom-in duration-200" />}
              <span>{message.text}</span>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

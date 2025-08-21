'use client'

import { useState } from 'react'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, CheckCircle } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (data.ok) {
        setMessage({ type: 'success', text: data.message })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: data.error })
      }
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
            <circle cx="720" cy="300" r="720" fill="white"/>
          </g>
          <g filter="url(#filter1_d_cta)">
            <circle cx="720" cy="300" r="597.333" fill="white"/>
          </g>
          <g filter="url(#filter2_d_cta)">
            <circle cx="720" cy="300" r="477.333" fill="white"/>
          </g>
          <g filter="url(#filter3_d_cta)">
            <circle cx="720" cy="300" r="328" fill="white"/>
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
        <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-cta shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)] p-16 text-center">
          {/* Heading */}
          <h2 className="text-[67px] font-bold leading-[80px] text-white font-asap mb-6">
            Let&apos;s Work Together
          </h2>
          
          {/* Description */}
          <p className="text-white text-base leading-6 font-normal font-plus-jakarta max-w-[844px] mx-auto mb-12">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
          
          {/* Email Form */}
          <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex w-[312px] h-16 px-4 items-center bg-white rounded-l-2xl">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent text-paragraph placeholder:text-paragraph font-plus-jakarta text-base leading-6 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-16 px-10 bg-orange-button hover:bg-orange-button/90 text-white font-asap font-semibold text-base leading-6 rounded-r-2xl rounded-l-none shadow-[0_62px_85px_-22px_rgba(0,0,0,0.30)] transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Get Started'
                )}
              </Button>
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
        </div>
      </Container>
    </section>
  )
}

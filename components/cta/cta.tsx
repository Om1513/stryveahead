'use client'

import { useState } from 'react'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, CheckCircle } from 'lucide-react'
import { ctaContent } from '@/lib/data/content'

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
    <section className="py-24 bg-gradient-cta relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-h2 font-bold mb-6 font-poppins">
            {ctaContent.title}
          </h2>
          
          <p className="text-body-lg mb-10 text-orange-50 max-w-xl mx-auto leading-relaxed">
            {ctaContent.description}
          </p>
          
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={ctaContent.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-white border-0 text-neutral-900 placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 rounded-lg transition-all duration-200 focus:scale-[1.02] motion-reduce:transition-none motion-reduce:focus:scale-100"
                    disabled={isLoading}
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-neutral-900 text-white hover:bg-neutral-800 font-semibold px-8 h-12 min-w-[120px] rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {ctaContent.loadingText}
                    </>
                  ) : (
                    ctaContent.buttonText
                  )}
                </Button>
              </div>
              
              {/* Message Display */}
              {message && (
                <div className={`flex items-center justify-center gap-2 text-sm transition-all duration-300 animate-in slide-in-from-bottom-2 ${
                  message.type === 'success' ? 'text-green-100' : 'text-red-100'
                }`}>
                  {message.type === 'success' && <CheckCircle className="h-4 w-4 animate-in zoom-in duration-200" />}
                  <span>{message.text}</span>
                </div>
              )}
            </form>
            
            <p className="text-orange-100 text-sm mt-4">
              {ctaContent.disclaimer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

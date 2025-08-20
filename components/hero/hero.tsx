import { Button } from '@/components/ui/button'
import Container from '@/components/container'
import Image from 'next/image'
import { heroContent } from '@/lib/data/content'

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Semi-transparent white rectangles */}
        <div className="absolute -left-96 -top-2 w-[720px] h-[665px] bg-white/5 rounded-[80px]" />
        <div className="absolute -left-[70px] top-[496px] w-[496px] h-[576px] bg-white/5 rounded-[80px]" />
        <div className="absolute left-[1071px] top-[247px] w-[496px] h-[665px] bg-white/5 rounded-[80px]" />
        
        {/* Dots pattern */}
        <div className="absolute right-10 bottom-32 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => {
            const row = Math.floor(i / 6)
            const col = i % 6
            return (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: `${col * 40}px`,
                  top: `${row * 40}px`,
                }}
              />
            )
          })}
        </div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-[67px] font-bold font-asap mb-8 leading-[1.2] max-w-2xl">
              {heroContent.title}
            </h1>

            <p className="text-base font-plus-jakarta mb-12 text-white leading-[1.5] max-w-lg">
              {heroContent.description}
            </p>

            <Button
              size="lg"
              className="bg-orange-button hover:bg-orange-button/90 text-white font-semibold font-asap px-10 py-4 h-16 rounded-2xl shadow-[0px_62px_85px_-22px_rgba(0,0,0,0.3)]"
            >
              {heroContent.primaryCta}
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:h-[592px] h-[400px] lg:ml-12">
            <div className="absolute inset-0 rounded-2xl shadow-[24px_30px_51px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <Image
                src="/images/hero/dashboard-preview.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

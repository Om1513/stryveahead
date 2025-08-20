import Container from '@/components/container'
import Testimonial from './testimonial'
import { testimonialsContent } from '@/lib/data/content'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-soft overflow-hidden min-h-[940px]">
      <Container>
        {/* Header Content */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-[67px] font-bold text-heading mb-7 font-asap leading-[80px] max-md:text-4xl max-md:leading-tight">
            {testimonialsContent.title}
          </h2>
          <p className="text-paragraph font-plus-jakarta text-base leading-6 max-w-[528px] mx-auto">
            {testimonialsContent.description}
          </p>
        </div>
      </Container>

      {/* Background World Map - Only visible on larger screens */}
      <div className="absolute inset-0 flex items-center justify-center max-md:hidden">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/7e4dad44535bcb7cbd20ca0051317b6312297db2?width=1752"
          alt=""
          width={876}
          height={479}
          className="opacity-60"
          priority={false}
        />
      </div>

      {/* Desktop: Positioned Testimonial Cards */}
      <div className="relative hidden md:block">
        {testimonialsContent.testimonials.map((testimonial) => (
          <Testimonial 
            key={testimonial.id}
            {...testimonial} 
          />
        ))}
      </div>

      {/* Mobile: Simple stacked layout */}
      <div className="md:hidden relative z-10">
        <Container>
          <div className="space-y-6">
            {testimonialsContent.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mx-auto max-w-sm">
                <Testimonial {...testimonial} position="mobile" />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { TestimonialData, TestimonialPosition } from '@/types/testimonials'

interface TestimonialProps extends TestimonialData {
  position: TestimonialPosition
}

export default function Testimonial({ 
  name, 
  role, 
  imageUrl,
  position,
  quote,
  featured = false
}: TestimonialProps) {
  // Position classes based on Figma design - using responsive positioning
  const getPositionClasses = () => {
    if (position === 'mobile') {
      return 'relative w-full'
    }
    
    const positions = {
      'bottom-left': 'absolute xl:left-[21%] xl:top-[49%] lg:left-[15%] lg:top-[55%] md:left-[10%] md:top-[60%]',
      'top-center': 'absolute xl:left-[44.5%] xl:top-[40%] lg:left-[42%] lg:top-[45%] md:left-[40%] md:top-[50%]',
      'bottom-right': 'absolute xl:left-[60.7%] xl:top-[65%] lg:left-[58%] lg:top-[70%] md:left-[55%] md:top-[75%]'
    }
    
    return positions[position]
  }

  const cardWidth = position === 'bottom-right' && featured ? 'w-[444px]' : position === 'mobile' ? 'w-full' : 'w-[232px]'
  const contentGap = featured ? 'gap-6' : 'gap-6'

  return (
    <div className={`${getPositionClasses()} z-20`}>
      <div 
        className={`group inline-flex p-4 items-start gap-4 rounded-2xl bg-white shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)] hover:shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out focus-within:shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)] focus-within:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:focus-within:transform-none motion-reduce:active:transform-none ${cardWidth} max-md:w-full`}
        tabIndex={0}
        role="article"
        aria-label={`Testimonial from ${name}, ${role}`}
      >
        {/* Profile Image */}
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className="rounded-full flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
        />
        
        {/* Content */}
        <div className={`flex flex-col items-start ${contentGap}`}>
          {/* Name and Role */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-heading font-asap text-[21px] font-bold leading-6">
              {name}
            </h3>
            <p className={`font-asap text-base font-semibold leading-6 ${
              featured 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent' 
                : 'text-paragraph'
            }`}>
              {role}
            </p>
          </div>
          
          {/* Quote (only for featured testimonial) */}
          {quote && featured && (
            <p className="max-w-[332px] text-paragraph font-plus-jakarta text-base leading-6">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

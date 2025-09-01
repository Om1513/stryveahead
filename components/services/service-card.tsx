import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  position: 'left' | 'center' | 'right'
  isAnimating?: boolean
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  className,
  position,
  isAnimating = false
}: ServiceCardProps) {
  const isLeftPosition = position === 'left'
  const isRightPosition = position === 'right'
  const isCenter = position === 'center'

  return (
    <div 
      className={cn(
        'relative w-full transition-all motion-reduce:transition-none',
        // All cards have the same height for proper alignment at inner edges
        'h-[350px]',
        isAnimating ? 'duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]' : 'duration-300 ease-out',
        // Position-based styling - butterfly structure with center smaller and sides bigger
        position === 'left' && 'opacity-85 scale-125 translate-x-4',
        position === 'center' && 'opacity-100 scale-90 translate-x-0 z-10',
        position === 'right' && 'opacity-85 scale-125 -translate-x-4',
        className
      )}
      aria-label={`${title} service - ${position} position`}
    >
      {/* Card Background */}
      {isCenter ? (
        <div className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-hero transition-all duration-200 ease-out",
          "shadow-[32px_38px_65px_0_rgba(0,0,0,0.15)]"
        )} />
      ) : (
        <svg 
          className="absolute inset-0 w-full h-full transition-all duration-200 ease-out drop-shadow-[24px_30px_51px_rgba(0,0,0,0.10)]" 
          viewBox="0 0 490 350" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d={isLeftPosition 
              ? "M490 25C490 15 485 0 475 0L20 20C10 22 0 30 0 40V310C0 320 10 328 20 330L475 350C485 350 490 335 490 325V25Z"
              : "M0 25C0 15 5 0 15 0L470 20C480 22 490 30 490 40V310C490 320 480 328 470 330L15 350C5 350 0 335 0 325V25Z"
            }
            fill="white"
          />
        </svg>
      )}

      {/* Content Container */}
      <div className={cn(
        'absolute flex flex-col items-center transition-all duration-200 ease-out',
        isCenter 
          ? 'inset-x-[50px] inset-y-[50px] text-center text-white'
          : isRightPosition
            ? 'right-[20px] top-[60px] w-[350px] text-right text-heading'
            : 'left-[20px] top-[60px] w-[350px] text-left text-heading'
      )}>
        {/* Icon */}
        <div className={cn(
          'flex items-center justify-center mb-6 transition-transform duration-200 ease-out',
          isCenter ? 'w-16 h-16' : 'w-16 h-16',
          isRightPosition ? 'ml-auto' : isCenter ? 'mx-auto' : 'mr-auto',
          position === 'center' && 'scale-110'
        )}>
          {icon}
        </div>

        {/* Text Content */}
        <div className={cn(
          'w-full transition-all duration-200 ease-out',
          isCenter ? 'text-center' : isRightPosition ? 'text-right' : 'text-left'
        )}>
          <h3 className={cn(
            'font-asap font-bold leading-8 mb-[14px] transition-colors duration-200 ease-out',
            isCenter ? 'text-[26px] text-white' : 'text-[24px] text-heading'
          )}>
            {title === 'Strategic Advisory & Retainership' && !isCenter ? (
              <>
                Strategic Advisory &<br />Retainership
              </>
            ) : title === 'Marketing & Conversion Strategy' && !isCenter ? (
              <>
                Marketing & Conversion<br />Strategy
              </>
            ) : (
              title
            )}
          </h3>
          <p className={cn(
            'font-plus-jakarta font-normal leading-6 transition-colors duration-200 ease-out',
            isCenter ? 'text-base text-white' : 'text-sm text-paragraph'
          )}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  variant?: 'default' | 'featured'
  className?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  variant = 'default',
  className 
}: ServiceCardProps) {
  const isDefault = variant === 'default'
  const isFeatured = variant === 'featured'

  return (
    <div 
      className={cn(
        'relative w-full',
        isFeatured ? 'h-[336px]' : 'h-[464px]',
        className
      )}
    >
      {/* Card Background */}
      {isFeatured ? (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F25227] via-[#F25227] to-[#E8AA29] shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)]" />
      ) : (
        <svg 
          className="absolute inset-0 w-full h-full drop-shadow-[24px_30px_51px_rgba(0,0,0,0.10)]" 
          viewBox="0 0 490 562" 
          fill="none"
        >
          <path 
            d={isDefault 
              ? "M415 37.5595C415 27.7843 406.312 20.294 396.643 21.734L40.643 74.7559C32.8032 75.9235 27 82.655 27 90.5813V405.423C27 413.255 32.6689 419.935 40.396 421.21L396.396 479.931C406.141 481.539 415 474.021 415 464.145V37.5595Z"
              : "M27 37.5595C27 27.7843 35.6885 20.294 45.357 21.734L401.357 74.7559C409.197 75.9235 415 82.655 415 90.5813V405.423C415 413.255 409.331 419.935 401.604 421.21L45.604 479.931C35.8595 481.539 27 474.021 27 464.145V37.5595Z"
            }
            fill="white"
          />
        </svg>
      )}

      {/* Content Container */}
      <div className={cn(
        'absolute flex flex-col items-center',
        isFeatured 
          ? 'inset-x-[53px] inset-y-[56px] text-center text-white'
          : title === 'Safety Compliance'
            ? 'right-[56px] top-[120px] w-[277px] text-right text-heading'
            : 'left-[55px] top-[120px] w-[277px] text-left text-heading'
      )}>
        {/* Icon */}
        <div className={cn(
          'w-16 h-16 flex items-center justify-center mb-6',
          title === 'Safety Compliance' ? 'ml-auto' : isFeatured ? 'mx-auto' : 'mr-auto'
        )}>
          {icon}
        </div>

        {/* Text Content */}
        <div className={cn(
          'w-full',
          isFeatured ? 'text-center' : title === 'Safety Compliance' ? 'text-right' : 'text-left'
        )}>
          <h3 className={cn(
            'font-asap text-[28px] font-bold leading-8 mb-[14px]',
            isFeatured ? 'text-white' : 'text-heading'
          )}>
            {title}
          </h3>
          <p className={cn(
            'font-plus-jakarta text-base font-normal leading-6',
            isFeatured ? 'text-white' : 'text-paragraph'
          )}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

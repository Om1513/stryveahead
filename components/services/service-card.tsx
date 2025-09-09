import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  className,
  onClick
}: ServiceCardProps) {
  return (
    <div 
      className={cn(
        'relative w-full h-[300px] bg-white rounded-2xl shadow-lg',
        'transition-all duration-300 ease-out',
        'hover:scale-105 hover:shadow-xl hover:-translate-y-2',
        'cursor-pointer group',
        className
      )}
      aria-label={`${title} service`}
      onClick={onClick}
    >
      {/* Card Background */}
      <div className="absolute inset-0 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-out group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)]" />

      {/* Content Container */}
      <div className="relative flex flex-col items-center text-center p-8 h-full">
        {/* Icon */}
        <div className="w-full flex items-center justify-center mb-6 transition-transform duration-300 ease-out group-hover:scale-110">
          <div className="w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col">
          {/* Title - Fixed height for consistency */}
          <div className="h-[56px] flex items-center justify-center mb-4">
            <h3 className="font-inter text-xl font-bold leading-7 text-heading transition-colors duration-300 ease-out text-center whitespace-pre-line">
              {title}
            </h3>
          </div>
          
          {/* Description - Starts from same baseline */}
          <div className="flex-1 flex items-start justify-center">
            <p className="font-inter text-sm font-normal leading-6 text-paragraph transition-colors duration-300 ease-out text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

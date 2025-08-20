import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg' | 'full'
}

export default function Container({ 
  children, 
  className, 
  size = 'default' 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl',
    sm: 'max-w-4xl',
    lg: 'max-w-8xl',
    full: 'max-w-none',
  }

  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}

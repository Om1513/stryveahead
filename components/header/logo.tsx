import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center gap-2 text-xl font-bold font-poppins text-neutral-900 hover:scale-105 transition-all duration-200 motion-reduce:transition-none motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm hover:-translate-y-0.5',
        className
      )}
      aria-label="Finanxe - Home"
    >
      {/* Logo Icon - Using a simple F icon for now, can be replaced with actual logo */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
        F
      </div>
      
      {/* Logo Text */}
      <span className="text-lg sm:text-xl font-semibold tracking-tight">
        Finanxe
      </span>
    </Link>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center gap-4 transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm',
        className
      )}
      aria-label="StryveAhead - Home"
    >
      <Image
        src="/images/logo/logo.png"
        alt="StryveAhead Advisors Logo"
        width={400}
        height={120}
        className="h-20 w-auto"
        priority
      />
    </Link>
  )
}

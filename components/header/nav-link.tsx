import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavigationItem } from '@/types/navigation'
import type { MouseEventHandler } from 'react'

interface NavLinkProps {
  item: NavigationItem
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  isActive?: boolean
}

export default function NavLink({
  item,
  className,
  onClick,
  isActive = false
}: NavLinkProps) {
  const baseClasses = cn(
    'relative inline-flex items-center gap-2 font-asap text-[16px] font-bold leading-[24px] transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md',
    'bg-gradient-to-br from-[#F25227] to-[#E8AA29] bg-clip-text text-transparent',
    'hover:from-[#F25227] hover:to-[#E8AA29]',
    isActive && 'font-extrabold',
    className
  )

  if (item.isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        <span>{item.label}</span>
      </a>
    )
  }

  const linkProps = onClick ? { onClick } : {}

  return (
    <Link
      href={item.href}
      className={baseClasses}
      {...linkProps}
    >
      <span>{item.label}</span>
    </Link>
  )
}

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
    'relative inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md hover:-translate-y-0.5',
    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500 after:scale-x-0 after:transition-transform after:duration-200 after:motion-reduce:transition-none hover:after:scale-x-100',
    isActive && 'text-neutral-900 after:scale-x-100',
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
        {item.label}
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
      {item.label}
    </Link>
  )
}

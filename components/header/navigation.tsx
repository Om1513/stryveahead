import { cn } from '@/lib/utils'
import NavLink from './nav-link'
import { navigationItems } from '@/lib/navigation'

interface NavigationProps {
  className?: string
  currentPath?: string | undefined
}

export default function Navigation({ className, currentPath = '/' }: NavigationProps) {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F25227" />
            <stop offset="100%" stopColor="#E8AA29" />
          </linearGradient>
        </defs>
      </svg>
      <nav
        className={cn('hidden sm:flex items-center gap-10', className)}
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            isActive={currentPath === item.href}
          />
        ))}
      </nav>
    </>
  )
}

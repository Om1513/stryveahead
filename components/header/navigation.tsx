import { cn } from '@/lib/utils'
import NavLink from './nav-link'
import { navigationItems } from '@/lib/navigation'

interface NavigationProps {
  className?: string
  currentPath?: string | undefined
}

export default function Navigation({ className, currentPath = '/' }: NavigationProps) {
  return (
    <nav 
      className={cn('hidden sm:flex items-center space-x-1', className)}
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
  )
}

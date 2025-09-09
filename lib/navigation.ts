import type { NavigationItem } from '@/types/navigation'

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
]

export const loginItem: NavigationItem = {
  label: 'Login',
  href: '/login'
}

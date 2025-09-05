'use client'

import { useEffect } from 'react'
import type { MouseEventHandler } from 'react'
import { X, Menu } from 'lucide-react'
import FocusTrap from 'focus-trap-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import NavLink from './nav-link'
import { navigationItems } from '@/lib/navigation'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  className?: string
  currentPath?: string | undefined
}

export default function MobileMenu({ 
  isOpen, 
  setIsOpen, 
  className,
  currentPath = '/'
}: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, setIsOpen])

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          'sm:hidden relative z-[60] w-10 h-10',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div className="relative w-5 h-5">
          <Menu 
            className={cn(
              'absolute inset-0 w-5 h-5 transition-all duration-[250ms]',
              isOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
            )}
          />
          <X 
            className={cn(
              'absolute inset-0 w-5 h-5 transition-all duration-[250ms] motion-reduce:transition-none',
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
            )}
          />
        </div>
      </Button>

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-[200ms] motion-reduce:transition-none sm:hidden z-[100]',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <FocusTrap active={isOpen}>
        <div
          id="mobile-menu"
          className={cn(
            'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-[300ms] motion-reduce:transition-none ease-out sm:hidden z-[110]',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 -ml-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </Button>
            <span className="text-lg font-semibold font-inter text-neutral-900 flex-1 text-center -ml-10">
              Menu
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="py-6" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-1 px-6">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  onClick={handleLinkClick}
                  isActive={currentPath === item.href}
                  className="w-full justify-start text-base py-3 px-4 after:hidden hover:bg-neutral-50 rounded-md transition-all duration-200 hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:translate-x-0"
                />
              ))}
            </div>
          </nav>
        </div>
      </FocusTrap>
    </>
  )
}

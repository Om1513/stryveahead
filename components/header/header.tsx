'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import Logo from './logo'
import Navigation from './navigation'
import MobileMenu from './mobile-menu'

interface HeaderProps {
  className?: string
  currentPath?: string | undefined
}

export default function Header({ className, currentPath }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full bg-white backdrop-blur-[9px] h-20',
        className
      )}
    >
      <div className="flex items-center justify-between h-full px-6 sm:px-12 lg:px-[98px]">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <Navigation currentPath={currentPath} />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          currentPath={currentPath}
        />
      </div>
    </header>
  )
}

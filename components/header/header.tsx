'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import Container from '@/components/container'
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
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 supports-[backdrop-filter]:bg-white/80',
        className
      )}
    >
      <Container className="h-header-mobile sm:h-header-desktop">
        <div className="flex items-center justify-between h-full">
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
      </Container>
    </header>
  )
}

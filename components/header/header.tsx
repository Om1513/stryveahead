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
        'fixed inset-x-0 top-0 z-[50] w-full bg-white backdrop-blur-[9px] h-20 border-b border-gray-100',
        className
      )}
    >
      <div className="flex items-center justify-between h-full px-6 sm:px-12 lg:pl-[235px] lg:pr-[98px]">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className='lg:pl-[350px]'>
        <Navigation />
        </div>
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

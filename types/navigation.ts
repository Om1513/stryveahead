export interface NavigationItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface MobileMenuState {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

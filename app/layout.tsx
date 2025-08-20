import type { Metadata } from 'next'
import { Inter, Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import { Asap } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const asap = Asap({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-asap',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Finanxe - Driving Financial Growth Through Our Expertise and Passion',
  description: 'Professional financial services company specializing in wealth preservation and growth. Expert financial advisory with 20+ years of experience.',
  keywords: ['financial services', 'wealth management', 'financial advisory', 'investment planning'],
  authors: [{ name: 'Finanxe' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${asap.variable} ${plusJakartaSans.variable}`}>
      <body className="font-inter antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}

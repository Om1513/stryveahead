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
  title: 'StryveAhead - Scale Your Brand Across Q-Commerce, E-Commerce & Modern Trade',
  description: 'Your trusted partner for scaling brands across Q-Commerce, E-Commerce, and Modern Trade. We specialise in helping brands establish strong presence, optimise operations, and achieve long-term growth.',
  keywords: ['q-commerce', 'e-commerce', 'modern trade', 'brand scaling', 'growth intelligence', 'brand advisory'],
  authors: [{ name: 'StryveAhead Advisors' }],
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

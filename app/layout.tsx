import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import ImagePreloader from '@/components/image-preloader'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
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
  // Define critical images to preload
  const criticalImages = [
    '/images/hero/home.jpg',
    '/images/about/teamwork.jpg',
    '/images/team/Utpal.jpg',
    '/images/logo/logo.png',
    '/images/clients/arata.jpg',
    '/images/clients/arcatron.jpg',
    '/images/clients/bbetter.jpg',
    '/images/clients/indic.png',
    '/images/clients/mcaffeiene.png',
    '/images/clients/minifeel.png',
    '/images/clients/noto.png',
    '/images/clients/orionz.jpg',
    '/images/clients/scandalous.jpg',
    '/images/clients/twf.png',
    '/images/clients/uppeel.jpg',
    '/images/clients/vanitywagon.jpg',
  ]

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero/home.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/about/teamwork.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/team/Utpal.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/logo/logo.png" as="image" type="image/png" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://api.builder.io" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://api.builder.io" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">
        <ImagePreloader images={criticalImages} />
        <Header />
        {children}
      </body>
    </html>
  )
}

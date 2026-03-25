import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: 'Twist - The Dessert Shop | Premium Desserts in Faisalabad',
    template: '%s | Twist - The Dessert Shop'
  },
  description: 'Experience the finest handcrafted desserts at Twist - The Dessert Shop in Faisalabad, Pakistan. Indulge in our signature cakes, pastries, gelato, and more.',
  keywords: ['dessert shop', 'cakes', 'pastries', 'gelato', 'Faisalabad', 'Pakistan', 'sweet shop', 'bakery', 'cafe'],
  authors: [{ name: 'Twist - The Dessert Shop' }],
  creator: 'Twist - The Dessert Shop',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://twistdesserts.pk',
    siteName: 'Twist - The Dessert Shop',
    title: 'Twist - The Dessert Shop | Premium Desserts in Faisalabad',
    description: 'Experience the finest handcrafted desserts at Twist - The Dessert Shop in Faisalabad, Pakistan.',
    images: [
      {
        url: '/images/hero-dessert.jpg',
        width: 1200,
        height: 630,
        alt: 'Twist - The Dessert Shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twist - The Dessert Shop | Premium Desserts in Faisalabad',
    description: 'Experience the finest handcrafted desserts at Twist - The Dessert Shop in Faisalabad, Pakistan.',
    images: ['/images/hero-dessert.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#e91e8c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

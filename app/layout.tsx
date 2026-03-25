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
    default: 'Zhadae\'s | Artisanal Cheesecakes in Logan, Australia',
    template: '%s | Zhadae\'s'
  },
  description: 'Discover creamy, indulgent artisanal cheesecakes at Zhadae\'s in Logan, Australia. Available in 6 delicious flavors - Lotus, Banofee, Oreo, Peanut Butter, Strawberry & White Chocolate Raspberry.',
  keywords: ['cheesecake', 'artisanal cheesecake', 'dessert shop', 'Logan', 'Australia', 'sweet treats', 'lotus cheesecake', 'banofee', 'oreo cheesecake'],
  authors: [{ name: 'Zhadae\'s' }],
  creator: 'Zhadae\'s',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://zhadaes.com.au',
    siteName: 'Zhadae\'s',
    title: 'Zhadae\'s | Artisanal Cheesecakes in Logan, Australia',
    description: 'Discover creamy, indulgent artisanal cheesecakes at Zhadae\'s in Logan, Australia.',
    images: [
      {
        url: '/images/hero-dessert.jpg',
        width: 1200,
        height: 630,
        alt: 'Zhadae\'s - Artisanal Cheesecakes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhadae\'s | Artisanal Cheesecakes in Logan, Australia',
    description: 'Discover creamy, indulgent artisanal cheesecakes at Zhadae\'s in Logan, Australia.',
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

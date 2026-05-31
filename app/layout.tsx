import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vision-logistics.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vision Logistics | Operational Intelligence',
    template: '%s | Vision Logistics',
  },
  description:
    'AI-powered automation, computer vision, and predictive intelligence for modern logistics and enterprise operations.',
  keywords: [
    'logistics AI',
    'operational intelligence',
    'computer vision',
    'predictive analytics',
    'Vision Logistics',
  ],
  authors: [{ name: 'Vision Logistics' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Vision Logistics',
    title: 'Vision Logistics | Operational Intelligence',
    description:
      'Intelligent systems that let organizations see, understand, and predict operations in real time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision Logistics | Operational Intelligence',
    description:
      'Intelligent systems that let organizations see, understand, and predict operations in real time.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <div className="relative min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

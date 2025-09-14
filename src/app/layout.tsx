import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huguen - Hospitality Technology Solutions & Digital Presence',
  description: 'Delhi-based full-stack solution firm dedicated exclusively to the hospitality sector. We create digital platforms that enhance guest experiences and drive revenue for hotels, resorts, villas, and homestays.',
  keywords: 'hospitality technology, hotel website, booking engine, payment gateway, digital marketing, hotel management system, channel manager, SEO for hotels',
  authors: [{ name: 'Huguen' }],
  creator: 'Huguen',
  publisher: 'Huguen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://huguen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Huguen - Hospitality Technology Solutions & Digital Presence',
    description: 'Delhi-based full-stack solution firm dedicated exclusively to the hospitality sector. We create digital platforms that enhance guest experiences and drive revenue for hotels, resorts, villas, and homestays.',
    url: 'https://huguen.com',
    siteName: 'Huguen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Huguen - Hospitality Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huguen - Hospitality Technology Solutions & Digital Presence',
    description: 'Delhi-based full-stack solution firm dedicated exclusively to the hospitality sector. We create digital platforms that enhance guest experiences and drive revenue for hotels, resorts, villas, and homestays.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFB300" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Huguen",
              "description": "Delhi-based full-stack solution firm dedicated exclusively to the hospitality sector. We create digital platforms that enhance guest experiences and drive revenue for hotels, resorts, villas, and homestays.",
              "url": "https://huguen.com",
              "telephone": "+91-XXXXXXXXXX",
              "email": "info@huguen.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "serviceType": [
                "Custom Hotel Websites",
                "Hospitality Management Systems",
                "Payment Engine Integration",
                "Channel Manager Setup",
                "Cloud & Data Solutions",
                "Branding & Digital Marketing"
              ],
              "areaServed": "India",
              "industry": "Hospitality Technology"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Italian Grappa Culture — Il Distillato dell\'Anima Italiana',
  description:
    'Portale informativo sulla grappa italiana: storia, tradizioni, cultura distillatoria e patrimonio enogastronomico d\'Italia. Sito puramente informativo, nessuna vendita.',
  keywords: [
    'grappa italiana',
    'distillato d\'uva',
    'cultura della grappa',
    'tradizione distillatoria',
    'grappa doc',
    'vinacce',
    'birra artigianale italiana',
    'bevande italiane',
  ],
  authors: [{ name: 'Italian Grappa Culture' }],
  creator: 'Italian Grappa Culture',
  publisher: 'Italian Grappa Culture',
  metadataBase: new URL('https://italiangrappaculture.com'),
  alternates: {
    canonical: '/',
    languages: {
      'it-IT': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://italiangrappaculture.com',
    siteName: 'Italian Grappa Culture',
    title: 'Italian Grappa Culture — Il Distillato dell\'Anima Italiana',
    description:
      'Portale informativo sulla grappa italiana: storia, tradizioni, cultura distillatoria e patrimonio enogastronomico.',
    images: [
      {
        url: '/images/hero-grappa.jpg',
        width: 1200,
        height: 630,
        alt: 'Vigneti italiani al tramonto',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f3ec',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="bg-background">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

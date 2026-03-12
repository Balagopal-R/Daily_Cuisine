import type { Metadata, Viewport } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Daily Cuisine - Premium Frozen Chicken | Export Quality Poultry Products',
  description:
    'Daily Cuisine is a trusted frozen poultry supplier based in India, specializing in whole chicken, premium cuts, and ready-to-cook products. Export-quality poultry products for HORECA, distributors, and global markets.',
  keywords: [
    'frozen chicken',
    'poultry export',
    'frozen poultry India',
    'chicken supplier',
    'HORECA poultry',
    'frozen food distributor',
  ],
}

export const viewport: Viewport = {
  themeColor: '#0B1F3B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

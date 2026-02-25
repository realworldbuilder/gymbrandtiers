import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Product Tier List',
  description: 'Drag and drop to rank products in a tier list',
  openGraph: {
    title: 'Product Tier List',
    description: 'Drag and drop to rank products in a tier list',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary font-mono antialiased">
        {children}
      </body>
    </html>
  )
}

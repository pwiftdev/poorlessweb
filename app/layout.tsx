import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://poorless.com'),
  title: '$POORLESS - Get Rich or Meme Trying',
  description: 'Get rich or meme trying. Be $POORLESS. Join the movement where poverty becomes history.',
  icons: {
    icon: '/assets/poorlesslogo.png',
    apple: '/assets/poorlesslogo.png',
  },
  openGraph: {
    title: '$POORLESS - Get Rich or Meme Trying',
    description: 'Get rich or meme trying. Be $POORLESS.',
    images: ['/assets/poorlesslogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$POORLESS - Get Rich or Meme Trying',
    description: 'Get rich or meme trying. Be $POORLESS.',
    images: ['/assets/poorlesslogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


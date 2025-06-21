import './globals.css'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Tejas Pokale',
  description: 'My Personal Website',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='rubik vsc-initialized'>
        {children}
      </body>
      <GoogleAnalytics gaId="G-NF5MRK9L7Y" />
    </html>
  )
}
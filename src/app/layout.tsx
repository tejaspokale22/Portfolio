import './globals.css'
import type { Metadata } from 'next'

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
    </html>
  )
}
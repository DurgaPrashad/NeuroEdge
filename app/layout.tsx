import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Neuro edge',
=======
  title: 'v0 App',
>>>>>>> d6247b412074b0b441e7a2bbc9ec1772245fe2b1
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

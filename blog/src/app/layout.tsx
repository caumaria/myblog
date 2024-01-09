import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Food & Health Blog',
  description: 'Food and Health Blog with tips and recepies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

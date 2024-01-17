import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'clgpt-ai',
  description: 'clgpt-ai - @cilions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="https://avatars.githubusercontent.com/cilions" />
      <body>{children}</body>
    </html>
  )
}

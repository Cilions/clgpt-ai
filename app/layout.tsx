import './globals.css'
import type { Metadata } from 'next'

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
      <link rel="icon" href="https://avatars.githubusercontent.com/Cilions" />
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <body>{children}</body>
    </html>
  )
}

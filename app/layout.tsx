import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { Providers } from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL('https://ai.cilions.co'),
  title: 'ai.cilions.co',
  openGraph: {
    title: 'ai.cilions.co',
    url: 'https://ai.cilions.co',
    siteName: 'ai.cilions.co',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="https://avatars.githubusercontent.com/cilions" />
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

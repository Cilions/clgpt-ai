'use client'

import Link from 'next/link'
import { useChat } from 'ai/react'
import Script from 'next/script'

export default function Chat() {
  const { version } = require('@/package.json')
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <>
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

      {messages.length > 0
        ? messages.map(m => (
            <pre key={m.id}>
              {m.role === 'user' ? 'You: ' : 'clgpt-ai: '}
              {m.content}
            </pre>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Message clgpt..."
          onChange={handleInputChange}
        />
      </form>
      <div style={{ marginTop: '1rem' }}>
        <pre style={{ margin: '0rem' }}>
          <Link href="https://platform.openai.com">OpenAi API</Link> - gpt-3.5-turbo
        </pre>
        <pre style={{ margin: '0rem' }}>
          v{version} - <Link href="https://cilions.icu">@cilions</Link> ❤︎‬
        </pre>
      </div>
    </>
  )
}
'use client'

import Link from 'next/link'
import { useChat } from 'ai/react'
import styles from './page.module.css'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className={styles.container}>
      {messages.length > 0
        ? messages.map(m => (
            <div key={m.id}>
              {m.role === 'user' ? 'You: ' : 'clgpt-ai: '}
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      <p className={styles.info}>
        Author <Link href="https://cilions.icu">@cilions</Link> - clgpt-ai doesn&apos;t collect any data
      </p>
    </div>
  )
}
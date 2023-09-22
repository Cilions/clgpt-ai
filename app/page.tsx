'use client'

import Link from 'next/link'
import { useChat } from 'ai/react'
import styles from './page.module.css'
import packageJson from '../package.json';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className={styles.container}>
      {messages.length > 0
        ? messages.map(m => (
            <div className={styles.chat} key={m.id}>
              {m.role === 'user' ? 'You: ' : 'clgpt-ai: '}
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={input}
          placeholder="Temporarily unavailable"
          onChange={handleInputChange}
          disabled
        />
      </form>
      <div style={{ marginTop: '1rem' }}>
        <p className={styles.info}>
          <Link href="https://platform.openai.com">OpenAi API</Link> - gpt-3.5-turbo
        </p>
        <p className={styles.info}>
          contact: <Link href="mailto:cilions@pm.me">cilions@pm.me</Link> - <Link href="https://cilions.icu">@cilions</Link>
        </p>
        <p className={styles.info}>
          v{packageJson.version}
        </p>
      </div>
    </div>
  )
}
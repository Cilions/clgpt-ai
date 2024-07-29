"use client"

import Link from "next/link"
import { useChat } from "ai/react"
import { useSession } from "next-auth/react"
import { version } from "@/package.json";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { data: session } = useSession();

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      maxWidth: "800px",
      margin: "0 auto",
      padding: "1rem"
    }}>
      <p style={{ textAlign: "center" }}>Signed in as {session?.user?.name}</p>
      
      <div style={{ 
        flex: 1, 
        overflowY: "auto", 
        marginBottom: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "1rem"
      }}>
        {messages.length > 0 && messages.map(m => (
          <div key={m.id} style={{ marginBottom: "1rem" }}>
            <strong>{m.role === 'user' ? 'You: ' : 'clgpt-ai: '}</strong>
            {m.content}
          </div>
        ))}
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
      }}>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginBottom: "1rem" }}>
          <input
            value={input}
            placeholder="Message clgpt..."
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </form>
        <div style={{ textAlign: "center" }}>
          <Link href="https://platform.openai.com">OpenAi API</Link> - gpt-3.5-turbo
          v{version} - <Link href="https://cilions.co">@cilions</Link> ❤︎ ‬
          <a href="/api/auth/signout">Sign out</a>
        </div>
      </div>
    </div>
  )
}
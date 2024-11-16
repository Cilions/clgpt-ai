"use client"

import Link from "next/link"
import { useChat } from "ai/react"
import { useSession } from "next-auth/react"
import { version } from "@/package.json";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { data: session } = useSession();

  return (
    <div className="flex flex-col max-w-2xl mx-auto p-4">
      <p className="text-center">Signed in as {session?.user?.name}</p>
      
      <div className="flex-1 overflow-y-auto mb-4 rounded p-4">
        {messages.length > 0 && messages.map(m => (
          <div key={m.id} className="mb-4">
            <strong>{m.role === 'user' ? 'You: ' : 'clgpt-ai: '}</strong>
            {m.content}
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full mb-4">
          <input
            value={input}
            placeholder="Message clgpt..."
            onChange={handleInputChange}
            className="w-full p-2"
          />
        </form>
        <div className="text-center">
          <Link href="https://platform.openai.com">OpenAi API</Link> - gpt-3.5-turbo
          v{version} - <Link href="https://cilions.co">@cilions</Link> ❤︎ ‬
          <Link href="/api/auth/signout">Sign out</Link>
        </div>
      </div>
    </div>
  )
}
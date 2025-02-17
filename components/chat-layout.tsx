"use client"

import Link from "next/link"
import { useChat } from "ai/react"
import { useSession } from "next-auth/react"
import { useState } from "react"

export default function ChatLayout() {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedModel, setSelectedModel] = useState('gpt-4o')

  const { messages, input, handleInputChange, handleSubmit: handleChatSubmit } = useChat({
    api: '/api/chat',
    body: {
      model: selectedModel,
    },
  })

  const models = [
    { value: 'gpt-4o', label: 'GPT-4o' },
    { value: 'claude-3.5-sonnet', label: 'Claude 3.5 Sonnet' }
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleChatSubmit(e)
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl">AISW</h1>
          <span className="text-gray-400">Your Gateway to Multiple AI Models</span>
        </div>
        
        <div className="flex items-center gap-6">
          <select 
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded"
          >
            {models.map(model => (
              <option key={model.value} value={model.value}>
                {model.label}
              </option>
            ))}
          </select>
          
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded"
            >
              {session?.user?.name} →
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <Link 
                  href="/api/auth/signout"
                  className="block px-4 py-2 text-blue-600 hover:bg-gray-50 rounded-lg"
                >
                  Log out →
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map(m => (
            <div 
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-lg break-words whitespace-pre-wrap ${
                  m.role === 'user' 
                    ? 'bg-gray-100' 
                    : 'bg-blue-50'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              value={input}
              placeholder="Type your message..."
              onChange={handleInputChange}
              className="flex-1 px-4 py-2 bg-gray-50 focus:outline-none focus:bg-gray-100 rounded"
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              Send →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
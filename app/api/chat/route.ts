import { generateText, streamText } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { openai } from '@ai-sdk/openai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages, model }: { messages: Message[], model: string } = await req.json()

  let response;
  if (model.startsWith('gpt')) {
    response = await generateText({
      model: openai(model),
      prompt: messages.map(message => message.content).join('\n')
    })
  } else if (model.startsWith('claude')) {
    response = await generateText({
      model: anthropic(model),
      prompt: messages.map(message => message.content).join('\n')
    })
  } else {
    return new Response('Unsupported model', { status: 400 })
  }

  const stream = streamText({ ...response, model: model.startsWith('gpt') ? openai(model) : anthropic(model) })

  return stream.toDataStreamResponse()
}
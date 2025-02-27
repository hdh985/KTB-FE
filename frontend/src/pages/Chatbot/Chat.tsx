import { Text5xl } from '@/components/Texts'
import Answer from './Answer'
import Question from './Question'
import ChatForm from './ChatForm'
import { useEffect, useRef, useState } from 'react'
import axios from 'node_modules/axios'

interface ChatMessage {
  type: 'question' | 'answer'
  data: string
}

interface ChatHistory {
  id: number
  question: string
  answer: string
}

type ChatProps = {
  url: string
}

export default function Chat({ url }: ChatProps) {
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'answer', data: '안녕하세요! 저는 챗봇 AI 약속이예요. 무엇이 궁금하신가요?' },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(`${url}/history`, {
          withCredentials: true,
        })
        const history: ChatHistory[] | null = response.data
        
        if (history && Array.isArray(history) && history.length > 0) {
          const sortedHistory = [...history].sort((a, b) => a.id - b.id)
          
          const historyMessages: ChatMessage[] = []
          sortedHistory.forEach((item) => {
            historyMessages.push({ type: 'question', data: item.question })
            historyMessages.push({ type: 'answer', data: item.answer })
          })
          
          setMessages([
            { type: 'answer', data: '안녕하세요! 저는 챗봇 AI 약속이예요. 무엇이 궁금하신가요?' },
            ...historyMessages
          ])
        }
      } catch (error) {
        console.error('대화 내역을 불러오는 중 오류가 발생했습니다:', error)
      }
    }
    fetchChatHistory()
  }, [url])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleInputChange = (value: string) => {
    setValue(value)
  }

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return

    const newQuestion: ChatMessage = { type: 'question', data: text }
    setMessages((prev) => [...prev, newQuestion])

    setValue('')
    setIsLoading(true)

    try {
      const response = await axios.post(`${url}`, { question: text })
      const newAnswer: ChatMessage = { type: 'answer', data: response.data.answer }
      setMessages((prev) => [...prev, newAnswer])
    } catch (error) {
      console.error('서버에 메시지를 보내는 중 오류가 발생했어요:', error)

      const errorMessage: ChatMessage = {
        type: 'answer',
        data: '죄송합니다. 응답을 받는 중 문제가 생겼어요. 다시 시도해주세요.',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container center flex-col h-full gap-3 py-5">
      <Text5xl className="mb-3">무엇이든 물어보세요!</Text5xl>
      <div className="flex flex-col w-full h-full p-10 rounded-lg bg-black gap-5 overflow-y-auto">
        <div className="flex flex-col w-full gap-5">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'question' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="w-2/3">
                {message.type === 'question' ? <Question data={message.data} /> : <Answer data={message.data} />}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="w-2/3">
                <Answer data="답변을 찾는 중이에요..." />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatForm
        value={value}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

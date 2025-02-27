import Chat from './Chat'

export default function ChatbotPage() {
  return (
    <section className="wrap">
      <Chat url={'/api/chatbot'} />
    </section>
  )
}

const chatInputLayout = 'w-full h-32 p-5 rounded-t-xl resize-none'
const chatInputSytle = 'bg-white border-2 border-b-0 focus:border-myLightGreen focus:outline-none'
const chatInputText = 'text-2xl'
const chatClassName = `${chatInputLayout} ${chatInputSytle} ${chatInputText}`

const buttonLayout = 'w-full h-12 rounded-b-xl'
const buttonStyle = 'bg-myLightGreen hover:bg-myHoverLightGreen border border-t-0'
const buttonText = 'text-2xl text-white font-medium'
const buttonClassName = `${buttonLayout} ${buttonStyle} ${buttonText}`

interface ChatFormProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (text: string) => void
}

export default function ChatForm({ value, onChange, onSubmit }: ChatFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col"
    >
      <textarea
        placeholder="무엇이 궁금하신가요?"
        className={chatClassName}
        value={value}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={buttonClassName}
        disabled={!value.trim() || value.trim().length < 2}
      >
        전송하기
      </button>
    </form>
  )
}

const AnswerLayout = 'w-full rounded-tl-3xl rounded-r-3xl px-8 py-5'
const AnswerStyle = 'bg-white drop-shadow-md'
const AnswerText = 'text-2xl'
const AnswerClassName = `${AnswerLayout} ${AnswerStyle} ${AnswerText}`

type AnswerProps = {
  data: string
}

export default function Answer({ data }: AnswerProps) {
  return <div className={AnswerClassName}>{data}</div>
}

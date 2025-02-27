const QuestionLayout = 'w-full rounded-l-3xl rounded-tr-3xl px-8 py-5'
const QuestionStyle = 'bg-myLightGreen drop-shadow-md'
const QuestionText = 'text-2xl text-white'
const QuestionClassName = `${QuestionLayout} ${QuestionStyle} ${QuestionText}`

type QuestionProps = {
  data: string
}

export default function Question({ data }: QuestionProps) {
  return <div className={QuestionClassName}>{data}</div>
}

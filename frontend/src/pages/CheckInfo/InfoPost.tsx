import { Text5xl } from '@/components/Texts'
import Card from './Card'
import { RedirectButton } from '@/components/Button'

type InfoPostProps = {
  url: string
}

export default function InfoPost({ url }: InfoPostProps) {
  return (
    <div className="container center flex-col gap-5">
      <Text5xl className="leading-[1.2]">
        입력한 정보를
        <br />
        최종 확인해 주세요.
      </Text5xl>
      <div className="center flex-col gap-10">
        <Card url={`${url}`} />
        <div className="center gap-3">
          <RedirectButton
            path="info/input/name"
            name="수정하기"
            className="w-2/3"
          />
          <RedirectButton
            path="chatbot"
            name="챗봇에게 질문하기"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  )
}

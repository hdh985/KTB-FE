import { RedirectButton } from '@/components/Button'
import { Title } from '@/components/Texts'

export default function Hero() {
  return (
    <div className="container center flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <Title>약속시간</Title>
        <div className="text-xl font-semibold text-myDarkGray">나를 위한 맞춤형 복약 관리 서비스</div>
      </div>
      <RedirectButton
        path="info/input/name"
        name="시작하기"
        className="w-96 h-14 text-2xl"
      />
    </div>
  )
}

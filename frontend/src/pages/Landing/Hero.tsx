import { RedirectButton } from '@/components/Button'
import { Title } from '@/components/Texts'
import { useEffect } from 'react'
import axios from 'axios'

export default function Hero() {
  useEffect(() => {
    const initSession = async () => {
      try {
        const response = await axios.get('/api', {
          withCredentials: true
        })
        console.log('세션 초기화 성공:', response.data)
      } catch (error) {
        console.error('세션 초기화 실패:', error)
      }
    }
    initSession()
  }, [])
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

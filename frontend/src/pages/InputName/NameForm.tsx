import { Text5xl } from '@/components/Texts'
import { APIButton } from '../../components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'

type NameFormProps = {
  url: string
}

export default function NameForm({ url }: NameFormProps) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${url}`, {
          withCredentials: true,
        })

        if (response.data && response.data.name) {
          setValue(response.data.name)
        }
      } catch (error) {
        console.error('사용자 데이터 불러오기 실패:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUserData()
  }, [])

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setValue(value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const isValueValid = value.trim().length > 0

  // if (loading) return <div className="container center">로딩 중...</div>

  return (
    <div className="container center flex-col gap-10">
      <Text5xl>이름을 입력해 주세요.</Text5xl>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-96 gap-3"
      >
        <input
          placeholder="홍길동"
          className="text-2xl text-center w-full h-16 bg-white border-2 focus:border-myLightGreen focus:outline-none"
          type="text"
          value={value}
          onChange={onChange}
          required
        />
        <APIButton
          url={`${url}`}
          path="info/input/age"
          name="다음"
          data={{ name: value }}
          method="PATCH"
          disabled={!isValueValid}
        />
      </form>
    </div>
  )
}

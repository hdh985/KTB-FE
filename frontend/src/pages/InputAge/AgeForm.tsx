import { Text5xl } from '@/components/Texts'
import { APIButton } from '../../components/Button'
import { useEffect, useState } from 'react'
import axios from 'node_modules/axios'

const InputLayout = "text-2xl text-center w-full h-16 bg-white border-2 focus:border-myLightGreen focus:outline-none"
const InputExcept = "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
const InputClassName = `${InputLayout} ${InputExcept}`

type AgeFormProps = {
  url: string
}

export default function AgeForm({ url }: AgeFormProps) {
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
    if (Number(value) > 0 && Number(value) <= 100) {
      setValue(value)
    } else {
      alert("1~100 사이의 값을 입력해 주세요.")
      // setValue('')
    }
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const isValueValid = value.trim().length > 0

  // if (loading) return <div className="container center">로딩 중...</div>

  return (
    <div className="center flex-col gap-10">
      <Text5xl>나이를 입력해 주세요.</Text5xl>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-96 gap-3"
      >
        <input
          placeholder="숫자만 입력해 주세요."
          className={InputClassName}
          type="number"
          min="1"
          max="100"
          step="1"
          value={value}
          onChange={onChange}
          required
        />
        <APIButton
          url={`${url}`}
          path="info/input/gender"
          name="다음"
          data={{ age: value }}
          method="PATCH"
          disabled={!isValueValid}
        />
      </form>
    </div>
  )
}

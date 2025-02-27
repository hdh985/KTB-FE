import { Text5xl } from '@/components/Texts'
import { APIButton, RedirectButton } from '../../components/Button'

type GenderFormProps = {
  url: string
}

const path = 'info/input/medicine'

export default function GenderForm({ url }: GenderFormProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="center flex-col gap-10">
      <Text5xl>성별을 선택해 주세요.</Text5xl>
      <form
        onSubmit={onSubmit}
        className="flex w-96 gap-5"
      >
        <div className="flex justify-center w-full">
          <APIButton
            url={`${url}`}
            path={path}
            name="남자"
            className="w-full h-16 text-2xl"
            data={{ gender: 'm' }}
            method={'PATCH'}
          />
        </div>
        <div className="flex justify-center w-full">
          <APIButton
            url={`${url}`}
            path={path}
            name="여자"
            className="w-full h-16 text-2xl"
            data={{ gender: 'f' }}
            method={'PATCH'}
          />
        </div>
      </form>
    </div>
  )
}

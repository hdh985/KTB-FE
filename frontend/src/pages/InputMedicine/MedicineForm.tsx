import { Text5xl } from "@/components/ui/Texts"

const inputLayout = "w-full h-16 p-10"
const inputStyle = "border-4 rounded-lg focus:border-myLightGreen focus:outline-none"
const inputText = "text-2xl"
const inputClassName = `${inputLayout} ${inputStyle} ${inputText}`

export default function MedicineForm() {
  return (
    <div className="container center flex-col gap-10">
      <Text5xl>복용 중인 약품들을<br/>검색하여 추가해 주세요.</Text5xl>
      <input
      className={inputClassName}
      placeholder="약품명을 입력해 주세요."
      />
      <div>

      </div>
    </div>
  )
}
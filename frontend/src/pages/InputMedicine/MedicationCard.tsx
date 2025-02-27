import { Text2xl } from '@/components/Texts'
import { Medication } from './MedicationType'

const inputStyle = 'border-2 bg-white focus:border-myLightGreen focus:outline-none'
const inputText = 'text-2xl text-center'
const inputLayout = 'w-full h-12 flex-1'
const InputExcept =
  '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
const inputClassName = `${inputLayout} ${inputStyle} ${inputText} ${InputExcept}`

const CardLayout = 'w-[500px] center flex-col px-10 py-12 gap-5'
const CardStyle = 'rounded-3xl bg-white drop-shadow-lg'
const CardText = 'text-left'
const CardClassName = `${CardLayout} ${CardStyle} ${CardText}`

interface MedicationCardProps {
  medication: Medication
  onChange: (updatedMedicine: Medication) => void
  onAdd: () => void
}

export default function MedicationCard({ medication, onChange, onAdd }: MedicationCardProps) {
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...medication, type: e.target.value })
  }

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...medication, day: e.target.value })
  }

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...medication, frequency: e.target.value })
  }

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (medication.type.trim() !== '') {
      onAdd()
    }
  }

  return (
    <div className={CardClassName}>
      <div className="center flex-col gap-2">
        <div className="flex w-full gap-3">
          <Text2xl className="flex items-center justify-center">약품명</Text2xl>
          <input
            placeholder="약품명을 입력해 주세요."
            className={inputClassName}
            type="text"
            value={medication.type}
            onChange={handleTypeChange}
          />
        </div>
        <div className="flex center w-full gap-3">
          <input
            placeholder="몇"
            className={inputClassName}
            type="number"
            min={1}
            value={medication.day}
            onChange={handleDayChange}
          />
          <Text2xl className="flex items-center justify-center">일에</Text2xl>
          <input
            placeholder="몇"
            className={inputClassName}
            type="number"
            min={1}
            value={medication.frequency}
            onChange={handleFrequencyChange}
          />
          <Text2xl className="flex items-center justify-center">번 먹는다.</Text2xl>
        </div>
      </div>
      <button
        onClick={handleAddClick}
        className="w-full bg-white text-myLightGreen hover:text-myHoverLightGreen text-xl font-semibold"
        disabled={medication.type.trim() === ''}
      >
        추가
      </button>
    </div>
  )
}

import { APIButton } from '@/components/Button'
import { Text5xl } from '@/components/Texts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MedicationCard from './MedicationCard'
import { Medication } from './MedicationType'

type MedicationFormProps = {
  url: string
}

export default function MedicationForm({ url }: MedicationFormProps) {
  const [loading, setLoading] = useState(true)
  const [currentMedication, setCurrentMedication] = useState<Medication>({ type: '', day: '', frequency: '' })
  const [savedMedications, setSavedMedications] = useState<Medication[]>([])
  const [medicationTags, setMedicationTags] = useState<string[]>([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${url}`, {
          withCredentials: true,
        })
        if (response.data && response.data.medications) {
          setSavedMedications(response.data.medications)

          const tags = response.data.medications.map((med: Medication) => med.type)
          setMedicationTags(tags)
        }
      } catch (error) {
        console.error('사용자 데이터 불러오기 실패:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUserData()
  }, [url])

  const handleMedicationChange = (updatedMedication: Medication) => {
    setCurrentMedication(updatedMedication)
  }

  const handleAddMedicationTag = () => {
    if (
      currentMedication.type.trim() !== '' &&
      currentMedication.day.trim() !== '' &&
      currentMedication.frequency.trim() !== '' &&
      !medicationTags.includes(currentMedication.type)
    ) {
      setMedicationTags([...medicationTags, currentMedication.type])
      setSavedMedications([...savedMedications, { ...currentMedication }])
      setCurrentMedication({ type: '', day: '', frequency: '' })
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setMedicationTags(medicationTags.filter((tag) => tag !== tagToRemove))
    setSavedMedications(savedMedications.filter((med) => med.type !== tagToRemove))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  
  const apiData = {
    medications: JSON.stringify(savedMedications),
    total: savedMedications.length.toString(),
  }

  return (
    <div className="container center flex-col gap-10">
      <Text5xl className="leading-[1.2]">
        복용하고 있는 약들을
        <br />
        추가해 주세요.
      </Text5xl>
      <form
        onSubmit={onSubmit}
        className="center flex-col w-96 gap-3"
      >
        <MedicationCard
          medication={currentMedication}
          onChange={handleMedicationChange}
          onAdd={handleAddMedicationTag}
        />

        {medicationTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {medicationTags.map((tag, index) => (
              <div
                key={index}
                className="bg-myLightGreen text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-white hover:text-red-200"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <APIButton
          url={`${url}`}
          path={'info/check'}
          name={'다음 단계로 이동'}
          data={apiData}
          method={'PATCH'}
          className="w-full"
        />
      </form>
    </div>
  )
}

import GenderForm from './GenderForm'

export default function InputGenderPage() {
  return (
    <div className="wrap">
      <GenderForm url={'/api/gender'} />
    </div>
  )
}

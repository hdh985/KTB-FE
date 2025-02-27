import AgeForm from './AgeForm'

export default function InputAgePage() {
  return (
    <div className="wrap">
      <AgeForm url={'/api/age'} />
    </div>
  )
}

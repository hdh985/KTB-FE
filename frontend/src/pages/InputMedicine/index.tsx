import MedicationForm from './MedicationForm'

export default function InputMedicinePage() {
  return (
    <section className="wrap">
      <MedicationForm url={'api/medications'} />
    </section>
  )
}

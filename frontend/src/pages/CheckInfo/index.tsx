import InfoPost from './InfoPost'

export default function CheckInfoPage() {
  return (
    <section className="wrap">
      <InfoPost url={'/api/personal-info'} />
    </section>
  )
}

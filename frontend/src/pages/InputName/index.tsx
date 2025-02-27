import NameForm from "@/pages/InputName/NameForm";


export default function InputNamePage() {
    return (
        <section className="wrap">
            <NameForm url={"/api/name"}/>
        </section>
    )
}
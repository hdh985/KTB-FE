import { Text5xl } from "@/components/ui/Texts";
import { APIButton } from "../../components/ui/Button";

export default function GenderForm() {
    const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className="center flex-col gap-10">
            <Text5xl>성별을 선택해 주세요.</Text5xl>
            <form 
            onSubmit={onSubmit}
            className="flex w-80 gap-5">
                <div className="flex justify-center w-full">
                    <APIButton
                    url={"api/gender"}
                    path={"info/input/medicine"}
                    name="남자"
                    className="w-full"
                    data={{gender: "m"}}
                    method={"PATCH"}
                    />
                </div>
                <div className="flex justify-center w-full">
                    <APIButton
                    url={"api/gender"}
                    path={"info/input/medicine"}
                    name="여자"
                    className="w-full"
                    data={{gender: "f"}}
                    method={"PATCH"}
                    />
                </div>
            </form>
        </div>
    )
}
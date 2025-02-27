import { Text5xl } from "@/components/ui/Texts";
import Card from "./Card";
import { RedirectButton } from "@/components/ui/Button";

export default function InfoPost() {
    return (
        <div className="container center flex-col gap-5">
            <Text5xl>입력한 정보를<br/>최종 확인해 주세요.</Text5xl>
            <div className="center flex-col gap-10">
                <Card path={"/api/medications"}/>
                <div className="center gap-3">
                    <RedirectButton
                    path="info/input/name"
                    name="수정하기"
                    className="w-full"
                    />
                    <RedirectButton
                    path="chatbot"
                    name="챗봇에게 질문하기"
                    className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}
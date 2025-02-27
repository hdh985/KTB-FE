import { RedirectButton } from "@/components/ui/Button"
import { Title } from "@/components/ui/Texts"

export default function Hero() {
    return (
        <div className="container center flex-col gap-10">
            <div className="flex flex-col justify-center items-center gap-3">
                <Title>약속시간</Title>
                <div className="text-xl font-semibold">
                    LLM 기반 복약 관리 웹서비스
                </div>
            </div>
            <RedirectButton
            path="info/input/name"
            name="시작하기"
            className="w-80"
            />
        </div>
    )
}
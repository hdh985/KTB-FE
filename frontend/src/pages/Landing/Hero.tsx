import LandingButton from "./LandingButton"

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="text-8xl font-bold">
                    약속시간
                </div>
                <div className="text-xl font-semibold">
                    LLM 기반 복약 관리 웹서비스
                </div>
            </div>
            <LandingButton/>
        </div>
    )
}
import { useRouter } from 'next/router'

export default function StaticRoutingPage() {
    const router = useRouter()
    // 위를 라우터 객체라 부른다. 왜냐면 router. 점이 붙으니까!

    const onClickMove = () => {
        router.push("/05-02-static-routed")
    }

    return (
        <button onClick={onClickMove}>페이지 이동하기</button>

    )
}
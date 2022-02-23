import { useRouter } from "next/router";
import Link from "next/link";
export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    <div>
      <button onClick={onClickMoveToMap}>맵으로 이동하기!!</button>
      {/* <a href="/29-03-kakao-map-routed">맵으로 이동하기!!</a> */}
      {/* <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기!!</a>
      </Link> */}
    </div>
  );
}
// <a>태그 vs router
// a 태그의 기능의 경우, MPA로, 새로고침이나 새로운 페이지를 부르는 방식과 같이 다시 서버에 요청하는 방식이다. 성능 안조아 CSR방식
// router : SPA 싱글페이지어플리케이션으로 한번에 모든 페이지들을 다운받고, 다른 페이지로 이동할때, 있었던 페이지를 감추고 새로 이동하는 페이지를 보여준다. SSR방식

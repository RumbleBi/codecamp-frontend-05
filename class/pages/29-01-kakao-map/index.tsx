import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    // DOM에서 마운트가 다 된후에 실행하도록 하는것이 좋다. 왜??
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  const aaa = {
    width: 500,
    height: 400,
  }; // 스타일 자체에 {}로 감싸는 JSX 방식과, aaa 객체를 생성해 넣는 {} 두개가 필요하다.
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322" // 어짜피 카카오 도메인 설정에서 로컬3000에만 해놨으니 빼가도 쓸 의미가 없다.
          // 하지만 불안하다면 프론트말고 백에서 키를 저장해, 우리가 요청하는 방식으로 하는것이 좋다.
        ></script>
        ;
      </Head>
      <div id="map" style={aaa}></div>
    </div>
  );
}

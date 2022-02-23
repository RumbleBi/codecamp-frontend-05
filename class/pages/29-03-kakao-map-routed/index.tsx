import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322&autoload=false"; // 쿼리 스트링 객체 형태로 스트링을 써서 보내는것. 객체를 쓸수없는 상황일때 쓴다. & 로 구분!
    document.head.appendChild(script);

    script.onload = () => {
      // 다운받은 스크립트가 온로드 되면 ~ 함수안을 실행해줘!
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
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

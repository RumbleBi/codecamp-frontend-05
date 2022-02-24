import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322?&autoload=false?&libraries=services,clusterer,drawing"; // 쿼리 스트링 객체 형태로 스트링을 써서 보내는것. 객체를 쓸수없는 상황일때 쓴다. & 로 구분!
    document.head.appendChild(script);

    script.onload = () => {
      // 다운받은 스크립트가 온로드 되면 ~ 함수안을 실행해줘!
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOptions = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도 확대 레벨
          };
        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOptions);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          "서울시 성북구 종암로 24가길 80",
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래장소</div>',
              });
              infowindow.open(map, marker);
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
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
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322&autoload=false?&libraries=services,clusterer,drawing" // 어짜피 카카오 도메인 설정에서 로컬3000에만 해놨으니 빼가도 쓸 의미가 없다.
          // 하지만 불안하다면 프론트말고 백에서 키를 저장해, 우리가 요청하는 방식으로 하는것이 좋다.
        ></script>
        ;
      </Head>
      <div id="map" style={aaa}></div>
    </div>
  );
}

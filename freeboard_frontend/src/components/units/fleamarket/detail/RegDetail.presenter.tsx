import Button01 from "../../../commons/buttons/01";
import * as S from "./RegDetail.styles";
import Dompurify from "dompurify";
//
import Head from "next/head";
import { useEffect } from "react";
//
declare const window: typeof globalThis & {
  kakao: any;
};
//
export default function RegDetailUI(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322?&autoload=false?&libraries=services,clusterer,drawing"; // 쿼리 스트링 객체 형태로 스트링을 써서 보내는것. 객체를 쓸수없는 상황일때 쓴다. & 로 구분!
    document.head.appendChild(script);

    script.onload = () => {
      // 다운받은 스크립트가 온로드 되면 ~ 함수안을 실행해줘!
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOptions = {
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress.lat,
            props.data?.fetchUseditem.useditemAddress.lng
          ), // 지도의 중심좌표 33.450701, 126.570667
          level: 3, // 지도 확대 레벨
        };
        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOptions);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다
        console.log(props);
        geocoder.addressSearch(
          props.data?.fetchUseditem?.useditemAddress?.address,
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
  }, [props.data]);

  const aaa = {
    width: 500,
    height: 400,
  }; // 스타일 자체에 {}로 감싸는 JSX 방식과, aaa 객체를 생성해 넣는 {} 두개가 필요하다.
  return (
    <S.Position>
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
          <S.CreatedAt>
            {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
          </S.CreatedAt>
        </S.ProfileWrapper>
        <S.UseditemDetailWrapper>
          <S.Remarks>{props.data?.fetchUseditem?.remarks}</S.Remarks>
          {process.browser ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(
                  String(props.data?.fetchUseditem?.contents)
                ),
              }}
            ></S.Contents>
          ) : (
            <div />
          )}
          <S.Price>{props.data?.fetchUseditem?.price}</S.Price>
          <S.ImageWrapper>
            {props.data?.fetchUseditem?.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
        </S.UseditemDetailWrapper>
        {props.myPick === true ? (
          <S.PickitemBtnCancel onClick={props.onClickMyPick}>
            찜취소
          </S.PickitemBtnCancel>
        ) : (
          <S.PickitemBtn onClick={props.onClickMyPick}>찜하기</S.PickitemBtn>
        )}
        <S.Zipcode>
          {props.data?.fetchUseditem?.useditemAddress?.zipcode}
        </S.Zipcode>
        <S.Address>
          {props.data?.fetchUseditem?.useditemAddress?.address}
        </S.Address>
        <S.AddressDetail>
          {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
        </S.AddressDetail>
        <S.KakaoMapWrapper>
          <Head>
            <script
              type="text/javascript"
              src="//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322&autoload=false?&libraries=services,clusterer,drawing"
            ></script>
            ;
          </Head>
          <div id="map" style={aaa}></div>
        </S.KakaoMapWrapper>
        <S.ButtonWrapper>
          {props.data?.fetchUserLoggedIn._id ===
          props.data?.fetchUseditem._id ? (
            <form onSubmit={props.handleSubmit(props.onClickMoveToMain)}>
              <Button01 isValid={props.formState?.isValid} name={"목록으로"} />
            </form>
          ) : (
            <form onSubmit={props.handleSubmit(props.onClickBuyUseditem)}>
              <Button01 isValid={props.formState?.isValid} name={"구입하기"} />
            </form>
          )}
          <form onSubmit={props.handleSubmit(props.onClickMoveToEdit)}>
            <Button01 isValid={props.formState?.isValid} name={"수정하기"} />
          </form>
          <form onSubmit={props.handleSubmit(props.onClickDeleteUseditem)}>
            <Button01 isValid={props.formState?.isValid} name={"삭제하기"} />
          </form>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Position>
  );
}

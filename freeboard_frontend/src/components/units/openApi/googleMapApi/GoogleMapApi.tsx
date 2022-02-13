import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const WrapperText = styled.div`
  font-size: 40px;
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  color: #ffd400;
`;

const MapWrapper = styled.div`
  /* overflow: hidden; 넘치면 가려주는 기능 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 5vh;
`;

function GoogleMapApi(props: any) {
  console.log(GoogleMapApi);
  return (
    <Wrapper>
      <WrapperText>과천 경마장 위치</WrapperText>
      <MapWrapper>
        <Map
          style={{ height: "70%", width: "50%" }}
          google={props.google}
          zoom={15}
          initialCenter={{ lat: 37.4475605397222, lng: 127.0156228165134 }}
          loaded={true}
        >
          <Marker
            position={{ lat: 37.4475605397222, lng: 127.0156228165134 }}
          />
        </Map>
      </MapWrapper>
    </Wrapper>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAx67Fy71fEWAOSFNUjfmsimCkbs8ynyqQ",
})(GoogleMapApi);

import styled from "@emotion/styled";
import { Fragment } from "react";
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 80vh;
`;

const MainVideo = styled.video`
  width: 50vw;
  height: 60vh;
`;

const MainWord = styled.div`
  padding: 3vh 0;
  font-size: 38px;
  color: #ffd400;
`;

export default function HomePage() {
  return (
    <Fragment>
      <HomeWrapper>
        <MainWord>오늘의 베스트 동영상</MainWord>
        <MainVideo src="/video/SanChaKu.mp4" autoPlay={true} controls={true} />
      </HomeWrapper>
    </Fragment>
  );
}

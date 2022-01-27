import ReactPlayer from "react-player";
import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  height: 200vh;
  margin-top: 5%;
  margin-right: 3vw;
  margin-bottom: 5%;
  font-family: AppleFontKO;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 140vh;
  margin-top: 5%;
  margin-bottom: 5%;
  border: 1px solid black;
  border: none;
  box-shadow: 0px 0px 10px gray;
  font-family: AppleFontKO;
`;
export const Header = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 3vh;
  width: 100%;
`;
export const HeaderForm = styled.div`
  display: flex;
`;
// 상단 아이콘들 정리할 시간
export const HeaderInfo = styled.div``;
export const HeaderAvatarIcon = styled.img``;
export const HeaderFormWriter = styled.div``;
export const HeaderFormCreateAt = styled.div``;
export const HeaderLocationIcon = styled.img``;
export const HeaderLinkIcon = styled.img``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const BodyTitle = styled.div`
  font-size: 32px;
  padding-top: 5vh;
  padding-left: 3vw;
  padding-right: 3vw;
`;
export const BodyContents = styled.div`
  height: 60vh;
  margin-top: 3vh;
  padding-top: 2vh;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 18px;
`;

export const BodyYoutube = styled(ReactPlayer)``;

export const BodyLikeIcon = styled.img`
  margin-bottom: 2vh;
  margin-left: 41.5vw;
`;
export const BodyDislikeIcon = styled.img`
  margin-bottom: 2vh;
  margin-left: 3vw;
`;

export const BodyWrapperCount = styled.div`
  display: flex;
`;

export const BodyLikeCount = styled.span`
  margin-right: 43vw;
  font-size: 18px;
`;

export const BodyDislikeCount = styled.span`
  margin-left: 42vw;
  font-size: 18px;
`;

export const BodyButtonWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BodyButton = styled.button`
  width: 14vw;
  height: 7vh;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  margin: 0px 4vw;
  font-size: 20px;
  :hover {
    border: 1px solid black;
    background-color: #ffd400;
`;

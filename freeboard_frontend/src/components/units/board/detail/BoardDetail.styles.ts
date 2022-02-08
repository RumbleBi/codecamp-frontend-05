import ReactPlayer from "react-player";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 200vh;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  border: 1px solid black;
  border: none;
  box-shadow: 0px 0px 10px gray;
  font-family: AppleFontKO;
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 1vh;
  padding-bottom: 1vh;
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderAvatarIcon = styled.img`
  margin-left: 2vw;
  margin-right: 2vw;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeaderFormWriter = styled.div``;

export const HeaderFormCreateAt = styled.div``;

export const IconWrapper = styled.div`
  text-align: center;
  padding-right: 2vw;
`;

export const HeaderLocationIcon = styled.img``;

export const HeaderLinkIcon = styled.img`
  padding-right: 2vw;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 1000px;
`;

export const BodyTitle = styled.div`
  margin-top: 1vh;
  font-size: 42px;
  margin-left: 3vw;
`;
export const BodyContents = styled.div`
  height: 50vh;
  margin-top: 3vh;
  padding-top: 3vh;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 24px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
`;

export const YoutubeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const BodyYoutube = styled(ReactPlayer)``; // 유튜브이슈

export const BodyReactWrapper = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BodyLikeIcon = styled.img`
  margin-right: 1.5vw;
  :hover {
    cursor: pointer;
  }
`;
export const BodyDislikeIcon = styled.img`
  margin-left: 1.5vw;
  :hover {
    cursor: pointer;
  }
`;

export const BodyWrapperCount = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
`;

export const BodyLikeCount = styled.span`
  margin-right: 2vw;
  font-size: 22px;
  :hover {
    cursor: auto;
`;

export const BodyDislikeCount = styled.span`
  font-size: 22px;
  margin-left: 2vw;
`;

export const BodyButtonWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`;
export const BodyButton = styled.button`
  width: 14vw;
  height: 7vh;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  margin: 0vh 4vw;
  font-size: 20px;
  :hover {
    border: 1px solid black;
    background-color: #ffd400;
    cursor: pointer;
`;

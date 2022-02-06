import ReactPlayer from "react-player";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 170vh;
  margin-top: 5%;
  margin-bottom: 5%;
  border: 1px solid black;
  border: none;
  box-shadow: 0px 0px 10px gray;
  font-family: AppleFontKO;
`;
export const Header = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 1vh;
  width: 85vw;
`;
export const HeaderForm = styled.span`
  background-color: blue;
  flex-
`;
export const HeaderAvatarIcon = styled.img`
  margin-left: 10vw;
`;
export const HeaderLocationIcon = styled.img`
  margin-left: 50vw;
`;
export const HeaderLinkIcon = styled.img``;

export const HeaderFormWriter = styled.span`
  font-size: 24px;
`;
export const HeaderFormCreateAt = styled.span`
  font-size: 24px;
`;

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
  height: 30vh;
  margin-top: 3vh;
  padding-top: 2vh;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 18px;
`;

export const YoutubeWrapper = styled.div`
  margin-top: 65vh;
`;
export const BodyYoutube = styled(ReactPlayer)``; // 유튜브이슈

export const BodyReactWrapper = styled.div`
  margin-top: 10vh;
`;
export const BodyLikeIcon = styled.img`
  margin-bottom: 2vh;
  margin-left: 41.5vw;
  :hover {
    cursor: pointer;
  }
`;
export const BodyDislikeIcon = styled.img`
  margin-bottom: 2vh;
  margin-left: 3vw;
  :hover {
    cursor: pointer;
  }
`;

export const BodyWrapperCount = styled.div`
  display: flex;
  margin-top: 1vh;
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

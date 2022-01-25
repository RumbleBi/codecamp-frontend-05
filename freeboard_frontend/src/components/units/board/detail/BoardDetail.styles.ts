import ReactPlayer from "react-player";
import styled from "@emotion/styled";

export const Page = styled.div`
  height: 1600px;
  margin: 100px;
  background-color: yellow;
`;
export const Wrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  background-color: green;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  width: 100%;
`;
export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderAvatarIcon = styled.img``;

export const HeaderFormWriter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeaderFormCreateAt = styled.div``;
export const Body = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: blue;
`;

export const HeaderLocationIcon = styled.img``;
export const HeaderLinkIcon = styled.img``;

export const BodyTitle = styled.div`
  font-size: 40px;
  padding-top: 80px;
`;
export const BodyContents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BodyYoutube = styled(ReactPlayer)`
  margin: auto;
`;

export const BodyLikeIcon = styled.img``;
export const BodyLikeCount = styled.div``;
export const BodyDislikeIcon = styled.img``;
export const BodyDislikeCount = styled.div``;

export const BodyButtonWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BodyButton = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  margin: 0px 20px;
  :hover {
    background-color: #ffd400;
    border-color: #ffd400;
`;

export const Bottom = styled.div``;

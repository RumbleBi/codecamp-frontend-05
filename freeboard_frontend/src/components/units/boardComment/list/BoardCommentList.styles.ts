import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 80vw;
  height: 25vh;
  margin-bottom: 3vh;
  border-bottom: 1px solid gray;
  background-color: red;
`;

export const CommentAvatarIcon = styled.img`
padding-right
`;

export const WrapperComment = styled.div``;

export const Comment = styled.div``;

export const WriterWrapper = styled.span`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
`;

export const CommentWriter = styled.span`
  /* font-size: 20px;
  font-weight: bold; */
`;
export const CommentStar = styled(Rate)`
  /* padding-left: 20px; */
`;

export const CommentCreatedAt = styled.div`
  /* color: red; */
`;

export const CommentPencilIcon = styled.img`
  padding-left: 75vw;
  cursor: pointer;
`;

export const CommentDeleteIcon = styled.img`
  padding-left: 1.5vw;
  cursor: pointer;
  :hover {
    image-color: #ffd400;
  }
`;

export const CommentListWrapper = styled.div`
  /* height: 20vh;
  overflow: auto;
  width: 40vw; */
`;
export const CommentListInfo = styled.span``;

// ----------------------------------
export const PasswordInput = styled.input``;

export const CommentOptionWrapper = styled.div``;

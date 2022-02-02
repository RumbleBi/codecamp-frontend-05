import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vh;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid gray;
`;

export const CommentAvatarIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const WrapperComment = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const Comment = styled.input``;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentWriter = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const CommentCreatedAt = styled.div`
  color: red;
`;

export const CommentPencilIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CommentDeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CommentListWrapper = styled.div`
  height: 20vh;
  overflow: auto;
  width: 40vw;
`;
export const CommentListInfo = styled.span``;

// ----------------------------------
export const PasswordInput = styled.input``;

export const CommentOptionWrapper = styled.div``;

export const CommentStar = styled(Rate)`
  padding-left: 20px;
`;

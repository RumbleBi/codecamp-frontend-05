import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  min-height: 10vh;
  background-color: #ff5c8d;
  color: #524a4e;
`;

export const Wrapper2 = styled(Wrapper)`
  border-bottom: 1px solid #524a4e;
  display: flex;
  justify-content: space-between;
`;

export const QuestionWrapper = styled.div``;

export const Name = styled.div``;

export const Contents = styled.div`
  margin-left: 1vw;
`;

export const ChangeButton = styled.button`
  width: 100px;
  hegiht: 20px;
  margin-right: 1vw;
`;

export const CommentWrapper = styled.div`
  width: 100%;
`;

export const CommentAnswerWrapper = styled.div`
  height: auto;
  min-height: 10vh;
`;

export const DeleteButton = styled.button`
  width: 100px;
  hegiht: 20px;
`;

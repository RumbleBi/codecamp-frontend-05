import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const PencilIcon = styled.img``;

export const TEXT = styled.span``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputWriterPassword = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid gray;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: none;
  border-bottom: 1px solid gray;
`;

export const ContentsInfo = styled.div`
  width: 100%;
  height: 50px;
  color: gray;
`;

export const ContentsBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  cursor: pointer;
`;

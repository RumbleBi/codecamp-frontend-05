import styled from "@emotion/styled";
import { Rate } from "antd";
export const Wrapper = styled.div`
  width: 90vw;
  height: 10vh;
`;

export const PencilIcon = styled.img`
  margin-right: 1vw;
  margin-bottom: 1vh;
`;

export const TEXT = styled.span`
  display: inline-block;
  font-size: 18px;
  margin-bottom: 2vh;
`;

export const Star = styled(Rate)``;

export const InputWrapper = styled.div`
  display: flex;
`;

export const InputWriterAndPassword = styled.input`
  font-size: 18px;
  width: 10vw;
  height: 4vh;
  border: 1px solid black;
  padding-left: 1vw;
  margin-right: 1vw;
`;

export const ContentsWrapper = styled.div`
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid black;
`;

export const Contents = styled.textarea`
  font-size: 16px;
  width: 89vw;
  min-height: 15vh;
  border: none;
  padding-top: 1vh;
  padding-left: 1vh;
  resize: none;
`;

export const ContentsInfo = styled.div`
  margin-top: 1vh;
  margin-left: 1vw;
  color: gray;
`;

export const ContentsBtn = styled.button`
  font-size: 16px;
  width: 6vw;
  height: 5vh;
  margin-left: 82vw;
  margin-bottom: 1vh;
  background-color: #bdbdbd;
  :hover {
    cursor: pointer;
    background-color: #ffd400;
  }
`;

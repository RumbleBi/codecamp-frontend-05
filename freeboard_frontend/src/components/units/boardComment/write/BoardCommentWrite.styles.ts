import styled from "@emotion/styled";
import { Rate } from "antd";
export const Wrapper = styled.div`
  width: 80vw;
  height: 40vh;
  background-color: blue;
`;

export const PencilIcon = styled.img``;

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
`;

export const Contents = styled.textarea`
  font-size: 16px;
  width: 80vw;
  min-height: 15vh;
  border: 1px solid gray;
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
  margin-left: 73vw;
  margin-bottom: 1vh;
  border: none;
  background-color: #bdbdbd;
  :hover {
    cursor: pointer;
    background-color: #ffd400;
  }
`;

import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

export const WordInput1 = styled.input`
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  background-color: ${(props) => (props.isCorrect === true ? "green" : "red")};
`;
export const WordInput2 = styled.input`
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;
export const WordInput3 = styled.input`
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;
export const WordInput4 = styled.input`
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;
export const WordInput5 = styled.input`
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;

export const SubmitBtn = styled.button``;

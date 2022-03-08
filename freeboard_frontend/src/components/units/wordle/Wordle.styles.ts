import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2f2f2f;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;
export const Title = styled.div`
  font-size: 42px;
  margin-bottom: 5vh;
  color: white;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const WordInput0 = styled.input`
  border: none;
  margin-right: 2vw;
  width: 50px;
  height: 50px;
  border-radius: 10px;

  font-size: 40px;
  text-align: center;
  background-color: ${(props: any) => (props.isCorrect0 === 1 ? "green" : "")};
  background-color: ${(props: any) => (props.isCorrect0 === 2 ? "yellow" : "")};
  background-color: ${(props: any) => (props.isCorrect0 === 3 ? "red" : "")};
`;
export const WordInput1 = styled.input`
  border: none;
  margin-right: 2vw;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  background-color: ${(props: any) => (props.isCorrect1 === 1 ? "green" : "")};
  background-color: ${(props: any) => (props.isCorrect1 === 2 ? "yellow" : "")};
  background-color: ${(props: any) => (props.isCorrect1 === 3 ? "red" : "")};
`;
export const WordInput2 = styled.input`
  border: none;
  margin-right: 2vw;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  background-color: ${(props: any) => (props.isCorrect2 === 1 ? "green" : "")};
  background-color: ${(props: any) => (props.isCorrect2 === 2 ? "yellow" : "")};
  background-color: ${(props: any) => (props.isCorrect2 === 3 ? "red" : "")};
`;
export const WordInput3 = styled.input`
  border: none;
  margin-right: 2vw;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  background-color: ${(props: any) => (props.isCorrect3 === 1 ? "green" : "")};
  background-color: ${(props: any) => (props.isCorrect3 === 2 ? "yellow" : "")};
  background-color: ${(props: any) => (props.isCorrect3 === 3 ? "red" : "")};
`;
export const WordInput4 = styled.input`
  border: none;
  margin-right: 2vw;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  background-color: ${(props: any) => (props.isCorrect4 === 1 ? "green" : "")};
  background-color: ${(props: any) => (props.isCorrect4 === 2 ? "yellow" : "")};
  background-color: ${(props: any) => (props.isCorrect4 === 3 ? "red" : "")};
`;

export const SubmitBtn = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  :hover {
    background-color: #ffd400;
  }
`;

import * as S from "./index.styles";
import { useState } from "react";

export default function HomePage() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const inputAnswer = "abcde";
  const onChangeInput1 = (event) => {
    setInput1(event.target.value);
    if (inputAnswer[0] === input1) {
      setIsCorrect(true);
    }
  };
  const onChangeInput2 = (event) => {
    setInput2(event.target.value);
  };
  const onChangeInput3 = (event) => {
    setInput3(event.target.value);
  };
  const onChangeInput4 = (event) => {
    setInput4(event.target.value);
  };
  const onChangeInput5 = (event) => {
    setInput5(event.target.value);
  };

  const onClickSubmit = () => {
    if (inputAnswer[0] === input1) {
      setIsCorrect(true);
    }
  };
  return (
    <S.HomeWrapper>
      <S.WordInput1 maxLength={1} onChange={onChangeInput1} />
      <S.WordInput2 maxLength={1} onChange={onChangeInput2} />
      <S.WordInput3 maxLength={1} onChange={onChangeInput3} />
      <S.WordInput4 maxLength={1} onChange={onChangeInput4} />
      <S.WordInput5 maxLength={1} onChange={onChangeInput5} />
      <S.SubmitBtn onClick={onClickSubmit}>제출</S.SubmitBtn>
    </S.HomeWrapper>
  );
}

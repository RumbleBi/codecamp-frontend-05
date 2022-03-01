import { useState } from "react";
import WordlePageUI from "./wordle.presenter";

export default function Wordle(props) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");

  const inputAnswer = "abcde";
  const onChangeInput1 = (event) => {
    setInput1(event.target.value);
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
      props.isCorrect = true;
    }
  };
  console.log(props.isCorrect);

  return (
    <WordlePageUI
      onChangeInput1={onChangeInput1}
      onChangeInput2={onChangeInput2}
      onChangeInput3={onChangeInput3}
      onChangeInput4={onChangeInput4}
      onChangeInput5={onChangeInput5}
      onClickSubmit={onClickSubmit}
      isCorrect={props.isCorrect}
    />
  );
}

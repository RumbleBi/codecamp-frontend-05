import { ChangeEvent, useState } from "react";
import WordlePageUI from "./Wordle.presenter";

export default function Wordle() {
  const [input0, setInput0] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [isCorrect0, setIsCorrect0] = useState(0);
  const [isCorrect1, setIsCorrect1] = useState(0);
  const [isCorrect2, setIsCorrect2] = useState(0);
  const [isCorrect3, setIsCorrect3] = useState(0);
  const [isCorrect4, setIsCorrect4] = useState(0);

  const inputAnswer = "abcde";
  const onChangeInput0 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput0(event.currentTarget.value);
  };
  const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput1(event.currentTarget.value);
  };
  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput2(event.currentTarget.value);
  };
  const onChangeInput3 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput3(event.currentTarget.value);
  };
  const onChangeInput4 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput4(event.currentTarget.value);
  };
  // console.log(input0);
  // console.log(input1);
  // console.log(input2);
  // console.log(input3);
  // console.log(input4);

  const onClickSubmit = () => {
    if (inputAnswer[0] === input0) {
      setIsCorrect0(1);
    } else if (inputAnswer.includes(input0) === true) {
      setIsCorrect0(2);
    } else {
      setIsCorrect0(3);
    }
    console.log(inputAnswer.includes(input0));

    if (inputAnswer[1] === input1) {
      setIsCorrect1(1);
    } else if (inputAnswer.includes(input1) === true) {
      setIsCorrect1(2);
    } else {
      setIsCorrect1(3);
    }
    if (inputAnswer[2] === input2) {
      setIsCorrect2(1);
    } else if (inputAnswer.includes(input2) === true) {
      setIsCorrect2(2);
    } else {
      setIsCorrect2(3);
    }
    if (inputAnswer[3] === input3) {
      setIsCorrect3(1);
    } else if (inputAnswer.includes(input3) === true) {
      setIsCorrect3(2);
    } else {
      setIsCorrect3(3);
    }
    if (inputAnswer[4] === input4) {
      setIsCorrect4(1);
    } else if (inputAnswer.includes(input4) === true) {
      setIsCorrect4(2);
    } else {
      setIsCorrect4(3);
    }

    if (
      isCorrect0 === 1 &&
      isCorrect1 === 1 &&
      isCorrect2 === 1 &&
      isCorrect3 === 1 &&
      isCorrect4 === 1
    )
      alert("정답입니다!!");
  };

  return (
    <WordlePageUI
      onChangeInput0={onChangeInput0}
      onChangeInput1={onChangeInput1}
      onChangeInput2={onChangeInput2}
      onChangeInput3={onChangeInput3}
      onChangeInput4={onChangeInput4}
      onClickSubmit={onClickSubmit}
      isCorrect0={isCorrect0}
      isCorrect1={isCorrect1}
      isCorrect2={isCorrect2}
      isCorrect3={isCorrect3}
      isCorrect4={isCorrect4}
      setIsCorrect0={setIsCorrect0}
      setIsCorrect1={setIsCorrect1}
      setIsCorrect2={setIsCorrect2}
      setIsCorrect3={setIsCorrect3}
      setIsCorrect4={setIsCorrect4}
    />
  );
}

import { useState } from "react";

export default function verification() {
  const [NumberState, setNumberState] = useState("000000");

  const CreateState = () => {
    setNumberState(String(Math.floor(Math.random() * 100000)).padStart(6, "0"));
  };

  const CreateDom = () => {
    let token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
    document.getElementById("NumberDom").innerText = token;
  };

  return (
    <>
      <button onClick={CreateState}>인증번호 생성</button>
      <div>{NumberState}</div>
      <button onClick={CreateDom}>인증번호 생성</button>
      <div id="NumberDom">000000</div>
    </>
  );
}

import axios from "axios";
import { useState } from "react";
export default function RestGet() {
  //js 영역과 html 영역의 전체가 컴포넌트다. _app.js 에서 return 값이 <Component> 인 부분이 실행되는 것
  const [aaa, setAaa] = useState("");

  // async function zzz() {
  //     const result = await axios.get("https://koreanjson.com/posts/1")
  //     console.log(result.data.title)
  //     setAaa(result.data.title)
  // }

  // 화살표함수표현식
  const zzz = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data.title);
    setAaa(result.data.content);
  };
  //어떤 페이지를 실행하든 pages에 있는 _app.js 가 먼저 실행된다.
  //<fragment></fragment> 단지 묶음을 해주는 것이다 <></>와 거의 비슷하다 반복문 동작에 차이가 있다고 한다..
  return (
    <>
      <button onClick={zzz}>REST-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}

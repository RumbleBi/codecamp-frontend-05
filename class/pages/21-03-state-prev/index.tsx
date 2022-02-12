import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // 화살표 함수
    // setCount((prev) => prev + 1);

    // 그냥함수
    // setCount(function (prev) {
    //로직도 추가 가능
    // return prev + 1;
    // });

    // 매개변수 바꿔보기
    setCount((jax) => jax + 1);
  };
  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가!!!</button>
    </>
  );
}

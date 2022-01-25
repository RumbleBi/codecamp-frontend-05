import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0); // () 안에 아무것도 없으면 undefined로 지정이 된다. // 임시저장공간에 0 이라는 값이 저장되어 있다.
  const onClickCountUp = () => {
    setCount((prev) => prev + 1); // 임시저장공간에 count가 있다면 그 카운트에 값을 추가한다.
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트업</button>
    </div>
  );
}

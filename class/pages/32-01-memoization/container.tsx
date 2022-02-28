import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContanierPage() {
  console.log("컨테이너가 렌더링 됩니다!!");

  let countLet = useMemo(() => 0, []);
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), [countState]);
  // 리턴하는 값을 기억한다!! useEffect와 같은 형식
  // 복잡한 계산을 매번 렌더링하지 않도록 할 때 사용.
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 useCallback 만들어보기!!

  // const onClickCountState = useMemo(() => {
  //   return () => {
  //     console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   };
  // }, []);

  // 다시 원래 함수
  // const onClickCountState = () => {
  //   // console.log(countState + 1);
  //   setCountState((prev) => prev + 1);
  // };

  return (
    <div>
      <div>=======================</div>
      <h1>이것은 컨테이너 입니다!!</h1>
      <div>(let){countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1</button>
      <div>(state){countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1</button>
      <div>=======================</div>
      <MemoizationPresenterPage myCount={countState} />
    </div>
  );
}

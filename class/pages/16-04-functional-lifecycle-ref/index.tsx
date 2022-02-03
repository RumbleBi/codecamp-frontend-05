import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalLifecycleRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  const router = useRouter();

  // componentDidMount와 동일!! 배열이 뒤에 하나 추가되었다. 뒤의 배열은 dependencyArray라고 한다 의존성배열 이러한 경우 리렌더링되었을 때, 뒤의 배열이 변경된 경우에만 리렌더링됨. 빈 배열의 경우 한번만 리렌더링이 된다.
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    // setCount((prev) => prev + 1); 이건 쓰면 안좋아. 렌더링이 한번 더 되니까 비효율적이니까.

    return () => {
      console.log("여기서나갈래요");
    };
  }, [count]);

  //componentDidUpdate와 비슷한 기능 뭐 하나라도 바뀌면 실행됨
  useEffect(() => {
    console.log("수정됨!!(리렌더링됨)");

    // setCount((prev) => prev + 1); 이거하면 무한 리렌더링나면서 숫자 오지게올라감;;
  }, [count]);

  const onClickMove = () => {
    router.push("/");
  };

  const onClickCounter = () => {
    console.log("카운터를 클릭했습니다");
    setCount((prev) => prev + 1);
  };

  console.log("나는 언제 실행되게?"); // componentDidMount, DidUpdate 순서 비교
  {
    return (
      <div>
        <input type="text" ref={inputRef} />
        <div>현재카운트: {count}</div>
        <button onClick={onClickCounter}>카운트 올리기!!!</button>
        <button onClick={onClickMove}>나가기</button>
      </div>
    );
  }
}

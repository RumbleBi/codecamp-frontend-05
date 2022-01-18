import { useRouter } from "next/router";

//static과 동일하다 routed 만 바뀌는거다
export default function DynamicRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    // const result = createProduct
    // console.log(result)
    router.push("/05-06-dynamic-routed-board/1");
    // router.push("/05-08-dynamic-routed-product/1" + _id)
  };

  const onClickMove2 = () => {
    router.push("/05-06-dynamic-routed-board/2");
  };

  const onClickMove3 = () => {
    router.push("/05-06-dynamic-routed-board/3");
  };

  const onClickMove4 = () => {
    router.push("/05-06-dynamic-routed-board/3");
  };

  const onClickMove100 = () => {
    router.push("/05-06-dynamic-routed-board/100");
  };

  return (
    <>
      {/* <button onClick={onClickMove1}>페이지 이동하기</button> */}
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
      <button onClick={onClickMove4}>4번 게시글로 이동하기</button>
      <button onClick={onClickMove100}>100번 게시글로 이동하기</button>
    </>
  );
}

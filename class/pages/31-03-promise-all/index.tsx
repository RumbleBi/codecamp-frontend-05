export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 5000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("아잉");
      }, 2000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 8000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작!!"); // 위랑 아래 똑같은 문자열로해야지 알려줌
  };
  // 결국 위의 코드는 for문처럼 하나하나씩 돌린거랑 같은 이치이다. 15초걸림!!

  const onClickPromiseAll = async () => {
    // 1. 하나하나 각각 입력하는 방법.
    // console.time("PromiseAll시작!!");
    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("아잉");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("훈이");
    //     }, 3000);
    //   }),
    // ]); // 동시에 요청하고 동시에 받는다 개꿀!!
    // console.log(results);
    // console.timeEnd("PromiseAll시작!!");

    // map을 사용해서 간소화하기
    console.time("PromiseAll시작!!");
    const classmates = ["철수", "영희", "훈이"];
    const results = await Promise.all(
      classmates.map(
        // 중괄호 넣으면 함수가 되니까 return 이 필요하므로 넣지 않는다.
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(results);
    console.timeEnd("PromiseAll시작!!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>시작하기!!</button>

      <button onClick={onClickPromiseAll}>시작하기!!(Promise.all)</button>
    </div>
  );
}

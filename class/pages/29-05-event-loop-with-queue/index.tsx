// 싸이월드 복습
// setInterval(() => {
//   document.getElementById("timer")?.innerText = "2:59";
// }, 1000);

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("스타트!!");

    // 비동기작업 (매크로큐에 들어감)
    setTimeout(() => {
      console.log(
        "아임 셋타임아웃.. 매크로큐에 있지.. 0초뒤에 실행될거다..크킄"
      );
    }, 0);

    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) =>
      console.log(
        "아임 프로미스.. 마이크로큐에 있지.. 0초뒤에 실행될거다..크킄 1"
      )
    );

    setInterval(() => {
      console.log("아임 셋인터벌.. 매크로큐에 있지.. 0초뒤에 실행될거다..크킄");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 99999999; i++) {
      sum += i;
    }

    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) =>
      console.log(
        "아임 프로미스.. 마이크로큐에 있지.. 0초뒤에 실행될거다..크킄 2"
      )
    );
    console.log("끝!!");
  };
  return <button onClick={onClickTimer}>시작!!</button>;
}

// 싸이월드 복습
// setInterval(() => {
//   document.getElementById("timer")?.innerText = "2:59";
// }, 1000);

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("스타트!!");
    setTimeout(() => {
      // 비동기 함수들 ex axios 등등
      console.log("1초 뒤에 실행될 거에요!!");
    }, 1000);
    let sum = 0;
    for (let i = 0; i <= 999999999; i++) {
      sum += i;
    }
    console.log("끝!!");
  };
  return <button onClick={onClickTimer}>시작!!</button>;
}

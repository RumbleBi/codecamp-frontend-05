export default function LetHello() {
  function zzz() {
    document.getElementById("qqq").innerText = "반갑습니다";
  }

  return (
    <div>
      <div id="qqq">안녕하세요</div>
      <button onClick={zzz}>클릭!!</button>
    </div>
  );
}

// let qqq = "반갑습니다" const 로 해도 어짜피 DOM을 이용해야 하므로 의미가 없다. <div>{qqq}</div>
// html 부분에 넣어도 결국 JS함수에서 변수를 불러올 때는 DOM을 사용해야함.

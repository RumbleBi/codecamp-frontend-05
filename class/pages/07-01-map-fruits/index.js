const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
]; //다시 렌더링할 필요가 없는 것들은 위에다 올려놓는다. 하드코딩같은것들.

export default function MapFruitsPage() {
  //   const aaa = [
  //     <div>1 레드향</div>,
  //     <div>2 샤인머스켓</div>,
  //     <div>3 산청딸기</div>,
  //   ];

  //   const bbb = ["나의레드향", "나의샤인머스켓", "니의산청딸기"].map((el) => (
  //     <div>{el}</div>
  //   ));

  const ccc = FRUITS.map((el) => <div>{`${el.number} ${el.title}`}</div>);
  return (
    <>
      <div>{ccc}</div>
      <div>
        {FRUITS.map((el) => (
          <div>{`${el.number} ${el.title}`}</div> //이렇게 직접 넣는 것이 코드의 가독성이 좋다 코드가 길어지면 ccc가 의미하는 것을 바로 알기 쉽지않기 때문이다.
        ))}
      </div>
    </>
  );
}

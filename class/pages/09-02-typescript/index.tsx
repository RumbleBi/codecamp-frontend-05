export default function TypescriptPage() {
  // //타입추론으로 인해 :string 을 할 필요가 없다. aaa를 대보면 string이라고 추론을 한다. 그러므로 aaa 에 넘버타입의 데이터가 들어갈 수 없게 된다.
  // let aaa = "안녕하세요";
  // aaa = 3;

  // //문자타입
  // let bbb: string;
  // bbb = "반갑습니다";
  // bbb = 3432;

  // //숫자타입
  // let ccc: number = 5;
  // ccc = "hello";

  // //boolean타입
  // let ddd: boolean
  // ddd = 123
  // ddd = "world"
  // ddd = true
  // ddd = false

  // //배열타입
  // let eee: number[] = [1, 2, 3, 4, 5, "하위~~"];
  // let fff: string[] = ["가", "나", "다", 5];
  // let ggg: (string | number)[] = [1, 2, 3, 4, "하", "위"];
  // let hhh: string[] | number[] = ["하", "위", "요"];
  // hhh = [1, 2, 3];

  // //객체타입 물론 추론되어 배열안의 value도 적용된다 근데 둘다 적용하고 싶으면 따로 타입을 만들어줘야한다..

  // interface IProfile {
  //   name: string;
  //   age: number | string;
  //   school: string;
  // }
  // const profile: IProfile = {
  //   name: "철수",
  //   age: 8,
  //   school: "다람쥐초등학교",
  // };
  // profile.school: 123;    //string으로 지정했기때문에 변경불가
  // profile.age = "8살";    //number | string 이므로 둘다 가능

  return <div>타입스크립트연습</div>;
}

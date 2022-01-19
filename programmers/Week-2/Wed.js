// 서울에서 김서방 찾기

// function solution(seoul) {
//   let answer = "";

//   for (let i = 0; i < seoul.length; i++) {
//     if (seoul[i] === "Kim") {
//       answer = `김서방은 ${i}에 있다`;
//     }
//   }
//   return answer;
// }

// 문자열 다루기 기본

// isNaN("0/0")
// isNaN은 데이터를 숫자 타입으로 변경

// Number.isNaN("0/0")  *추천*
// 데이터를 그대로 사용
// 숫자타입만 들어올 수 있다. 아니라면 무조건 false

// 약수의 합

// function solution(n) {
//     let answer = 0;
//     for (let i = 0; i <= n; i++) {
//        if(n % i === 0) {
//            answer += i;
//        }
//     }
//     return answer;
// }

// function solution(n) {
//     let answer = new Array( n ).fill(1).reduce( (cu, el, i) => {
//         const num = el + i;
//         return n % num === 0 ? cu + num : cu
//     }, 0) //해당 갯수에 맞는 배열 생성, 배열의 데이터마다 해당 인자 데이터를 할당.
//     return answer;
// }

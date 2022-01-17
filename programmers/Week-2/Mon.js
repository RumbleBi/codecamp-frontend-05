// //문자열을 정수로 바꾸기

// function solution(s) {
//   let answer = 0;
//   answer = Number(s);

//   return answer;
// }

// //같은 숫자는 싫어

// function solution(arr) {
//   let answer = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

// 핸드폰 번호 가리기

// function solution(phone_number) {
//   let answer = phone_number.split("");
//   for (let i = 0; i < phone_number.length - 4; i++) {
//     answer[i] = "*";
//   }
//   answer = answer.join("");
//   return answer;
// }

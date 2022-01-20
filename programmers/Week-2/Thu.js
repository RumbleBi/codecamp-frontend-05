// 자릿수 더하기

// function solution(n)
// {
//     let answer = 0;
//     n = n + '';
//     let temp = n.split('');
//     for (let i = 0; i < temp.length; i++) {
//         answer += Number(temp[i]);
//     }

//     return answer;
// }

// x만큼 간격이 있는 n개의 숫자

// function solution(x, n) {
//     let answer = [];
//     for (let i = 0; i <= n; i++) {
//         answer[i] = x * i;
//     }
//     answer.shift();

//     return answer;
// }

// 다른 풀이
// function solution(x, n) {
//   const answer = new Array(n).fill(1).map((num, i) => {
//     return x * (num + i);
//   });

//   return answer;
// }

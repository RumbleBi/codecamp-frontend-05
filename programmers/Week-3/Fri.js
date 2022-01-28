// 두 정수 사이의 합

// C
// #include <stdio.h>
// #include <stdbool.h>
// #include <stdlib.h>

// long long solution(int a, int b) {
//     long long answer = 0;
//     if (a < b) {
//         while (a <= b) {
//             answer += a;
//             a++;
//         }
//         return answer;

//     }
//     if (a > b) {
//         while (a >= b) {
//             answer += b;
//             b++;
//         }
//         return answer;
//     }
//     if (a == b) return a;
// }

// JS
// function solution(a, b) {
//     let answer = 0;

//     if (a < b) {
//         while (a <= b) {
//             answer += a;
//             a++;
//         }
//         return answer;
//     }
//     if (a > b) {
//         while (a >= b) {
//             answer += b;
//             b++;
//         }
//         return answer;
//     }
//     if (a === b) return a;
// }

// 정수 제곱근 판별

// function solution(n) {
//     let x = 0;
//     for ( x = 0; x <= n; x++) {
//         if (x * x === n) {
//             return (x + 1) * (x + 1);
//         }
//     }
//     if (x*x !== n) return -1
// }

// MAP으로

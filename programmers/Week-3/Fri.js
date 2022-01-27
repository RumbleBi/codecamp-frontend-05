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

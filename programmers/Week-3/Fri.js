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
function solution(n, m) {
  let answer = [];
  let temp = [];
  let temp2 = [];

  if (m > n) {
    if (m % n === 0) {
      for (let i = 2; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
          temp.push(i);
          n = n / i;
          m = m / i;
          i = 0;
        }
      }
      answer[0] = temp.reduce(function add(sum, cur) {
        return sum * cur;
      }, 0);
      answer[1] =
        n *
        m *
        temp.reduce(function add(sum, cur) {
          return sum * cur;
        }, 0);
    }

    if (m % n !== 0) {
      answer[0] = 1;
      answer[1] = n * m;
    }
  }

  if (n > m) {
    if (n % m === 0) {
      for (let i = 2; i <= m; i++) {
        if (n % i === 0 && m % i === 0) {
          temp2.push(i);
          n = n / i;
          m = m / i;
          i = 0;
        }
      }
      answer[0] = temp2.reduce(function add2(sum, cur) {
        return sum * cur;
      }, 0);
      answer[1] =
        n *
        m *
        temp2.reduce(function add2(sum, cur) {
          return sum * cur;
        }, 0);
    }

    if (n % m !== 0) {
      answer[0] = 1;
      answer[1] = n * m;
    }
  }

  if (m === n) {
    answer[0] = m;
    answer[1] = m;
  }

  return answer;
}

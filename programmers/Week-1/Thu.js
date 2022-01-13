// 023. 숫자 더하기

// let num = 5

// function sum(num) {

//     let count = 0

//     for (let i = 0; i <= num; i++) {
//         count = count + i
//     }
//     return count;
// }

// 024. 특정 문자열 세기

// let str = "I am from Korea"

// function countLetter(str) {

//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'A' || str[i] === 'a') {
//             count++
//         }
//     }

//     return count;
// }

// 025. 문자열 삽입

// function makeNumber(num) {
//     let answer = "";
//     for (let i = 1; i <= num; i++) {
//         answer += i;
//         if (i !== num) {
//             answer += "0"
//         }
//     }
//     return answer
// }

// console.log(makeNumber(5));


// 026.
// let answer = "";

// function makeOdd(num) {
//     for(let i = 1; i <= num; i++) {
//         if( i % 2 === 1) {
//             answer += i;
//         }
//     }
//     return answer;
// }

// console.log(makeOdd(5));

// 027. 가장 큰 수 찾기

// function bigNum(str) {

//     let biggest = 0;

//     for(let i = 0; i < str.length; i++) {

//         if (Number(str[i]) > biggest) {
//             biggest = Number(str[i]);
//         }
//     }
//     return biggest;
// }

// console.log(bigNum("12345"));
// 018. 조건문 연습
// let input1 = true
// let input2 = false

// function boolean(input1, input2) {

//     if (input1 !== true && input2 !== true) {
//         console.log("false")
//     } else {
//         console.log("true")
//     }
// }

// console.log(boolean(input1, input2));

// 019. 홀짝

// let num = 3;

// function evenOdd(num) {
//     if (num === 0) {
//         return "Zero";
//     } else if (num % 2 === 0) {
//         return "Odd"
//     } else if (num % 2 === 1) {
//         return "Even"
//     }
// }
// console.log(evenOdd(num));

// 020. 온도

// let num = 28;

// function temperature(num) {
//     if (num <= 18) {
//         console.log("조금 춥네요")
//     } else if (num >= 19 && num <= 23) {
//         console.log("날씨가 좋네요")
//     } else {
//         console.log("조금 덥습니다")
//     }
// }


// 021. 며칠

// let month = 3;

// function days(month) {
//     switch (month) {
//         case 1: console.log("1월 : 31일")
//             break;
//         case 2: console.log("2월 : 28일")
//             break;
//         case 3: console.log("3월 : 31일")
//             break;
//         case 4: console.log("4월 : 30일")
//             break;
//         case 5: console.log("5월 : 31일")
//             break;
//         case 6: console.log("6월 : 30일")
//             break;
//         case 7: console.log("7월 : 31일")            
//             break;
//         case 8: console.log("8월 : 31일")
//             break;
//         case 9: console.log("9월 : 30일")
//             break;
//         case 10: console.log("10월 : 31일")
//             break;
//         case 11: console.log("11월 : 30일")
//             break;
//         case 12: console.log("12월 : 31일")
//             break;
//     }
// }

// console.log(days(month));

// 또는 

// function days(month) {
//     if ( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         return 31;
//     } else if ( month === 4 || month === 6 || month === 9 || month === 11) {
//         return 30;
//     } else if ( month === 2) {
//         return 28;
//     }
// }

// 또는

// let month = 8;

// const monthList = {
//     1: 31,
//     2: 28,
//     3: 31,
//     4: 30,
//     5: 31,
//     6: 30,
// }

// function days(month) {
//     return monthList[month]
// }


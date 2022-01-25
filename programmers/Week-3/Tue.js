// 자연수 뒤집어 배열로 만들기

// function solution(n) {
//     let result = [];
//     let answer = [];
//     let temp = String(n)
//     answer = temp.split("")
//     let temp2 = answer.reverse()
//     for (let i = 0; i < temp2.length; i++) {
//         result[i] = Number(temp2[i])
//     }
    
//     return result;
// }


// 나누어 떨어지는 숫자 배열

// function solution(arr, divisor) {
//     let answer = [];
//     arr.forEach((element) => {
//         if (element % divisor === 0)
//             answer.push(element);
//     });
    
//     if (answer.length === 0)
//         answer[0] = -1;
//     else
//         answer.sort((a, b) => (a - b));
//     return answer;
// }
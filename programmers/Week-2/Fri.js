// 문자열 내림차순으로 배치하기

// function solution(s) {
//     let answer = s.split("").sort().reverse().join("")
    
//     return answer;
// }

// 수업

// arr = [1,3,9,12,102,86];
// arr.sort( (a, b) => {
//     return b - a;            //내림차순 a - b 를 할경우 오름차순
// })

// K번째수

// function solution(array, commands) {
//     var answer = [];
    
//     for (let idx = 0; idx < commands.length; idx++) {
//         const i = commands[idx][0];
//         const j = commands[idx][1];
//         const k = commands[idx][2];
        
//         const result = array.slice(i - 1, j).sort((a, b) => {
//             return a < b ? -1 : 1; //return a - b 동일하게 작동하나 문자열에서는 안된다.
//         })
        
//         answer.push(result[k - 1]);
//     }
//     return answer;
// }

// 수업 

// function solution(array, commands) {
//     const answer = commands.map( nums => {
//         const result = array.slice( nums[0] - 1, nums[1]).sort((a, b) => {
//             return a < b ? -1 : 1;
//         })
//         return result[ nums[2] - 1];
//     })
//     return answer;
// }

// 수업

// function solution(array, commands) {
//     const answer = [];
//     const answer = commands.forEach( nums => {
//         const result = array.slice( nums[0] - 1, nums[1]).sort((a, b) => {
//             return a < b ? -1 : 1;
//         })
//         answer.push(result[nums[2] - 1])
//     })
//     return answer;
// }



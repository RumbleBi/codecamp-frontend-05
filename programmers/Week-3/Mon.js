// 문자열 내 p와 y의 개수

// function solution(s){
//     let spellP = 0;
//     let spellY = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "P" || s[i] === "p") {
//             spellP += 1;
//         }
//         if (s[i] === "Y" || s[i] === "y") {
//             spellY += 1;
//         }
//     }
    
//     if (spellP === spellY) return true;
//     if (spellP !== spellY) return false;
// }

// 이상한 문자 만들기

// function solution(s) {
//   let answer = ''
    
//   let index = 0;
//   for (let i = 0; i < s.length; i++) {
//       if (s[i] === " ") {
//           answer += " ";
//           index = 0;
//       } else {
//           answer += index % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
//           index++
//       }
//   }
//   return answer;
// }
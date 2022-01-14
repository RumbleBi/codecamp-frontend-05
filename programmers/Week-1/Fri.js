// 41. 조건문 실전 적용 - 점수에 따른 등급

// function grade(score) {
//     if (score >= 90 && score <= 100) {
//       console.log("A")
//     } else if (score >= 80 && score <= 89) {
//       console.log("B")
//     } else if (score >= 70 && score <= 79) {
//       console.log("C")
//     } else if (score >= 60 && score <= 69) {
//       console.log("D")
//     } else if (score >= 0 && score <= 59) {
//       console.log("F")
//     } else {
//       console.log("잘못된 점수입니다")
//     }
//   }

// const myShopping = [
//     { category: "과일", price: 12000　},
//     { category: "의류", price:10000　 },
//     { category: "의류", price: 20000　},
//     { category: "장난감", price: 9000 },
//     { category: "과일", price: 5000　 },
//     { category: "의류", price: 10000  },
//     { category: "과일", price: 8000　　},
//     { category: "의류", price: 7000　　},
//     { category: "장난감", price: 5000  },
//     { category: "의류", price: 10000　 },
// ]

// const Calculator = () => {
//   let count = 0;
//   let price = 0;
//   for (let i = 0; i < myShopping.length; i++) {
//     if (myShopping[i].category === "의류") {
//       count++;
//       price = price + myShopping[i].price;
//     }
//   }
//   if (count >= 0 && count <= 2) {
//     console.log(
//       `의류를 구매한 횟수는 총${count}회 금액은 ${price}원이며 등급은 "Bronze"입니다.`
//     );
//   } else if (count >= 3 && count <= 4) {
//     console.log(
//       `의류를 구매한 횟수는 총${count}회 금액은 ${price}원이며 등급은 "Sliver"입니다.`
//     );
//   } else if (count >= 5) {
//     console.log(
//       `의류를 구매한 횟수는 총${count}회 금액은 ${price}원이며 등급은 "Gold"입니다.`
//     );
//   }
// }; 

// console.log(Calculator());
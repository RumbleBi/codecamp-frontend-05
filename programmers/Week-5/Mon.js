// 행렬의 덧셈

// for문
function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      // 배열의 각각의 위치에 있는 정수들을 더한 결과 값을 저장
      const sum = arr1[i][l] + arr2[i][l];

      if (answer[i] === undefined) {
        answer[i] = [];
      }

      answer[i][l] = sum;
    }
  }
  return answer;
}

// map
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}

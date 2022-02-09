// 내적

function solution(a, b) {
  let temp = [];
  for (let i = 0; i < a.length; i++) {
    temp[i] = a[i] * b[i];
  }
  let answer = temp.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

// 제일 작은 수 제거하기

function solution(arr) {
  let answer = [];
  const min = Math.min.apply(null, arr);
  arr = arr.filter((el) => el > min);
  answer = arr.length === 0 ? [-1] : arr;
  return answer;
}

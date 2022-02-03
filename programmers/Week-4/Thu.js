// 음양 더하기

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    // true일 때는 +
    // false일 때는 -
    return signs[i] ? acc + cur : acc - cur;
  }, 0);
  return answer;
}

// 하샤드 수

function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    });
  return x % answer === 0;
}

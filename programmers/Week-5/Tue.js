// 2016년

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let days = 0;

  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1;
  return week[days % 7];
}

// new Date 사용

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}

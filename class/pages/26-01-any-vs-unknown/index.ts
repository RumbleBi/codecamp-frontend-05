// 1. any타입 걍 JS
export const getAny = (args: any) => {
  const answer = args + 2;
  return answer;
};
const myResult1 = getAny("철수");
console.log(myResult1);

// 2. unknown타입 개발자에게 안전하게 코딩하도록 유도함.
export const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    const answer = args + 2;
    return answer;
  } else {
    return "숫자를넣어!!";
  }
};

const myResult2 = getUnknown("철수");
console.log(myResult2);

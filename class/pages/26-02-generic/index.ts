// 1.문자
export function getString(arg: string): string {
  return arg; // 리턴값을 TS하는 경우 ()뒤에 선언한다.
}
const result1 = getString("철수");
console.log(result1);

// 2. 숫자

export function getNumber(arg: number): number {
  return arg; // 리턴값을 TS하는 경우 ()뒤에 선언한다.
}
const result2 = getNumber(8);
console.log(result2);

// 3. any
export const getAny = (arg: any) => {
  return arg;
};

const myResult31 = getAny("철수");
const myResult32 = getAny(2);
const myResult33 = getAny(true);
console.log(myResult31);
console.log(myResult32);
console.log(myResult33);

// 4. generic 타입(들어온 타입을 그대로 사용)
export function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 4;
const ccc: boolean = true;
const myResult41 = getGeneric(aaa);
const myResult42 = getGeneric(bbb);
const myResult43 = getGeneric(ccc);
console.log(myResult41);
console.log(myResult42);
console.log(myResult43);

// 5. any응용
export function getAnyReverse(arg1: any, arg2: any, arg3: any): any {
  return [arg3, arg2, arg1];
}
const result5 = getAnyReverse("철수", "초등", 8);
console.log(result5);

// 6. generic 응용
export function getGenericReverse<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result6 = getGenericReverse("철수", "학교", 4);
console.log(result6);

// 7. generic 응용 축약버전
export function getGenericReverseT<T1, T2, T3>(
  arg1: T1,
  arg2: T2,
  arg3: T3
): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result7 = getGenericReverseT("철수", "학교", 4);
console.log(result7);

// 7. generic 응용 축약버전 2
export function getGenericReverseTUV<T, U, V>(
  arg1: T,
  arg2: U,
  arg3: V
): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result8 = getGenericReverseTUV("철수", "학교", 4);
// const result8 = getGenericReverseTUV<string, string, number>("철수", "학교", 4);
console.log(result8);

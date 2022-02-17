import { useRouter } from "next/router";
import { useState } from "react";
// 뭐시기? | 그리고 & 뭐라함

type IPage = "/board" | "/market" | "/mypage";

// 선언병합방식
// interface AAA {
//   name: string;
//   age: number;
// }

// interface AAA {
//   school: string;
// }
//interface는 내용을 합칠 수 있지만, type 으로 할 경우, 안됨!
export default function UseMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedpage] = useState("/");
  const moveToPage = (page: IPage) => () => {
    router.push(page);
    setVisitedpage(page);
  };
  return { moveToPage, visitedPage };
}
// value key 같으니까 : 필요없음 !!

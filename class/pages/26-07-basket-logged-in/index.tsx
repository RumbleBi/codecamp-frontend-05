import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

// 로그인했다고 가정하에
export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  // if (typeof window !== "undefined")
  // if (process.browser)
  // 윈도우가 있다면, 브라우저가 있다면 ~
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  // useEffect는 하이드레이션이 끝나고 동작한다. 프리렌더링때 동작 안함

  return (
    <div>
      <h1>나만의 장바구니(비회원전용)</h1>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}

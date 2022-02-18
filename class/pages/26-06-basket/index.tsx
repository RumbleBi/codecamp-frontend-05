import { gql, useQuery } from "@apollo/client";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);
    // parse 는 반대로 문자열을 객체나 배열로 만드는 것.
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]"); // "문자열" 콘솔찍으면 {}처럼 보이지만 문자열"" 이 들어가있다.
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미담긴상품입니다!");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets)); // JSON.stringify 로 객체나 배열형태의 데이터를 문자열로 치환해야한다. 로컬스토리지는 문자열로 되어있기 때문에!!
  };
  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span> <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}

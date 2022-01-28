import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PagenationPage() {
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = (event) => {
    console.log(event.target.id);
    const aaa = isEdits; // 원본 자체를 넣어버림
    aaa[event.target.id] = true;
    console.log(aaa);
    setIsEdits([...aaa]);
    // setIsEdit(true);
  };
  return (
    // 아래의 코드를 컴포넌트로 나눠서 만들 수있다 숙제임;;
    <div>
      <h1>댓글수정 연습</h1>
      {data?.fetchBoards?.map((el, index) => (
        // <CommentEvent /> 이런 컴포넌트를 만들어서
        <div key={el._id}>
          {isEdits[index] === false && (
            <div>
              <span>
                {el.title} {el.writer}
              </span>
              <button id={index} onClick={onClickIsEdit}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] === true && (
            <div>
              <div>================</div>
              <div>이것은 수정하기 화면입니다.</div>
              <div>================</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

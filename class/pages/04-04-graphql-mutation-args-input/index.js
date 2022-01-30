import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
// $부분이 왜 두개나 되냐?? 보드 말고도 다른 프로필, 상품등록 등 여러 API에게 중복되게 효율적으로 요청을 보내줄 수 있기 때문이다
//graphql 의 장점이라고 볼 수 있다.
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsInput() {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD); //[실행하는 함수] (요청하는 값)

  const zzz = async () => {
    const result = await qqq({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);
    // console.log(result.data.title);
    // setAaa(result.data.title);
  };

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value);
  };

  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value);
  };

  const onChangeMyContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      제목: <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용: <input type="text" onChange={onChangeMyContents} />
      <br />
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}

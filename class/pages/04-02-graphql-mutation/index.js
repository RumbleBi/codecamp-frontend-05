import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "철수"
      title: "제목입니다~"
      contents: "내요이에요~~"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    const result = await qqq();
    console.log(result);
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);
  };
  return (
    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}

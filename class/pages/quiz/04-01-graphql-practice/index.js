import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`

  mutation {
    createBoard(writer: "진일", title: "목요일퀴즈", contents: "퀴즈푸는중") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutation() {
  const [confirm, setConfirm] = useState("");
  const [createInput] = useMutation(CREATE_BOARD); //[실행하는 함수] (요청하는 값)

  const onBoard = async () => {
    const result = await createInput()
    console.log(result)
    console.log(result.data.createBoard.message)
    setConfirm(result.data.createBoard.message)
  };
  return (
    <>
      <button onClick={onBoard}>GRAPHQL-API 요청하기</button>
      <div>{confirm}</div>
    </>
  );
}

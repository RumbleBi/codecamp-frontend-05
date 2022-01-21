import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";
const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "나", title: "무제", contents: "없음") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const [aaa, setAaa] = useState<string>("");
  const [qqq] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);

  const zzz = async () => {
    const result = await qqq();
    console.log(result);
    console.log(result.data?.createBoard?.message);
    setAaa(result.data?.createBoard?.message || "아무스트링"); //18 type string지정이기 때문에
  };
  return (
    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}

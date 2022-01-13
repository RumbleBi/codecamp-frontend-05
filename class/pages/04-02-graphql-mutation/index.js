import { useMutation,gql } from "@apollo/client";
import axios from "axios";
import { useState} from "react";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "나", title: "무제", contents: "없음") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutation() {
  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD); //[실행하는 함수] (요청하는 값)

  const zzz = async () => {
    //const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq()
    console.log(result)
    console.log(result.data.createBoard.message)
    setAaa(result.data.createBoard.message)
    // console.log(result.data.title);
    // setAaa(result.data.title);
  };
  return (
    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}

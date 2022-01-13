import { useMutation,gql } from "@apollo/client";
import { useState} from "react";

const CREATE_BOARD = gql`

  mutation createBoard($writer: String, $title: String $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationArgsInput() {
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const [confirm, setConfirm] = useState("");
  const [createInput] = useMutation(CREATE_BOARD); //[실행하는 함수] (요청하는 값)

  const onBoard = async () => {
    const result = await createInput({
      variables: { writer: myWriter, title: myTitle, contents: myContents }})
    console.log(result)
    console.log(result.data.createBoard.message)
    setConfirm(result.data.createBoard.message)
  };

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value)
  }

  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value)
  }

  const onChangeMyContents = (event) => {
    setMyContents(event.target.value)
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeMyWriter} /><br />
      제목: <input type="text" onChange={onChangeMyTitle}/><br />
      내용: <input type="text" onChange={onChangeMyContents}/><br />
      <button onClick={onBoard}>GRAPHQL-API 요청하기</button>
      <div>{confirm}</div>
    </>
  );
}

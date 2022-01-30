// createBoard 만들기 아이디, 작성자, 제목, 비번, 내용 입력값넣기

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      writer
      title
      contents
      _id
    }
  }
`;

export default function CreateBoardTest() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          title: title,
          writer: writer,
          password: password,
          contents: contents,
        },
      },
    });
    console.log(result.data.createBoard._id);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePW = (event) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>
        제목:
        <input type="text" onChange={onChangeTitle} />
        작성자:
        <input type="text" onChange={onChangeWriter} />
        비밀번호:
        <input type="password" onChange={onChangePW} />
        내용:
        <input type="text" onChange={onChangeContents} />
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

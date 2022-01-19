import axios from "axios"; //엑시오스도 중괄호가 없기 때문에 같은 방식이다.
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Free, { a } from "./BoardWrite.presenter"; //골라서 따로 export도 가능
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContent, setMyContent] = useState("");

  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD);
  const [www] = useMutation(UPDATE_BOARD);

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq({
      variables: {
        writer: myWriter,
        title: myTitle,
        contents: myContent,
      },
    });
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);

    router.push(`/08-05-boards/${result.data.createBoard.number}`);
  };

  const xxx = async () => {
    console.log("수정하기를 클릭하셨군요");
    const result = await www({
      variables: {
        number: Number(router.query.mynumber),
        writer: myWriter,
        title: myTitle,
        contents: myContent,
      },
    });

    console.log(result.data.updateBoard.message);
    router.push(`/08-05-boards/${router.query.mynumber}`);
  };

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContent !== "") {
      setIsActive(true);
    }
  };
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContent !== "") {
      setIsActive(true);
    }
  };
  const onChangeMyContent = (event) => {
    setMyContent(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    }
  };

  return (
    <Free
      bbb={aaa}
      ccc={zzz}
      xxx={xxx}
      ddd={onChangeMyWriter}
      isActive={isActive}
      kkk={onChangeMyTitle}
      lll={onChangeMyContent}
      isEdit={props.isEdit}
    />
  );
  // props={bbb: "" ccc: async () => {...} ddd: onChangeMyWriter = (event) => {...}} 동일하다
  // 최종적으로 보이게 되는 파일은 pages/06-01-container-presenter/index.js
}

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContent, setMyContent] = useState("");
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    const result = await qqq({
      variables: {
        writer: myWriter,
        title: myTitle,
        contents: myContent,
      },
    });
  };


  // const onChangeInputs = (event) => {
    //   setInputs({
    //       ...inputs,
    //       [event.target.id]: event?.target.value,
    //   })
  }
  const onChangeMyWriter = (event) => {
    // setMyWriter(event.target.value);
    setInputs({
      //   writer: event.target.value,
      //   title: inputs.title,
      //   contents: inputs.contents,
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeMyTitle = (event) => {
    //setMyTitle(event.target.value);
    setInputs({
      writer: inputs.writer,
      title: event.target.value,
      contents: inputs.contents,
    });
  };
  const onChangeMyContent = (event) => {
    // setMyContent(event.target.value);
    setInputs({
      writer: inputs.writer,
      title: inputs.title,
      contents: event.target.value,
    });
  };

  return (
    <div>
      <div>스프레드 연산자 연습</div>;
      <input type="text" id="writer" onChange="{onChangeMyWriter}" />
      <input type="text" id="title" onChange="{onChangeMyTitle}" />
      <input type="text" id="contents" onChange="{onChangeMyContent}" />
    </div>
  );
}

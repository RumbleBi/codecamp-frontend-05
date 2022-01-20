import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);

  const [writerInput, setWriterInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [postInput, setPostInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const [writerInputError, setWriterInputError] = useState("");
  const [passwordInputError, setPasswordInputError] = useState("");
  const [postInputError, setPostInputError] = useState("");
  const [contentInputError, setContentInputError] = useState("");

  function WriterInputCheck(event) {
    setWriterInput(event.target.value);
    if (
      event.target.value &&
      writerInput &&
      passwordInput &&
      postInput &&
      contentInput
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function PasswordInputCheck(event) {
    setPasswordInput(event.target.value);
    if (
      event.target.value &&
      writerInput &&
      passwordInput &&
      postInput &&
      contentInput
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function PostInputCheck(event) {
    setPostInput(event.target.value);
    if (
      event.target.value &&
      writerInput &&
      passwordInput &&
      postInput &&
      contentInput
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function ContentInputCheck(event) {
    setContentInput(event.target.value);
    if (
      event.target.value &&
      writerInput &&
      passwordInput &&
      postInput &&
      contentInput
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickSubmit = async () => {
    if (writerInput === "") {
      setWriterInputError("작성자를 입력해주세요.");
    }
    if (passwordInput.length > 16 || passwordInput.length < 8) {
      setPasswordInputError("비밀번호를 8~16자리 사이로 입력해주세요.");
    }
    if (postInput === "") {
      setPostInputError("제목을 입력해주세요.");
    }
    if (contentInput === "") {
      setContentInputError("내용을 입력해 주세요.");
    }
    if (
      writerInput !== "" &&
      passwordInput.length >= 8 &&
      passwordInput.length <= 16 &&
      postInput !== "" &&
      contentInput !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writerInput,
              password: passwordInput,
              title: postInput,
              contents: contentInput,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    try {
      await updateBoard({
        variables: {
          boardId: router.query.dynamic,
          password: passwordInput,
          updateBoardInput: {
            title: postInput,
            contents: contentInput,
          },
        },
      });
      alert("수정이 완료되었습니다.");
      router.push(`/boards/${router.query.dynamic}`);
    } catch (error) {
      alert(error.message);
    }
  };
  // onchange 안쪽 부분의 함수가 바인딩한다는 뜻, 이러한 것을 이벤트 핸들러함수 라고함
  // if("") === false
  // if("djdks") === true 문자열의 유무에 따라 참거짓 만들기 가능
  // focus 로 빈 문자열 발생시 문제되는 부분으로 포커싱하도록 구현할 예정.
  // 비밀번호 몇자리 이상 체크 구현..?
  return (
    <BoardWriteUI
      WriterInputCheck={WriterInputCheck}
      writerInputError={writerInputError}
      PasswordInputCheck={PasswordInputCheck}
      passwordInputError={passwordInputError}
      PostInputCheck={PostInputCheck}
      postInputError={postInputError}
      ContentInputCheck={ContentInputCheck}
      contentInputError={contentInputError}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
}

//금요일 라우팅 [aaa] 여기에 여러 페이지가 되도록하는데 new폴더가 아니면 다른 입력값을 넣으면 [aaa]안의 js파일로 들어간다.

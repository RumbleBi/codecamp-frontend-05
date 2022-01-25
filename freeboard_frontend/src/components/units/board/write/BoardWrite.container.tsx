import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD); // import해줘야됨!!
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [writerInput, setWriterInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState("");
  const [postInput, setPostInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const [writerInputError, setWriterInputError] = useState("");
  const [passwordInputError, setPasswordInputError] = useState("");
  const [postInputError, setPostInputError] = useState("");
  const [contentInputError, setContentInputError] = useState("");

  const WriterInputCheck = (event: ChangeEvent<HTMLInputElement>) => {
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
  };
  const PasswordInputCheck = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const PostInputCheck = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const ContentInputCheck = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

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
              youtubeUrl: youtubeUrl,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert("통신에러");
        console.log(error);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!writerInput && !postInput && !contentInput) {
      alert("작성자, 제목, 내용중에 입력을 해야합니다.");
      return;
    }
    if (!passwordInput) {
      alert("비밀번호를 입력해주세요.");
      return;
    } // early-exit 패턴 이 if문이 충족되지 않으면 아래의 코드는 작동하지 않는다.

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: passwordInput,
          updateBoardInput: {
            title: postInput,
            contents: contentInput,
            youtubeUrl: youtubeUrl,
          },
        },
      });
      alert("수정이 완료되었습니다.");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error);
    }
  };
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
      isActive={isActive} // boards/new 에서 온 데이터!!
      data={props.data} // boards/edit 페이지에서 온 데이터구나!!
      isEdit={props.isEdit} // boards/new 에서 온 데이터!!
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      // props. 은 boards/new 에서 받아온 것들. 그냥 적힌애들은 여기서 선언된 함수들. 그것들을 프리젠터로 보낸다는 뜻이다.
    />
  );
}

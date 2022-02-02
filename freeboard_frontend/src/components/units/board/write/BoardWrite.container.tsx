import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPost] = useState("");
  const [content, setContent] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [postError, setPostError] = useState("");
  const [contentError, setContentError] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePost = (event: ChangeEvent<HTMLInputElement>) => {
    setPost(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onSuccessAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
      window.scrollTo(100, 500);
    }
    if (password.length > 16 || password.length < 8) {
      setPasswordError("비밀번호를 8~16자리 사이로 입력해주세요.");
      window.scrollTo(100, 500);
    }
    if (post === "") {
      setPostError("제목을 입력해주세요.");
      window.scrollTo(100, 500);
    }
    if (content === "") {
      setContentError("내용을 입력해 주세요.");
      window.scrollTo(100, 500);
    }
    if (
      writer !== "" &&
      password.length >= 8 &&
      password.length <= 16 &&
      post !== "" &&
      content !== ""
    ) {
      try {
        const result: any = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: post,
              contents: content,
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({ content: "통신오류!!!" });
      }
    }
  };

  const onClickUpdate = async () => {
    if (!post && !content) {
      Modal.error({ content: "제목, 내용중에 입력을 해야합니다." });
      return;
    }
    if (!password) {
      Modal.error({ content: "비밀번호를 입력해 주세요." });
      return;
    }

    const UpdateBoardInput: IUpdateBoardInput = {};
    if (post) UpdateBoardInput.post = post;
    if (content) UpdateBoardInput.content = content;
    if (youtubeUrl) UpdateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      UpdateBoardInput.boardAddress = {};
      if (zipcode) UpdateBoardInput.boardAddress.zipcode = zipcode;
      if (address) UpdateBoardInput.boardAddress.address = address;
      if (addressDetail)
        UpdateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: UpdateBoardInput,
        },
      });
      Modal.success({ content: "수정이 완료되었습니다." });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({ content: "통신오류." });
    }
  };
  return (
    <BoardWriteUI
      isOpen={isOpen}
      isActive={isActive}
      address={address}
      addressDetail={addressDetail}
      zipcode={zipcode}
      data={props.data} // boards/edit 에서 온 데이터
      isEdit={props.isEdit} // boards/new 에서 온 데이터
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangePost={onChangePost}
      onChangeContent={onChangeContent}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickAddressSearch={onClickAddressSearch}
      onChangeAddressDetail={onChangeAddressDetail}
      onSuccessAddressSearch={onSuccessAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
      passwordError={passwordError}
      postError={postError}
      contentError={contentError}
    />
  );
}
// focus 로 빈 문자열 발생시 문제되는 부분으로 포커싱하도록 구현할 예정.
// 비밀번호 몇자리 이상 체크 구현..?

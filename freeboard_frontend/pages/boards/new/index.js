import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";
import {
  Wrapper,
  Title,
  ErrorMassage,
  WrapperProfile,
  WrapperWriter,
  WrapperPassword,
  WriterContent,
  PasswordContent,
  Label,
  WrapperName,
  Name,
  NameContent,
  Content,
  ContentInContent,
  Address,
  WrapperAddress,
  AddressNumber,
  AddressSearch,
  AddressDetail1,
  AddressDetail2,
  Youtube,
  YoutubeLink,
  Picture,
  PictureDetail,
  WrapperSetting,
  WrapperPicture,
  MainSetting,
  MainSettingSelect,
  MainSettingFont,
  RegisterBtn,
} from "../../../styles/emotion";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function FreeBoard() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

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
  }
  function PasswordInputCheck(event) {
    setPasswordInput(event.target.value);
  }
  function PostInputCheck(event) {
    setPostInput(event.target.value);
  }
  function ContentInputCheck(event) {
    setContentInput(event.target.value);
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
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  // onchange 안쪽 부분의 함수가 바인딩한다는 뜻, 이러한 것을 이벤트 핸들러함수 라고함
  // if("") === false
  // if("djdks") === true 문자열의 유무에 따라 참거짓 만들기 가능
  // focus 로 빈 문자열 발생시 문제되는 부분으로 포커싱하도록 구현할 예정.
  // 비밀번호 몇자리 이상 체크 구현..?
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WrapperProfile>
        <WrapperWriter>
          <Label>작성자</Label>
          <WriterContent
            type="text"
            onChange={WriterInputCheck}
            placeholder="이름을 적어주세요."
          />
          <ErrorMassage>{writerInputError}</ErrorMassage>
        </WrapperWriter>
        <WrapperPassword>
          <Label>비밀번호</Label>
          <PasswordContent
            type="password"
            onChange={PasswordInputCheck}
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorMassage>{passwordInputError}</ErrorMassage>
        </WrapperPassword>
      </WrapperProfile>
      <Name>제목</Name>
      <WrapperName>
        <NameContent
          type="text"
          onChange={PostInputCheck}
          placeholder="제목을 적어주세요."
        />
        <ErrorMassage>{postInputError}</ErrorMassage>
      </WrapperName>
      <Content>내용</Content>
      <ContentInContent
        type="textarea"
        onChange={ContentInputCheck}
        placeholder="내용을 입력해 주세요."
      />
      <ErrorMassage>{contentInputError}</ErrorMassage>
      <Address>주소</Address>
      <WrapperAddress>
        <AddressNumber type="text" placeholder="07250" />
        <AddressSearch>우편번호 검색</AddressSearch>
      </WrapperAddress>
      <AddressDetail1 type="text" />
      <AddressDetail2 type="text" />
      <Youtube>유튜브</Youtube>
      <YoutubeLink type="text" placeholder="링크를 복사해주세요." />
      <Picture>사진 첨부</Picture>
      <WrapperPicture>
        <PictureDetail>+ Upload</PictureDetail>
        <PictureDetail>+ Upload</PictureDetail>
        <PictureDetail>+ Upload</PictureDetail>
      </WrapperPicture>
      <MainSetting>메인 설정</MainSetting>
      <WrapperSetting>
        <MainSettingSelect type="radio" name="select" />
        <MainSettingFont>유튜브</MainSettingFont>
        <MainSettingSelect type="radio" name="select" />
        <MainSettingFont>사진</MainSettingFont>
      </WrapperSetting>
      <RegisterBtn onClick={onClickSubmit}>등록하기</RegisterBtn>
    </Wrapper>
  );
}

//금요일 라우팅 [aaa] 여기에 여러 페이지가 되도록하는데 new폴더가 아니면 다른 입력값을 넣으면 [aaa]안의 js파일로 들어간다.

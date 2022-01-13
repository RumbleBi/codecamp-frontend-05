import { useState } from 'react'
import { useMutation, gql } from '@apollo/client';
import {
    Wrapper,
    Titile,
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
    RegisterBtn
} from '../../../styles/emotion'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`


export default function EmotionPage() {

    const [WriterInput, setWriterInput] = useState("")
    const [PasswordInput, setPasswordInput] = useState("")
    const [PostInput, setPostInput] = useState("")
    const [ContentInput, setContentInput] = useState("")

    const [WriterInputError, setWriterInputError] = useState("")
    const [PasswordInputError, setPasswordInputError] = useState("")
    const [PostInputError, setPostInputError] = useState("")
    const [ContentInputError, setContentInputError] = useState("")

    function WriterInputCheck(event) {
        setWriterInput(event.target.value)
    }
    function PasswordInputCheck(event) {
        setPasswordInput(event.target.value)
    }
    function PostInputCheck(event) {
        setPostInput(event.target.value)
    }
    function ContentInputCheck(event) {
        setContentInput(event.target.value)
    }

    const [createBoard] = useMutation(CREATE_BOARD);

    const submitData = async() => {
      await createBoard({
        variables: {
          writer: WriterInput,
          title: PostInput,
          contents: ContentInput
        }
      })
    }
    
    function InputCheckError() {

      submitData();

      if (WriterInput !== "" && PasswordInput !== "" && PostInput !== "" && ContentInput !== "") {
          alert("게시물을 등록했습니다.")
      }
      if (WriterInput === "") {
          setWriterInputError("작성자를 입력해주세요.")
      }
      if (PasswordInput === "") {
          setPasswordInputError("비밀번호를 입력해주세요.")
      }
      if (PostInput === "") {
          setPostInputError("제목을 입력해주세요.")
      }
      if (ContentInput === "") {
          setContentInputError("내용을 입력해 주세요.")
      }
  }
    // onchange 안쪽 부분의 함수가 바인딩한다는 뜻, 이러한 것을 이벤트 핸들러함수 라고함
    // if("") === false
    // if("djdks") === true 문자열의 유무에 따라 참거짓 만들기 가능
    // focus 로 빈 문자열 발생시 문제되는 부분으로 포커싱하도록 구현할 예정.
    // 비밀번호 몇자리 이상 체크 구현..?
  return (
    <Wrapper>
      <Titile>게시물 등록</Titile>
      <WrapperProfile>
        <WrapperWriter>
            <Label>작성자</Label>
            <WriterContent type="text" onChange={WriterInputCheck}placeholder="이름을 적어주세요." />
            <ErrorMassage>{WriterInputError}</ErrorMassage>
        </WrapperWriter>
        <WrapperPassword>
            <Label>비밀번호</Label>
            <PasswordContent type="password" onChange={PasswordInputCheck} placeholder="비밀번호를 입력해주세요." />
            <ErrorMassage>{PasswordInputError}</ErrorMassage>
        </WrapperPassword> 
      </WrapperProfile>
      <Name>제목</Name>
        <WrapperName>
          <NameContent type="text" onChange={PostInputCheck} placeholder="제목을 적어주세요." />
          <ErrorMassage>{PostInputError}</ErrorMassage>
        </WrapperName>
      <Content>내용</Content>
      <ContentInContent type="textarea" onChange={ContentInputCheck} placeholder="내용을 입력해 주세요." />
      <ErrorMassage>{ContentInputError}</ErrorMassage>
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
      <RegisterBtn onClick={InputCheckError}>등록하기</RegisterBtn>
    </Wrapper>
  );
}
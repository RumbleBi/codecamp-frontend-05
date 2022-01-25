import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "게시판수정" : "게시판등록"}</S.Title>
      <S.WrapperProfile>
        <S.WrapperWriter>
          <S.Label>작성자</S.Label>
          <S.WriterContent
            type="text"
            onChange={props.WriterInputCheck} // 컨테이너의 WriterInputCheck(event) 함수를 실행한다. 그러면 받는 입장에서 정의를 해줘야한다.
            placeholder="이름을 적어주세요."
            defaultValue={props.data?.fetchBoard.writer}
            // readOnly={!!props.data?.fetchBoard.writer} !! 이중타입연산자 boolean타입으로 만들때 쓴다
          />
          <S.ErrorMassage>{props.writerInputError}</S.ErrorMassage>
        </S.WrapperWriter>
        <S.WrapperPassword>
          <S.Label>비밀번호</S.Label>
          <S.PasswordContent
            type="password"
            onChange={props.PasswordInputCheck}
            // password는 다른 방식으로 일치하는지 만들어줘야할듯
            placeholder="비밀번호를 입력해주세요."
          />
          <S.ErrorMassage>{props.passwordInputError}</S.ErrorMassage>
        </S.WrapperPassword>
      </S.WrapperProfile>
      <S.Name>제목</S.Name>
      <S.WrapperName>
        <S.NameContent
          type="text"
          onChange={props.PostInputCheck}
          placeholder="제목을 적어주세요."
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.ErrorMassage>{props.postInputError}</S.ErrorMassage>
      </S.WrapperName>
      <S.Content>내용</S.Content>
      <S.ContentInContent
        type="textarea"
        onChange={props.ContentInputCheck}
        placeholder="내용을 입력해 주세요."
        defaultValue={props.data?.fetchBoard.contents}
      />
      <S.ErrorMassage>{props.contentInputError}</S.ErrorMassage>
      <S.Address>주소</S.Address>
      <S.WrapperAddress>
        <S.AddressNumber type="text" placeholder="07250" />
        <S.AddressSearch>우편번호 검색</S.AddressSearch>
      </S.WrapperAddress>
      <S.AddressDetail1 type="text" />
      <S.AddressDetail2 type="text" />
      <S.Youtube>유튜브</S.Youtube>
      <S.YoutubeLink type="text" placeholder="링크를 복사해주세요." />
      <S.Picture>사진 첨부</S.Picture>
      <S.WrapperPicture>
        <S.PictureDetail>+ Upload</S.PictureDetail>
        <S.PictureDetail>+ Upload</S.PictureDetail>
        <S.PictureDetail>+ Upload</S.PictureDetail>
      </S.WrapperPicture>
      <S.MainSetting>메인 설정</S.MainSetting>
      <S.WrapperSetting>
        <S.MainSettingSelect type="radio" name="select" />
        <S.MainSettingFont>유튜브</S.MainSettingFont>
        <S.MainSettingSelect type="radio" name="select" />
        <S.MainSettingFont>사진</S.MainSettingFont>
      </S.WrapperSetting>
      <S.RegisterBtn
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.RegisterBtn>
    </S.Wrapper>
  );
}

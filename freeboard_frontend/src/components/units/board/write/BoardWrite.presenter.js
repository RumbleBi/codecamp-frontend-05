import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Title>게시물 등록</S.Title>
      <S.WrapperProfile>
        <S.WrapperWriter>
          <S.Label>작성자</S.Label>
          <S.WriterContent
            type="text"
            onChange={props.WriterInputCheck}
            placeholder="이름을 적어주세요."
          />
          <ErrorMassage>{props.writerInputError}</ErrorMassage>
        </S.WrapperWriter>
        <S.WrapperPassword>
          <S.Label>비밀번호</S.Label>
          <S.PasswordContent
            type="password"
            onChange={props.PasswordInputCheck}
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
        />
        <S.ErrorMassage>{props.postInputError}</S.ErrorMassage>
      </S.WrapperName>
      <S.Content>내용</S.Content>
      <S.ContentInContent
        type="textarea"
        onChange={props.ContentInputCheck}
        placeholder="내용을 입력해 주세요."
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
      <S.RegisterBtn onClick={props.onClickSubmit} isActive={props.isActive}>
        등록하기
      </S.RegisterBtn>
    </S.Wrapper>
  );
}

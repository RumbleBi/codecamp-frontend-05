import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { Fragment } from "react";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <Fragment>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onSuccessAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시판수정" : "게시판등록"}</S.Title>
        <S.WrapperProfile>
          <S.WrapperWriter>
            <S.Label>작성자</S.Label>
            <S.WriterContent
              ref={props.inputRef}
              type="text"
              onChange={props.onChangeWriter}
              placeholder="이름을 적어주세요."
              defaultValue={props.data?.fetchBoard?.writer || ""}
              readOnly={!!props.data?.fetchBoard?.writer}
            />
            <S.ErrorMassage>{props.writerError}</S.ErrorMassage>
          </S.WrapperWriter>
          <S.WrapperPassword>
            <S.Label>비밀번호</S.Label>
            <S.PasswordContent
              type="password"
              onChange={props.onChangePassword}
              // password는 다른 방식으로 일치하는지 만들어줘야할듯
              placeholder="비밀번호를 입력해주세요."
            />
            <S.ErrorMassage>{props.passwordError}</S.ErrorMassage>
          </S.WrapperPassword>
        </S.WrapperProfile>
        <S.WrapperName>
          <S.Name>제목</S.Name>
          <S.NameContent
            type="text"
            onChange={props.onChangePost}
            placeholder="제목을 적어주세요."
            defaultValue={props.data?.fetchBoard?.title}
          />
          <S.ErrorMassage>{props.postError}</S.ErrorMassage>
        </S.WrapperName>
        <S.Content>내용</S.Content>
        <S.ContentInContent
          onChange={props.onChangeContent}
          placeholder="내용을 입력해 주세요."
          defaultValue={props.data?.fetchBoard?.contents}
        />
        <S.ErrorMassage>{props.contentError}</S.ErrorMassage>
        <S.Address>주소</S.Address>
        <S.WrapperAddress>
          <S.Zipcode
            placeholder="00000"
            readOnly
            value={
              props.zipcode ||
              props.data?.fetchBoard?.boardAddress?.zipcode ||
              ""
            }
          />
          <S.AddressSearchBtn onClick={props.onClickAddressSearch}>
            우편번호 검색
          </S.AddressSearchBtn>
        </S.WrapperAddress>
        <S.AddressDetail1
          readOnly
          value={
            props.address || props.data?.fetchBoard?.boardAddress?.address || ""
          }
        />
        <S.AddressDetail2
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard?.boardAddress?.addressDetail || ""
          }
        />
        <S.Youtube>유튜브</S.Youtube>
        <S.YoutubeUrl
          placeholder="링크를 넣어주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard?.youtubeUrl || ""}
        />
        <S.Picture>사진 첨부</S.Picture>
        <S.WrapperPicture>
          <input
            style={{ display: "none" }}
            ref={props?.fileRef}
            type="file"
            onChange={props?.onChangeFile}
          />
          <img src={`https://storage.googleapis.com/${props.image[0]}`} />
          <S.PictureDetail onClick={props?.onClickImage}>
            + Upload
          </S.PictureDetail>
          <img src={`https://storage.googleapis.com/${props.image[1]}`} />
          <S.PictureDetail onClick={props?.onClickImage}>
            + Upload
          </S.PictureDetail>
          <img src={`https://storage.googleapis.com/${props.image[2]}`} />
          <S.PictureDetail onClick={props?.onClickImage}>
            + Upload
          </S.PictureDetail>
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
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.RegisterBtn>
      </S.Wrapper>
    </Fragment>
  );
}

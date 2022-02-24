import * as S from "./UseditemCommentWrite.styles";

export default function UseditemCommentWriteUI(props) {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Writer>{props.name}</S.Writer>
        <S.InputContents
          onChange={props.onChangeContents}
          placeholder="댓글내용"
        />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          defaultValue={props.el?.contents}
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="문의내용을 적어주세요!"
        />
        <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
        <S.ContentsBtn
          onClick={
            props.isEdit
              ? props.onClickCommentUpdate
              : props.onClickCommentWrite
          }
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.ContentsBtn>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

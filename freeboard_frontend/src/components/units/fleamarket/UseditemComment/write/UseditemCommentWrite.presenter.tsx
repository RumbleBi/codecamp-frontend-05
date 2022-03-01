import * as S from "./UseditemCommentWrite.styles";

export default function UseditemCommentWriteUI(props) {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.InputContents
          defaultValue={props.el?.contents}
          onChange={props.onChangeContents}
          placeholder="댓글내용"
          maxLength={100}
        />
        <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
      </S.InputWrapper>
      <S.ContentsWrapper>
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

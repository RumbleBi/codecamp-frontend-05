import { useContext } from "react";
import { RegContext } from "../../../../../../pages/fleamarket/reg";
import * as S from "./UseditemCommentWrite.styles";

export default function UseditemCommentWriteUI(props) {
  const { isEdit } = useContext(RegContext);
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
            isEdit ? props.onClickCommentUpdate : props.onClickCommentWrite
          }
        >
          {isEdit ? "수정하기" : "등록하기"}
        </S.ContentsBtn>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

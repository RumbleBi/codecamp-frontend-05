import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Fragment } from "react";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <Fragment>
      <S.Wrapper>
        {!props.isEdit && (
          <div>
            <S.PencilIcon src="/images/boardComment/write/pencil.png" />
            <S.TEXT>댓글</S.TEXT>
          </div>
        )}
        <S.InputWrapper>
          <S.InputWriterAndPassword
            readOnly={!!props.el?.writer}
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.el?.writer}
          />
          <S.InputWriterAndPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <S.Star onChange={props.onChangeStar} />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents
            defaultValue={props.el?.contents}
            maxLength={100}
            onChange={props.onChangeContent}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.ContentsInfo>{props.content.length}/100</S.ContentsInfo>
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
    </Fragment>
  );
}

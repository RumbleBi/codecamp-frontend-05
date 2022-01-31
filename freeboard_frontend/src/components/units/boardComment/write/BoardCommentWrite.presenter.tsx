import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.PencilIcon src="/images/boardComment/write/pencil.png" />
      <S.TEXT>댓글</S.TEXT>
      <S.InputWrapper>
        <S.InputWriterAndPassword
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer || ""}
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
          maxLength={100}
          onChange={props.onChangeContent}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.ContentsInfo>{props.content.length}/100</S.ContentsInfo>
        <S.ContentsBtn onClick={props.onClickCommentWrite}>
          등록하기
        </S.ContentsBtn>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

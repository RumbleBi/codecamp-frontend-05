import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Page>
      <S.Wrapper>
        <S.Header>
          {/* <S.HeaderIcon src=""></S.HeaderIcon> */}
          <S.HeaderForm>
            <S.HeaderFormWriter>
              {props.data?.fetchBoard?.writer}
            </S.HeaderFormWriter>
            <S.HeaderFormCreateAt>
              {getDate(props.data?.fetchBoard?.createAt)}
            </S.HeaderFormCreateAt>
          </S.HeaderForm>
          {/* <S.HeaderIcon2 src=""></S.HeaderIcon2> */}
        </S.Header>
        <S.Body>
          <S.BodyTitle>{props.data?.fetchBoard?.title}</S.BodyTitle>
          <S.BodyContents>{props.data?.fetchBoard?.contents}</S.BodyContents>
          <S.BodyButton onClick={props.onClickMoveToList}>
            목록으로
          </S.BodyButton>
          <S.BodyButton onClick={props.onClickMoveToEdit}>
            수정하기
          </S.BodyButton>
          <S.BodyButton onClick={props.onClickDeleteBoard}>
            삭제하기
          </S.BodyButton>
        </S.Body>
        <S.Bottom>
          <S.BottomWriteIcon></S.BottomWriteIcon>
          <S.BottomCommentText></S.BottomCommentText>
          <S.BottomCommentWriter placeholder="작성자"></S.BottomCommentWriter>
          <S.BottomCommentPassword placeholder="비밀번호"></S.BottomCommentPassword>
          <S.BottomCommentInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 당사자에게 있습니다."></S.BottomCommentInput>
          <S.BottomCommentSubmitBtn>등록하기</S.BottomCommentSubmitBtn>
          <S.BottomCommentShow>
            <S.BottomCommentFaceIcon></S.BottomCommentFaceIcon>
            <S.BottomCommentRewriteIcon></S.BottomCommentRewriteIcon>
            <S.BottomCommentDeleteIcon></S.BottomCommentDeleteIcon>
            <S.BottomCommentDate></S.BottomCommentDate>
            <S.BottomCommentRate></S.BottomCommentRate>
          </S.BottomCommentShow>
        </S.Bottom>
      </S.Wrapper>
    </S.Page>
  );
}

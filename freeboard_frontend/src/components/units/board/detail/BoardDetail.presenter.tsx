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
        </S.Body>
        <S.BodyButtonWrapper>
          <S.BodyButton onClick={props.onClickMoveToList}>
            목록으로
          </S.BodyButton>
          <S.BodyButton onClick={props.onClickMoveToEdit}>
            수정하기
          </S.BodyButton>
          <S.BodyButton onClick={props.onClickDeleteBoard}>
            삭제하기
          </S.BodyButton>
        </S.BodyButtonWrapper>
      </S.Wrapper>
    </S.Page>
  );
}

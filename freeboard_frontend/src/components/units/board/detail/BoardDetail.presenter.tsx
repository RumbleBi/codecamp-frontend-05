import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderForm>
          <S.HeaderAvatarIcon src="/images/avatar_icon40X40.png" />
          <S.HeaderInfo>
            <S.HeaderFormWriter>
              {props.data?.fetchBoard?.writer}
            </S.HeaderFormWriter>
            <S.HeaderFormCreateAt>
              {getDate(props.data?.fetchBoard.createAt)}
            </S.HeaderFormCreateAt>
          </S.HeaderInfo>
          <S.HeaderLocationIcon src="/images/board/detail/location_icon.png" />
          <S.HeaderLinkIcon src="/images/board/detail/link_icon.png" />
        </S.HeaderForm>
      </S.Header>
      <S.Body>
        <S.BodyTitle>{props.data?.fetchBoard?.title}</S.BodyTitle>
        <S.BodyContents>{props.data?.fetchBoard?.contents}</S.BodyContents>
        <S.BodyYoutube
          url={props.data?.fetchBoard.youtubeUrl}
          width="20vw"
          height="15vh"
        />
        <S.BodyLikeIcon
          onClick={props.onClickLikeBoard}
          src="/images/board/detail/like_icon.png"
        />
        <S.BodyDislikeIcon
          onClick={props.onClickDislikeBoard}
          src="/images/board/detail/dislike_icon.png"
        />
        <S.BodyWrapperCount>
          <S.BodyDislikeCount>
            {props.data?.fetchBoard?.likeCount}
          </S.BodyDislikeCount>
          <S.BodyLikeCount>
            {props.data?.fetchBoard?.dislikeCount}
          </S.BodyLikeCount>
        </S.BodyWrapperCount>
      </S.Body>
      <S.BodyButtonWrapper>
        <S.BodyButton onClick={props.onClickMoveToList}>목록으로</S.BodyButton>
        <S.BodyButton onClick={props.onClickMoveToEdit}>수정하기</S.BodyButton>
        <S.BodyButton onClick={props.onClickDeleteBoard}>삭제하기</S.BodyButton>
      </S.BodyButtonWrapper>
    </S.Wrapper>
  );
}

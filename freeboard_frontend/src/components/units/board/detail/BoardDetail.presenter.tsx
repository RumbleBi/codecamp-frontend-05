import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderForm>
        <S.AvatarWrapper>
          <S.HeaderAvatarIcon src="/images/avatar_icon40X40.png" />
          <S.Info>
            <S.HeaderFormWriter>
              {props.data?.fetchBoard?.writer}
            </S.HeaderFormWriter>
            <S.HeaderFormCreateAt>
              {getDate(props.data?.fetchBoard.createdAt)}
            </S.HeaderFormCreateAt>
          </S.Info>
        </S.AvatarWrapper>
        <S.IconWrapper>
          <S.HeaderLinkIcon src="/images/board/detail/link_icon.png" />
          <S.HeaderLocationIcon src="/images/board/detail/location_icon.png" />
        </S.IconWrapper>
      </S.HeaderForm>
      <S.Body>
        <S.BodyTitle>{props.data?.fetchBoard?.title}</S.BodyTitle>
        <S.BodyContents>{props.data?.fetchBoard?.contents}</S.BodyContents>
        <S.YoutubeWrapper>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.BodyYoutube
              url={props.data?.fetchBoard?.youtubeUrl}
              width="480px"
              height="300px"
              controls={true}
              light={false}
            />
          )}
        </S.YoutubeWrapper>
        <S.ImageWrapper>
          <S.ImageItem
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
          />
          <S.ImageItem
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[1]}`}
          />
          <S.ImageItem
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[2]}`}
          />
        </S.ImageWrapper>
        <S.BodyReactWrapper>
          <S.BodyLikeIcon
            onClick={props.onClickLikeBoard}
            src="/images/board/detail/like_icon.png"
          />
          <S.BodyDislikeIcon
            onClick={props.onClickDislikeBoard}
            src="/images/board/detail/dislike_icon.png"
          />
        </S.BodyReactWrapper>
        <S.BodyWrapperCount>
          <S.BodyLikeCount>
            {props.data?.fetchBoard?.dislikeCount}
          </S.BodyLikeCount>
          <S.BodyDislikeCount>
            {props.data?.fetchBoard?.likeCount}
          </S.BodyDislikeCount>
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

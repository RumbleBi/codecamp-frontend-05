import * as S from './BoardDetail.styles'
import { getDate } from '../../../../commons/libraries/utils'
import { IBoardDetailUIProps } from './BoardDetail.types'
import Button02 from '../../../commons/buttons/02'

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.HeaderForm>
          <S.AvatarWrapper>
            <S.HeaderAvatarIcon src="/images/avatar_icon40X40.png" />
            <S.Info>
              <div>작성자 : {props.data?.fetchBoard?.writer}</div>
              <div>작성날짜 : {getDate(props.data?.fetchBoard.createdAt)}</div>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <img src="/images/board/detail/link_icon.png" />
            <img src="/images/board/detail/location_icon.png" />
          </S.IconWrapper>
        </S.HeaderForm>
        <S.Body>
          <S.BodyTitle>제목 : {props.data?.fetchBoard?.title}</S.BodyTitle>
          <S.BodyContents>{props.data?.fetchBoard?.contents}</S.BodyContents>
          <S.YoutubeWrapper>
            {props.data?.fetchBoard.youtubeUrl && (
              <S.BodyYoutube
                url={props.data?.fetchBoard?.youtubeUrl}
                width="300px"
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
        </S.Body>
        <S.BodyReactWrapper>
          <img
            onClick={props.onClickLikeBoard}
            src="/images/board/detail/like_icon.png"
          />
          <img
            onClick={props.onClickDislikeBoard}
            src="/images/board/detail/dislike_icon.png"
          />
        </S.BodyReactWrapper>
        <S.BodyCountWrapper>
          <span>{props.data?.fetchBoard?.likeCount}</span>
          <span>{props.data?.fetchBoard?.dislikeCount}</span>
        </S.BodyCountWrapper>
        <S.BodyButtonWrapper>
          <Button02 onClick={props.onClickMoveToList} name={'목록으로'} />
          <Button02 onClick={props.onClickMoveToEdit} name={'수정하기'} />
          <Button02 onClick={props.onClickDeleteBoard} name={'삭제하기'} />
        </S.BodyButtonWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

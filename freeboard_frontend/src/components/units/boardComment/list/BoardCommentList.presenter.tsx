import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper key={el?._id} id={el?.writer}>
          <S.WrapperComment>
            <S.Comment>{el?.contents}</S.Comment>
            <S.CommentWriter>{el?.writer}</S.CommentWriter>
            <S.CommentAvatarIcon src="" />
            {/* <S.CommentStar /> 미구현 */}
            <S.CommentCreatedAt>{el?.createdAt}</S.CommentCreatedAt>
            <S.CommentPencilIcon src="" />
            <S.CommentDeleteIcon
              src=""
              id={el._id}
              onClick={props.onClickDelete}
            />
          </S.WrapperComment>
        </S.Wrapper>
      ))}
      <S.CommentListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.dataList?.fetchBoardComments?.map((el) => (
            <div key={el._id}>
              <span>
                제목: {el.title} 내용: {el.writer}
              </span>
            </div>
          ))}
        </InfiniteScroll>
      </S.CommentListWrapper>
    </div>
  );
}

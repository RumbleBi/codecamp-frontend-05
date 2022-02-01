import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";

// id={el?.writer} S.Wrapper key 옆에 넣기

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.isOpen && (
        <Modal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper key={el?._id} id={el?.writer}>
          <S.WrapperComment>
            <S.CommentAvatarIcon src="/images/avatar_icon40X40.png" />
            <S.WriterWrapper>
              <S.CommentWriter>{el?.writer}</S.CommentWriter>
              <S.CommentStar value={el?.rating} disabled />
            </S.WriterWrapper>
            <S.Comment>{el?.contents}</S.Comment>
          </S.WrapperComment>
          <S.CommentOptionWrapper>
            <S.CommentPencilIcon src="/images/boardComment/list/comment_pencil_icon.png" />
            <S.CommentDeleteIcon
              id={el._id}
              src="/images/boardComment/list/comment_delete_icon.png"
              onClick={props.onClickDeleteModal}
            />
          </S.CommentOptionWrapper>
          <S.CommentCreatedAt>{el?.createdAt}</S.CommentCreatedAt>
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

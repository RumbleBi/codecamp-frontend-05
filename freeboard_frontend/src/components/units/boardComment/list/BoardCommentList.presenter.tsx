import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Modal } from "antd";
// import InfiniteScroll from "react-infinite-scroller";

// id={el?.writer} S.Wrapper key 옆에 넣기

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {/* 모달 부분은 1개이지만, 아래 map에서 뿌려주는 코드는 10개가 있는 것이다. 좋지않음. */}
      1번째 댓글이랑 2번째 댓글을 삭제할 때, 새롭게 모달이 꺼졌다 켜졌다 하면서
      state의 변수가 바뀐다.
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
        <S.Wrapper key={el._id}>
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
          {/* <S.CommentListWrapper>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {props.dataList?.fetchBoardComments.map((el) => (
                <div key={el._id}>
                  <span>
                    글쓴이: {el.writer} 댓글: {el.contents}
                  </span>
                </div>
              ))}
            </InfiniteScroll>
          </S.CommentListWrapper> */}
        </S.Wrapper>
      ))}
    </>
  );
}

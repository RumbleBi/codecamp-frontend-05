import * as S from "./UseditemCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import UseditemCommentListUIItem from "./UseditemCommentList.presenterItem";

export default function UseditemCommentListUI(props) {
  if (!props.data) return <div />;
  return (
    <S.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <UseditemCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}

import * as S from "./UseditemCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import UseditemCommentListUIItem from "./UseditemCommentList.presenterItem";
import UseditemAnswerWrite from "../AnswerWrite/UseditemAnswerWrite";
import UseditemAnswerList from "../AnswerList/UseditemAnswerList";

export default function UseditemCommentListUI(props) {
  if (!props.data) return <div />;
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditemQuestions.map((el) => (
            <div key={el._id}>
              <UseditemCommentListUIItem el={el} />
              {props.answerData?.fetchUseditemQuestionsAnswers.map((el) => (
                <UseditemAnswerList el={el} key={el._id} />
              ))}
            </div>
          ))}
        </InfiniteScroll>
      </S.CommentWrapper>
      {/* <UseditemAnswerList questionId={props.data?.fetchUseditemQuestions._id} /> */}
    </S.Wrapper>
  );
}

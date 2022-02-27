import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";
import UseditemAnswerWrite from "../AnswerWrite/UseditemAnswerWrite";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./UseditemAnswerList.queries";
import UseditemAnswerListItem from "./UseditemAnswerListItem";

export default function UseditemAnswerList(props) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.questionId },
  });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  }
  return (
    <div>
      <UseditemAnswerWrite />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestionAnswers.map((el) => (
          <UseditemAnswerListItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

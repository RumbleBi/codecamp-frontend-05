import { useQuery } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroller'
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
} from '../../../../../commons/types/generated/types'
import UseditemAnswerWrite from '../AnswerWrite/UseditemAnswerWrite'
import { FETCH_USEDITEM_QUESTION_ANSWERS } from './UseditemAnswerList.queries'
import UseditemAnswerListItem from './UseditemAnswerList.presenterItem'
import { FETCH_USEDITEM_QUESTIONS } from '../list/UseditemCommentList.queries'

export default function UseditemAnswerList(props) {
  // 대댓글 보여주기
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestionAnswers'>,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  })

  // 댓글에 id값 가져오기
  const { data: AnswerData } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestions'>,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    // variables: { useditemId: },
  })

  function onLoadMore() {
    if (!data) return
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
          }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        }
      },
    })
  }
  return (
    <div>
      <UseditemAnswerWrite questionData={props.data} />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestionAnswers.map((el) => (
          <UseditemAnswerListItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

import { useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from '../../../../../commons/types/generated/types'
import { FETCH_USEDITEM_QUESTION_ANSWERS } from './UseditemAnswerList.queries'
import UseditemAnswerListUI from './UseditemAnswerList.presenter'
import { useRouter } from 'next/router'

export default function UseditemAnswerList(props) {
  const router = useRouter()

  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestionAnswers'>,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(router.query.useditemQuestionId),
      page: 1,
    },
  })

  console.log('==========')
  console.log(props.answersData)
  console.log(props.answersData?.fetchUseditemQuestionAnswers[0]._id)
  console.log('==========')

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
    <UseditemAnswerListUI
      onLoadMore={onLoadMore}
      questionData={props.data}
      answersData={props.answersData}
    />
  )
}

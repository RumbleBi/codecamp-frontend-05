import * as S from './UseditemCommentList.styles'
import InfiniteScroll from 'react-infinite-scroller'
import UseditemCommentListUIItem from './UseditemCommentList.presenterItem'
import UseditemAnswerWrite from '../AnswerWrite/UseditemAnswerWrite'
import UseditemAnswerList from '../AnswerList/UseditemAnswerList.container'

export default function UseditemCommentListUI(props) {
  if (!props.data) return <div />
  return (
    <S.Position>
      <S.Wrapper style={{ border: 'none' }}>
        <S.CommentWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.data?.fetchUseditemQuestions.map((el) => (
              <div key={el._id}>
                <div>{el.user.name}</div>
                <UseditemCommentListUIItem
                  el={el}
                  onClickDelete={props.onClickDelete}
                />
              </div>
            ))}
          </InfiniteScroll>
        </S.CommentWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

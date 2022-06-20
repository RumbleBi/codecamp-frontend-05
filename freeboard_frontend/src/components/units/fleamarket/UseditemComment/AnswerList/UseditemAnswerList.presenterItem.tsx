import { useMutation } from '@apollo/client'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from '../../../../../commons/types/generated/types'
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from './UseditemAnswerList.queries'
import * as S from './UseditemAnswerList.styles'
import UseditemAnswerWrite from '../AnswerWrite/UseditemAnswerWrite'
import { useRouter } from 'next/router'

export default function UseditemAnswerListItemUI(props) {
  const router = useRouter()
  // 여기서 댓글 데이터를 가져온다?
  const [isEdit, setIsEdit] = useState(false)
  console.log('#######')
  console.log(props.answersData)
  console.log(props.el)
  console.log('#######')
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestionAnswer'>,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER)

  const onClickUpdate = async () => {
    setIsEdit(true)
  }
  async function onClickDelete() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionAnswerId: props.el?._id,
            },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <S.Position>
      {!isEdit && (
        <S.Wrapper>
          <S.UserWrapper>
            <S.Picture
              src={`https://storage.googleapis.com/${props.el?.user.picture}`}
            />
            <S.Name>{props.el?.user?.name}</S.Name>
          </S.UserWrapper>
          <S.ContentsWrapper>
            <S.Contents>{props.el?.contents}</S.Contents>
            <div>
              <BsFillPencilFill
                style={{
                  marginRight: '20px',
                  fontSize: '18px',
                  color: '#2155cd',
                  cursor: 'pointer',
                }}
                onClick={onClickUpdate}
              />
              <BsFillTrashFill
                style={{
                  marginRight: '20px',
                  fontSize: '18px',
                  color: '#2155cd',
                  cursor: 'pointer',
                }}
                onClick={onClickDelete}
              />
            </div>
          </S.ContentsWrapper>
        </S.Wrapper>
      )}
      {isEdit && (
        <UseditemAnswerWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
          answersData={props.answersData}
        />
      )}
    </S.Position>
  )
}

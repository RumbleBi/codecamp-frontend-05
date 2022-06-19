import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getDate } from '../../../../../commons/libraries/utils'
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from '../../../../../commons/types/generated/types'
import UseditemAnswerList from '../AnswerList/UseditemAnswerList.container'
import UseditemAnswerWrite from '../AnswerWrite/UseditemAnswerWrite'
import UseditemCommentWrite from '../write/UseditemCommentWrite.container'
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from './UseditemCommentList.queries'
import * as S from './UseditemCommentList.styles'

export default function UseditemCommentListUIItem(props) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [isAnswerEdit, setIsAnswerEdit] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const { data: answersData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS)

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestion'>,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION)

  function onClickUpdate() {
    setIsEdit(true)
  }

  const onClickAnswer = () => {
    setIsAnswerEdit(true)
  }

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
    setIsOpenDeleteModal(false)
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true)
  }
  function onClickCancelModal() {
    setIsOpenDeleteModal(false)
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCancelModal}
        >
          <div>삭제하시겠습니까?</div>
        </Modal>
      )}
      {!isEdit && (
        <div>
          <S.Wrapper2>
            <div>
              <S.UserWrapper>
                <S.UserImage
                  src={`https://storage.googleapis.com/${props.el?.user.picture}`}
                />
                <S.Name>{props.el?.user.name}</S.Name>
                <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
              </S.UserWrapper>
            </div>
            <S.Contents>{props.el?.contents}</S.Contents>
            <S.BtnWrapper>
              <div onClick={onClickUpdate}>수정하기</div>
              <div onClick={onClickOpenDeleteModal}>삭제하기</div>
            </S.BtnWrapper>
          </S.Wrapper2>
        </div>
      )}
      {isEdit && (
        <UseditemCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  )
}

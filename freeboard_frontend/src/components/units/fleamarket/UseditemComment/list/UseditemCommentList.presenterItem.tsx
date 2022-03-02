import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import UseditemAnswerList from "../AnswerList/UseditemAnswerList.container";
import UseditemAnswerWrite from "../AnswerWrite/UseditemAnswerWrite";
import UseditemCommentWrite from "../write/UseditemCommentWrite.container";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./UseditemCommentList.queries";
import * as S from "./UseditemCommentList.styles";

export default function UseditemCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  function onClickUpdate() {
    setIsEdit(true);
  }

  const onClickAnswer = () => {
    setIsAnswerEdit(true);
  };

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
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setIsOpenDeleteModal(false);
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }
  function onClickCancelModal() {
    setIsOpenDeleteModal(false);
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
        <S.Wrapper2>
          <S.QuestionWrapper>
            <S.Name>{props.el?.name}</S.Name>
            <S.Contents>{props.el?.contents}</S.Contents>
          </S.QuestionWrapper>
          <div>
            <S.ChangeButton onClick={onClickUpdate}>수정하기</S.ChangeButton>
            <S.DeleteButton onClick={onClickOpenDeleteModal}>
              삭제하기
            </S.DeleteButton>
            <S.AnswerButton onClick={onClickAnswer}>답글달기</S.AnswerButton>
          </div>
        </S.Wrapper2>
      )}

      {isAnswerEdit && <UseditemAnswerList data={props.el} />}
      {isEdit && (
        <UseditemCommentWrite
          isEdit={props.isEdit}
          setIsEdit={props.setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}

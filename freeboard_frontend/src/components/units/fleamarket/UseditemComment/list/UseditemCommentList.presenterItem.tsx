import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import UseditemCommentWrite from "../write/UseditemCommentWrite.container";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./UseditemCommentList.queries";
import * as S from "./UseditemCommentList.styles";
export default function UseditemCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  function onClickUpdate() {
    setIsEdit(true);
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
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  return (
    <>
      {isOpenDeleteModal && <Modal visible={true} onOk={onClickDelete}></Modal>}
      {!isEdit && (
        <S.Wrapper>
          <S.QuestionWrapper>
            <S.Name>{props.el?.name}</S.Name>
            <S.Contents>{props.el?.contents}</S.Contents>
          </S.QuestionWrapper>
          <S.ChangeButton onClick={onClickUpdate}>수정하기</S.ChangeButton>
        </S.Wrapper>
      )}
      {isEdit && (
        <UseditemCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}

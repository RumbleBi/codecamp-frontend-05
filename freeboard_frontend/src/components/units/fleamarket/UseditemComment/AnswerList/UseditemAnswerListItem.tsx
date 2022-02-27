import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./UseditemAnswerList.queries";
import { Modal } from "antd";
import * as S from "./UseditemAnswerList.styles";
import UseditemAnswerWrite from "../AnswerWrite/UseditemAnswerWrite";

export default function UseditemAnswerListItem(props) {
  const [isEdit, setIsEdit] = useState("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER);

  function onClickUpdate() {
    setIsEdit(true);
  }
  async function onClickDelete() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId:
            props.data?.fetchUseditemQuestionAnswers._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionAnswerId:
                props.data?.fetchUseditemQuestionAnswers._id,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(false);
  }

  return (
    <div>
      {isOpenDeleteModal && <Modal visible={true} onOk={onClickDelete}></Modal>}
      {!isEdit && (
        <S.Wrapper>
          <S.Contents>{props.el?.contents}</S.Contents>
          <S.UpdateBtn onClick={onClickUpdate}>수정하기</S.UpdateBtn>
          <S.DeleteBtn onClick={onClickOpenDeleteModal}>삭제하기</S.DeleteBtn>
        </S.Wrapper>
      )}
      {isEdit && (
        <UseditemAnswerWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </div>
  );
}

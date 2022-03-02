import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./UseditemAnswerWrite.queries";
import * as S from "./UseditemAnswerWrite.styles";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import { useState } from "react";

export default function UseditemAnswerWrite(props) {
  const [contents, setContents] = useState("");

  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS);
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  const onChangeContents = (event) => {
    setContents(event?.target.value);
  };
  async function onClickWrite() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.questionData._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.questionData._id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }
  const onClickUpdate = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          // 리패치가 안되는중 대댓글
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <div>
      <S.Wrapper>
        <S.InputContents
          placeholder="대댓글내용"
          maxLength={100}
          onChange={onChangeContents}
        />
        <S.AnswerCommentBtn
          onClick={props.isEdit ? onClickUpdate : onClickWrite}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.AnswerCommentBtn>
      </S.Wrapper>
    </div>
  );
}

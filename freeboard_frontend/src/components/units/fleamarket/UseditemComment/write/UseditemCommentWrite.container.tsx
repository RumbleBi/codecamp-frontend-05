import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IUpdateUseditemQuestionInput,
} from "../../../../../commons/types/generated/types";
import UseditemCommentWriteUI from "./UseditemCommentWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTION,
} from "./UseditemCommentWrite.queries";
import { Modal } from "antd";
import { RegContext } from "../../../../../../pages/fleamarket/[useditemId]/edit";
import { FETCH_USEDITEM_QUESTIONS } from "../list/UseditemCommentList.queries";

export default function UseditemCommentWrite(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCommentWrite = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

  const onClickCommnetUpdate = async () => {
    if (!contents) {
      Modal.error({ content: "내용이 수정되어야 합니다." });
      return;
    }

    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <UseditemCommentWriteUI
      onClickCommentWrite={onClickCommentWrite}
      onClickCommnetUpdate={onClickCommnetUpdate}
      onChangeContents={onChangeContents}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}

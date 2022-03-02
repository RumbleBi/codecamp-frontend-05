import { useState } from "react";
import UseditemCommentListUIItem from "../list/UseditemCommentList.presenterItem";
import Answer from "./UseditemAnswerDetail.container";

export default function CommentAnswerListItem(props) {
  const [isAnswer, setIsAnswer] = useState(false);

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      <UseditemCommentListUIItem
        el={props.el}
        onClickDelete={props.onClickDelete}
        onClickAnswer={onClickAnswer}
      />
      <Answer useditemQuestionId={props.el._id} isAnswer={isAnswer} />
    </>
  );
}

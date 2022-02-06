import { IBoardCommentListItemsUIProps } from "./BoardCommentList.types";
import * as S from "./BoardCommentList.styles";
import { useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { ChangeEvent, useState, Fragment } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function BoardCommentListItemsUI(
  props: IBoardCommentListItemsUIProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteModal = () => {
    setIsOpen(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error)
        // 타입을 찾지 못하는 경우 instanceof 로 속해있음을 알려준다.
        Modal.error({ content: "BoardCommentList.container" });
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  return (
    <Fragment>
      {isOpen && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.CommentListWrapper>
          <S.Wrapper key={props.el._id}>
            <S.WrapperComment>
              <S.CommentAvatarIcon src="/images/avatar_icon40X40.png" />
              <S.WriterWrapper>
                <S.CommentWriter>{props.el?.writer}</S.CommentWriter>
                <S.CommentStar value={props.el?.rating} disabled />
              </S.WriterWrapper>
              <S.Comment>{props.el?.contents}</S.Comment>
            </S.WrapperComment>
            <S.CommentOptionWrapper>
              <S.CommentPencilIcon
                src="/images/boardComment/list/comment_pencil_icon.png"
                onClick={onClickUpdate}
              />
              <S.CommentDeleteIcon
                id={props.el._id}
                src="/images/boardComment/list/comment_delete_icon.png"
                onClick={onClickDeleteModal}
              />
            </S.CommentOptionWrapper>
            <S.CommentCreatedAt>{props.el?.createdAt}</S.CommentCreatedAt>
          </S.Wrapper>
        </S.CommentListWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </Fragment>
  );
}

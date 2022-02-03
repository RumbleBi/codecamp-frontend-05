import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

export default function BoardCommentList() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setIsOpen(true);
    // 타입을 찾지 못하는 경우 instanceof 로 속해있음을 알려준다.
    if (event.target instanceof Element) setSelectedId(event.target.id);
    // id를 저장해주는 것 댓글 삭제이므로 페이지 삭제가 아니니까 새로 id를 만들어준다.
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: selectedId,
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

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      onLoadMore={onLoadMore}
      data={data}
      isOpen={isOpen}
      onClickDelete={onClickDelete}
      onClickDeleteModal={onClickDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}

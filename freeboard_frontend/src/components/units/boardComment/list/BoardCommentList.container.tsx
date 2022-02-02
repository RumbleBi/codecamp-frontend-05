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

  const { data } = useQuery<
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
    setSelectedId(event.target.id);
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
        Modal.error({ content: "BoardCommentList.container" });
    }
  };

  // const { data: dataList fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: { boardId: String(router.query.boardId), page: 1 },
  // });

  /* const onLoadMore = () => {
    if (!dataList) return;
    fetchMore({
      variables: {
        page: Math.ceil(dataList?.fetchBoardComments?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
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
  }; */
  // onLoadMore={onLoadMore}
  // dataList={dataList}

  return (
    <BoardCommentListUI
      data={data}
      isOpen={isOpen}
      onClickDelete={onClickDelete}
      onClickDeleteModal={onClickDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}

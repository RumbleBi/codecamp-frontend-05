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
// import { IBoardCommentListProps } from "./BoardCommentList.types";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.dynamic) },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: any) => {
    // 나중에 event: any 고치기
    const Password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: Password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.dynamic },
          },
        ],
      });
    } catch (error) {
      alert("통신오류");
    }
  };
  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}

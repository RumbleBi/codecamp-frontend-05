import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import { Fragment } from "react";

export default function BoardDetailPage() {
  return (
    <Fragment>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </Fragment>
  );
}

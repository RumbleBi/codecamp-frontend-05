import RegDetail from "../../../src/components/units/fleamarket/detail/RegDetail.container";
import CommentWrite from "../../../src/components/units/fleamarket/boardComment/write/BoardCommentWrite.container";
import CommentList from "../../../src/components/units/fleamarket/boardComment/list/BoardCommentList.container";
import { Fragment } from "react";

export default function RegDetailPage() {
  return (
    <Fragment>
      <RegDetail />
      <CommentWrite />
      <CommentList />
    </Fragment>
  );
}

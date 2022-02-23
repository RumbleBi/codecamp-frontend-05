import RegDetail from "../../../src/components/units/fleamarket/detail/RegDetail.container";
import CommentWrite from "../../../src/components/units/fleamarket/UseditemComment/write/UseditemCommentWrite.container";
import CommentList from "../../../src/components/units/fleamarket/UseditemComment/list/UseditemCommentList.container";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function RegDetailPage() {
  const router = useRouter();

  return (
    <Fragment>
      <RegDetail />
      <CommentWrite />
      <CommentList />
    </Fragment>
  );
}

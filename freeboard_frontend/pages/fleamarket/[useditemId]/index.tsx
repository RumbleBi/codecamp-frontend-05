import RegDetail from "../../../src/components/units/fleamarket/detail/RegDetail.container";
import UseditemCommentWrite from "../../../src/components/units/fleamarket/UseditemComment/write/UseditemCommentWrite.container";
import UseditemCommentList from "../../../src/components/units/fleamarket/UseditemComment/list/UseditemCommentList.container";
import { Fragment } from "react";

export default function RegDetailPage() {
  return (
    <Fragment>
      <RegDetail />
      <UseditemCommentWrite />
      <UseditemCommentList />
    </Fragment>
  );
}

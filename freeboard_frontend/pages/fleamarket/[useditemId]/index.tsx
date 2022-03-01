import RegDetail from "../../../src/components/units/fleamarket/detail/RegDetail.container";
import UseditemCommentWrite from "../../../src/components/units/fleamarket/UseditemComment/write/UseditemCommentWrite.container";
import UseditemCommentList from "../../../src/components/units/fleamarket/UseditemComment/list/UseditemCommentList.container";
import { Fragment } from "react";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

function RegDetailPage() {
  return (
    <Fragment>
      <RegDetail />
      <UseditemCommentWrite />
      <UseditemCommentList />
    </Fragment>
  );
}

export default withAuth(RegDetailPage);

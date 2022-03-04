import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyPage from "../../../src/components/units/fleamarket/mypage/MyPage.container";

function MyPagePage() {
  return <MyPage />;
}

export default withAuth(MyPagePage);

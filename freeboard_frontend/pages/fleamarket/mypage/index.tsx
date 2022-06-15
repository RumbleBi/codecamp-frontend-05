import { withAuth } from '../../../src/components/commons/hocs/withAuth'
import Mypage from '../../../src/components/units/fleamarket/mypage/MyPage.container'

function MyPagePage() {
  return <Mypage />
}

export default withAuth(MyPagePage)

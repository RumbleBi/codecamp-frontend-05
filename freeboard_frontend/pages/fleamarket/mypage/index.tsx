import { withAuth } from '../../../src/components/commons/hocs/withAuth'
import Mypage from '../../../src/components/units/fleamarket/mypage/Mypage.container'

function MyPagePage() {
  return <Mypage />
}

export default withAuth(MyPagePage)

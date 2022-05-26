import { gql, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery } from '../../../../commons/types/generated/types'
import LayoutHeaderUI from './LayoutHeader.presenter'

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      picture
      userPoint {
        amount
      }
    }
  }
`

export default function LayoutHeader() {
  const [logoutUser] = useMutation(LOGOUT_USER)
  const { data } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const router = useRouter()
  const onClickTitle = () => {
    router.push('/')
  }
  const onClickFreeBoardList = () => {
    router.push('/boards/')
  }
  const onClickLogin = () => {
    router.push('/fleamarket/login')
  }
  const onClickFleamarketList = () => {
    router.push('/fleamarket/main')
  }
  const onClickMoveToPayment = () => {
    router.push('/fleamarket/payment')
  }
  const onClickLogout = async () => {
    await logoutUser()
    window.location.reload()
    alert('로그아웃 되었습니다.')
    router.push('/fleamarket/login')
  }
  return (
    <LayoutHeaderUI
      data={data}
      onClickFreeBoardList={onClickFreeBoardList}
      onClickTitle={onClickTitle}
      onClickLogin={onClickLogin}
      onClickFleamarketList={onClickFleamarketList}
      onClickLogout={onClickLogout}
      onClickMoveToPayment={onClickMoveToPayment}
    />
  )
}

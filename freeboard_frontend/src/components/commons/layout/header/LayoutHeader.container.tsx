import { gql, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
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
  const { data } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const [logoutUser] = useMutation(LOGOUT_USER)
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
  const onClickMyPage = () => {
    router.push('/fleamarket/mypage')
  }
  const onClickMoveToPayment = () => {
    router.push('/fleamarket/payment')
  }
  const onClickLogout = async () => {
    try {
      await logoutUser()
      alert('로그아웃 되었습니다.')
      window.location.replace('https://king-nyaa.shop/fleamarket/login')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  return (
    <LayoutHeaderUI
      data={data}
      onClickFreeBoardList={onClickFreeBoardList}
      onClickTitle={onClickTitle}
      onClickLogin={onClickLogin}
      onClickMyPage={onClickMyPage}
      onClickFleamarketList={onClickFleamarketList}
      onClickLogout={onClickLogout}
      onClickMoveToPayment={onClickMoveToPayment}
    />
  )
}

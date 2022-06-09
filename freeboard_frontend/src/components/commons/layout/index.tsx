import styled from '@emotion/styled'
import { ReactChild } from 'react'
import LayoutHeader from './header/LayoutHeader.container'
import LayoutBanner from './banner/LayoutBanner.container'
import LayoutNavigation from './navigation/LayoutNavigation.container'
import LayoutFooter from './footer/LayoutFooter.container'
import { useRouter } from 'next/router'
import LayoutSidebar from './sidebar'

const LayoutBody = styled.div``
interface ILayoutProps {
  children: ReactChild
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter()

  // const HIDDEN_HEADERS = [];
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // console.log 찍은 곳에서 asPath확인
  const HIDDEN_SIDEBAR = [
    '/',
    `/boards/${router.query.boardId}`,
    `/boards/${router.query.boardId}/edit`,
    '/boards',
    '/boards/new',
    '/fleamarket',
    '/fleamarket/login',
    '/fleamarket/reg',
    '/fleamarket/signin',
    '/fleamarket/payment',
  ]
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath)

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        {!isHiddenSidebar && <LayoutSidebar />}
        {props.children}
      </LayoutBody>
    </>
  )
}

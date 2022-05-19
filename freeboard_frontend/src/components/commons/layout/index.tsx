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

// const QuickMove = styled.div`
//   position: fixed;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 50px;
//   bottom: 0;
//   z-index: 100000;
//   background-color: rgba(255, 255, 255, 0.5);
//   box-shadow: 0 -5px 10px 0px rgb(100 100 100 / 20%);
//   text-align: center;
//   padding-top: 21px;
// `

const GoToTopBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  const MoveToTop = () => {
    window.scrollTo(0, 0)
  }
  // const HIDDEN_HEADERS = [];
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // console.log 찍은 곳에서 asPath확인
  const HIDDEN_SIDEBAR = [
    '/',
    `/boards/${router.query.boardId}`,
    `/boards/${router.query.boardId}/edit`,
    '/boards/openapis',
    '/',
    '/fleamarket',
    '/fleamarket/login',
    '/fleamarket/reg',
    '/fleamarket/signin',
  ]
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath)

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        {/* <QuickMove>
          맨위로 올라가기<GoToTopBtn onClick={MoveToTop}>TOP</GoToTopBtn>
        </QuickMove> */}
        {!isHiddenSidebar && <LayoutSidebar />}
        {props.children}
      </LayoutBody>
      {/* <LayoutFooter /> */}
    </>
  )
}

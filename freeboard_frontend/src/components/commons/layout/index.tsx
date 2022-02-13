import styled from "@emotion/styled";
import { ReactChild } from "react";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";

const LayoutBody = styled.div``;
interface ILayoutProps {
  children: ReactChild;
}
const BackGround = styled.div`
  background-image: url("/images/background-kyoto.jpeg");
  background-size: 50% 100%;
  overflow: hidden;
`;

const QuickMove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  z-index: 100000;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 -5px 10px 0px rgb(100 100 100 / 20%);
  text-align: center;
  padding-top: 21px;
`;

const GoToTopBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`;

export default function Layout(props: ILayoutProps) {
  const MoveToTop = () => {
    window.scrollTo(0, 0);
  };
  // const HIDDEN_HEADERS = [];
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // console.log 찍은 곳에서 asPath확인
  return (
    <BackGround>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <LayoutBody>
        <QuickMove>
          맨위로 올라가기<GoToTopBtn onClick={MoveToTop}>TOP</GoToTopBtn>
        </QuickMove>
        {props.children}
      </LayoutBody>
      <LayoutFooter />
    </BackGround>
  );
}

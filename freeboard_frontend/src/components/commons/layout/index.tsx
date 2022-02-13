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
  background-repeat: none;
  background-size: contain;
`;

export default function Layout(props: ILayoutProps) {
  // const HIDDEN_HEADERS = [];
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // console.log 찍은 곳에서 asPath확인
  return (
    <BackGround>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </BackGround>
  );
}

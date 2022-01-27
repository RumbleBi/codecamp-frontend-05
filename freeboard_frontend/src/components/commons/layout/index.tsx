import styled from "@emotion/styled";
import { ReactChild } from "react";
import LayoutHeader from "../layout/header/index";
import LayoutBanner from "./banner/index";
import LayoutNavigation from "./navigation/index";
import LayoutFooter from "./footer/index";
import LayoutSidebar from "./sidebar/index";
import { useRouter } from "next/router";
interface IProps {
  children: ReactChild;
}
const BodyWrapper = styled.div`
  display: flex;
`;
const LayoutBody = styled.div``;
export default function Layout(props: IProps) {
  const router = useRouter();
  console.log(router);
  // const HIDDEN_HEADERS = [];
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // console.log 찍은 곳에서 asPath확인
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}

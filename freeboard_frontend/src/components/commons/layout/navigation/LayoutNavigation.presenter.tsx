import { Fragment, MouseEvent } from "react";
import * as S from "./LayoutNavigation.styles";

interface ILayoutNavigationUIProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

const NAVIGATION_MENUS = [
  { name: "구글지도", page: "./boards/openapis" },
  { name: "자유게시판", page: "/boards" },
  { name: "말고기마켓", page: "/" },
  { name: "마이페이지", page: "/" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <S.Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItems id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </S.MenuItems>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}

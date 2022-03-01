import { Fragment, MouseEvent } from "react";
import * as S from "./fleamarketLogin.styles";

interface INavigationProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

const NAVIGATION_FLEAMARKET = [
  { name: "이메일찾기", page: "/fleamarket/login" },
  { name: "비밀번호찾기", page: "/fleamarket/login" },
  { name: "회원가입", page: "/fleamarket/signin" },
];

export default function FleaMarketLoginUI(props) {
  return (
    <Fragment>
      <S.Background>
        <S.Wrapper>
          <S.Logo>로그인페이지</S.Logo>
          <S.EmailForm>
            <S.EmailText>이메일</S.EmailText>
            <S.EmailInput placeholder="이메일" onChange={props.onChangeEmail} />
          </S.EmailForm>
          <S.HoldOnLogin>
            <S.HoldOnText>로그인 유지하기</S.HoldOnText>
            <S.HoldOnCheckBox type="checkbox" />
          </S.HoldOnLogin>
          <S.PasswordForm>
            <S.PasswordText>비밀번호</S.PasswordText>
            <S.PasswordInput
              placeholder="비밀번호"
              type="password"
              onChange={props.onChangePassword}
            />
          </S.PasswordForm>
          <S.HelpForm>
            {NAVIGATION_FLEAMARKET.map((el) => (
              <div key={el.page}>
                <S.HelpText id={el.page} onClick={props.onClickMenu}>
                  {el.name}
                </S.HelpText>
              </div>
            ))}
          </S.HelpForm>
          <S.LoginMenu>
            <S.LoginBtn onClick={props.onClickBtn}>로그인</S.LoginBtn>
          </S.LoginMenu>
        </S.Wrapper>
      </S.Background>
    </Fragment>
  );
}

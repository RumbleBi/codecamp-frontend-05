import { Fragment } from "react";
import * as S from "./fleamarketLogin.styles";

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
            <S.HoldOnCheckBox>체크</S.HoldOnCheckBox>
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
            <S.HelpText>이메일 찾기 | 비밀번호 찾기 | 회원가입</S.HelpText>
          </S.HelpForm>
          <S.LoginMenu>
            <S.LoginBtn onClick={props.onClickBtn}>로그인</S.LoginBtn>
          </S.LoginMenu>
        </S.Wrapper>
      </S.Background>
    </Fragment>
  );
}

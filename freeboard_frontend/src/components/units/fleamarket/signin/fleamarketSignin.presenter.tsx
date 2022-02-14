import { Fragment } from "react";
import * as S from "./fleamarketSignin.styles";
export default function FleaMarketSigninUI(props) {
  return (
    <Fragment>
      <S.Background>
        <S.Wrapper>
          <S.Logo>회원가입양식</S.Logo>
          <S.EmailForm>
            <S.EmailText>이메일입력</S.EmailText>
            <S.EmailInput placeholder="이메일을 적어주세요." />
          </S.EmailForm>
          <S.PasswordForm>
            <S.PasswordText>비밀번호입력</S.PasswordText>
            <S.PasswordInput
              placeholder="8~16 자리이내로 특수문자를 하나 넣어주세요."
              type="password"
            />
            <S.PasswordTextCheck>비밀번호재입력</S.PasswordTextCheck>
            <S.PasswordInputCheck
              placeholder="비밀번호를 재입력 해주세요."
              type="password"
            />
          </S.PasswordForm>
          <S.NameForm>
            <S.NameText>이름</S.NameText>
            <S.NameInput placeholder="실명으로 적어주세요." />
          </S.NameForm>
          <S.SigninForm>
            <S.SigninBtn onClick={props.onClickSubmit}>가입하기</S.SigninBtn>
          </S.SigninForm>
        </S.Wrapper>
      </S.Background>
    </Fragment>
  );
}

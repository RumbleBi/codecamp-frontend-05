import * as S from "./MypagePassword.styles";

export default function MyPagePasswordUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Title>비밀번호변경</S.Title>
        <div>
          <S.InputPassword
            type="password"
            placeholder="8~16 자리이내로 특수문자, 대문자, 소문자를 하나 이상 넣어주세요."
            onChange={props.onChangePassword}
          />
          <S.PasswordError>{props.passwordError}</S.PasswordError>
          <S.InputPasswordCheck
            type="password"
            placeholder="8~16 자리이내로 특수문자, 대문자, 소문자를 하나 이상 넣어주세요."
            onChange={props.onChangePasswordCheck}
          />
          <S.PasswordError>{props.passwordErrorCheck}</S.PasswordError>
        </div>
        <S.ChangePassword onClick={props.onClickResetPassword}>
          비밀번호 변경
        </S.ChangePassword>
      </S.Wrapper>
    </S.Position>
  );
}

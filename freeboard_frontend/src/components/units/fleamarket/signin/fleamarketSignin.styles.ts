import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100vh;
  background-color: #2f2f2f;
`;

export const Logo = styled.div`
  width: 30vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffc0cb;
  font-size: 38px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const EmailForm = styled.div`
  margin-bottom: 2vh;
`;

export const EmailText = styled.div`
  color: #ffc0cb;
  font-size: 24px;
`;

export const EmailInput = styled.input`
  width: 30vw;
  height: 7vh;
  padding-left: 1vw;
  font-size: 15px;
`;

export const EmailErrorText = styled.div`
  color: red;
`;

export const PasswordForm = styled.div`
  margin-bottom: 2vh;
`;

export const PasswordText = styled.div`
  color: #ffc0cb;
  font-size: 24px;
`;

export const PasswordInput = styled.input`
  width: 30vw;
  height: 7vh;
  padding-left: 1vw;
  font-size: 15px;
`;

export const PasswordTextCheck = styled.div`
  color: #ffc0cb;
  font-size: 24px;
`;

export const PasswordInputCheck = styled.input`
  width: 30vw;
  height: 7vh;
  padding-left: 1vw;
  font-size: 15px;
`;

export const PasswordErrorText = styled.div`
  color: red;
`;

export const PasswordCheckErrorText = styled.div`
  color: red;
`;

export const NameForm = styled.div`
  margin-bottom: 2vw;
`;

export const NameText = styled.div`
  color: #ffc0cb;
  font-size: 24px;
`;

export const NameInput = styled.input`
  width: 30vw;
  height: 7vh;
  padding-left: 1vw;
  font-size: 15px;
`;

export const NameErrorText = styled.div`
  color: red;
`;
export const SigninForm = styled.div``;

export const SigninBtn = styled.button`
  color: #ffc0cb;
  font-size: 32px;
  width: 30vw;
  height: 10vh;
  border: none;
  border-radius: 10px;
  :hover {
    background-color: #dd0098;
    cursor: ${(props) => (props.isActive === true ? "default" : "pointer")};
  }
`;

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

export const HoldOnLogin = styled.div`
  margin-bottom: 30px;
  width: 30vw;
  height: auto;
`;

export const HoldOnText = styled.span`
  color: #ffc0cb;
  font-size: 18px;
  margin-right: 1vw;
`;
// 안트디자인 적용해야함
export const HoldOnCheckBox = styled.span`
  background-color: #ffc0cb;
  width: 20px;
  height: 20px;
`;

export const PasswordForm = styled.div`
  margin-bottom: 2vw;
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

export const HelpForm = styled.div`
  display: flex;
  justify-content: center;
  width: 30vw;
  margin-bottom: 4vh;
`;

export const HelpText = styled.div`
  color: #ffc0cb;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const LoginMenu = styled.div``;

export const LoginBtn = styled.button`
  color: #ffc0cb;
  background-color: #f2f2f2;
  font-size: 32px;
  width: 30vw;
  height: 10vh;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

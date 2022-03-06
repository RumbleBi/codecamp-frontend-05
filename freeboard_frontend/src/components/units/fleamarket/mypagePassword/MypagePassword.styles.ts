import styled from "@emotion/styled";

export const Position = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 80%;
  min-height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
`;

export const InputPassword = styled.input`
  width: 400px;
  height: 50px;
`;
export const PasswordError = styled.div`
  color: red;
`;

export const InputPasswordCheck = styled.input`
  width: 400px;
  height: 50px;
`;

export const ChangePassword = styled.button`
  border: none;
  cursor: pointer;
  width: 200px;
  height: 100px;
`;

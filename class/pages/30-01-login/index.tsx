import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">, // Partial => ?붙여서 가져와줘 , Omit => 고른거 빼고 다 가져와줘
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      //로그인하기
      const result = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });

      // 글로벌스테이트에 저장하기
      const accessToken = result.data?.loginUserExample.accessToken || "";
      if (setAccessToken) setAccessToken(accessToken);

      // 로그인 성공페이지로 이동
      router.push("/30-02-login-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호 <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}

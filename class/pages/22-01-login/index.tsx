import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext); // 글로벌 컨텍스트 _app 부분에 있는거
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, // Partial => ?붙여서 가져와줘 , Omit => 고른거 빼고 다 가져와줘
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // html 부분에 onChangeInput?? 뭔데이건

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      if (setAccessToken) {
        setAccessToken(result.data?.loginUser.accessToken || "");
      } else {
        alert("토큰없음!!");
      }
      //토큰이 없을수도있으니까
      router.push("/22-02-login-success");
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

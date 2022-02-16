import { useMutation, gql, useApolloClient } from "@apollo/client";
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

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext); // 글로벌 컨텍스트 _app 부분에 있는거

  const router = useRouter();
  const client = useApolloClient();

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
      //로그인하기
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";

      console.log(accessToken);

      if (setAccessToken) {
        setAccessToken(accessToken || "");
        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGED_IN, // 이것만하면 어떤 유저의 정보를 받을지 모르니 아래것도 넣어준다.
          context: {
            headers: { authorization: `Bearer ${accessToken}` },
          },
        });
        const userInfo = resultUserInfo.data.fetchUserLoggedIn;

        // 글로벌스테이트에 저장하기
        if (setAccessToken) setAccessToken(accessToken);
        if (setUserInfo) setUserInfo(resultUserInfo.data.fetchUserLoggedIn);
        // _app.tsx 에서 interface부분에 setUserInfo정의를 ? 를 붙인건 있을수도 없을수도 있으니까다
        // 그러면 ts에서 없을지도 모르는 놈을 왜쓰냐고 경고가 나오는데 if문으로 있으면~ 으로 해준다.

        localStorage.setItem("accessToken", accessToken || "");
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      }
      router.push("/23-05-login-check-success");
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

import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import FleaMarketLoginUI from "./fleamarketLogin.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./fleamarketLogin.queries";

export default function FleaMarketLogin() {
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const client = useApolloClient();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickBtn = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";

      if (setAccessToken) {
        setAccessToken(accessToken || "");
        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGED_IN,
          context: {
            headers: { authorization: `Bearer ${accessToken}` },
          },
        });

        const userInfo = resultUserInfo.data.fetchUserLoggedIn;
        if (setAccessToken) setAccessToken(accessToken);
        if (setUserInfo) setUserInfo(userInfo);

        // document.cookie = `accessToken=${accessToken}`;
        // document.cookie = `userInfo=${JSON.stringify(userInfo)}`;
      }

      router.push("/fleamarket/main");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      alert("아이디, 비밀번호가 틀립니다.");
    }
  };

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };
  return (
    <FleaMarketLoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickBtn={onClickBtn}
      onClickMenu={onClickMenu}
    />
  );
}

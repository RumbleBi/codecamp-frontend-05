import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import FleaMarketLoginUI from "./fleamarketLogin.presenter";
import { LOGIN_USER } from "./fleamarketLogin.queries";

export default function FleaMarketLogin() {
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(result.data?.loginUser?.accessToken);

      const accessToken = result.data?.loginUser.accessToken || "";

      if (setAccessToken) {
        setAccessToken(result.data?.loginUser.accessToken || "");
        // localStorage.setItem("accessToken", accessToken);
        document.cookie = `accessToken=${accessToken}`;
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

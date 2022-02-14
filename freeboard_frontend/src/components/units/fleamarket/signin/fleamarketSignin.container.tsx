import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import FleaMarketSigninUI from "./fleamarketSignin.presenter";
import { CREATE_USER } from "./fleamarketSignin.queries";
export default function FleaMarketSignin() {
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [_, setPasswordCheckError] = useState("");
  const [nameError, setNameError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const isEmail = (email: string) => {
    const RegexEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return RegexEmail.test(email);
  };
  const isPassword = (password: string) => {
    const RegexPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return RegexPassword.test(password);
  };
  const isName = (name: string) => {
    const RegexName = /[ㄱ-힣]/;
    return RegexName.test(name);
  };

  const onClickSubmit = async () => {
    if (!isEmail(email)) {
      setEmailError("올바르지 않은 이메일 입니다.");
      window.scrollTo(0, 0);
    }
    if (!isPassword(password)) {
      setPasswordError("올바르지 않은 비밀번호입니다.");
      window.scrollTo(0, 0);
      if (password !== passwordCheck) {
        setPasswordCheckError("비밀번호가 일치하지 않습니다.");
        window.scrollTo(0, 0);
      }
    }
    if (!isName(name)) {
      setNameError("올바르지 않은 이름입니다.");
      window.scrollTo(0, 0);
    }

    try {
      const result = await createUser({
        variables: {
          email,
          password,
          name,
        },
      });
      console.log(result.data);
      alert("회원가입을 축하드립니다!");
      router.push("/fleamarket/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <FleaMarketSigninUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeName={onChangeName}
      onClickSubmit={onClickSubmit}
      emailError={emailError}
      passwordError={passwordError}
      nameError={nameError}
    />
  );
}

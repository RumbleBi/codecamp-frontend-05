// import { useMutation, gql } from "@apollo/client";
// import { useRouter } from "next/router";
// import { ChangeEvent, useContext, useState } from "react";
// import {
//   IMutation,
//   IMutationLoginUserArgs,
// } from "../../src/commons/types/generated/types";
// import { GlobalContext } from "../_app";
// const LOGIN_USER = gql`
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       accessToken
//     }
//   }
// `;

// export default function LoginPage() {
//   const { setAccessToken } = useContext(GlobalContext); // 글로벌 컨텍스트 _app 부분에 있는거
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginUser] = useMutation<
//     Pick<IMutation, "loginUser">, // Partial => ?붙여서 가져와줘 , Omit => 고른거 빼고 다 가져와줘
//     IMutationLoginUserArgs
//   >(LOGIN_USER);

//   const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };
//   const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };
//   // html 부분에 onChangeInput?? 뭔데이건

//   const onClickLogin = async () => {
//     try {
//       const result = await loginUser({
//         variables: {
//           email: email,
//           password: password,
//         },
//       });
//       const accessToken = result.data?.loginUser.accessToken;
//       console.log(accessToken);
//       if (setAccessToken) {
//         setAccessToken(accessToken || "");
//         localStorage.setItem("accessToken", accessToken || "");
//         localStorage.getItem("accessToken");
//       } else {
//         alert("토큰없음!!");
//       }
//       //토큰이 없을수도있으니까
//       router.push("/22-02-login-success");
//     } catch (error) {
//       if (error instanceof Error) alert(error.message);
//     }
//   };
//   return (
//     <div>
//       이메일: <input type="text" onChange={onChangeEmail} />
//       비밀번호 <input type="password" onChange={onChangePassword} />
//       <button onClick={onClickLogin}>로그인하기</button>
//     </div>
//   );
// }

import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  // 앞부분은 보내주는 데이터 타입, 뒷부분은 받아오는 데이터 타입을 적는다.
  // Pick은 유틸리티 타입, Omit은 IMutation 에서 LoginUser 빼고 다 넣어줘달라는 의미
  // Partial은 IMutation 의 타입을 다 가져오는데 뒤에 ? 를 붙여서 가져온다
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      // error가 Error의 객체임을 알려주면 오류가 사라짐. TS버전에 따라 다름.
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}

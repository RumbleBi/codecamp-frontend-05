// import "../styles/globals.css";
import "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  gql,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/index";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import { onError } from "@apollo/client/link/error";
import { GraphQLClient } from "graphql-request";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDHdbIj24CnOzpN-R_dqpZQLPpolVTl6g",
  authDomain: "fir-study-60dfc.firebaseapp.com",
  projectId: "fir-study-60dfc",
  storageBucket: "fir-study-60dfc.appspot.com",
  messagingSenderId: "636430454487",
  appId: "1:636430454487:web:2fd93cc26f194771492a92",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo,
    setUserInfo,
  };

  // if (process.browser) {
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  // } 이방법으로도 가능

  // if (typeof window !== "undefined") {
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  // } 이방법으로도 가능

  useEffect(() => {
    // 토큰 유지시켜주는 코드 이게 제일 낫다. 왜냐? 다른것들은 다시 렌더링되거든
    // if (localStorage.getItem("accessToken")) {
    //   setAccessToken(localStorage.getItem("accessToken") || "");
    // }

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);
  // 쿠키 토큰 유효성검증

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. error 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2. 해당 error가 토큰 만료인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken 으로 accessToken을 재발급 받기
          // playground에 restoreToken 있지만 mutation이 불가. 아래 client가 Apollo 모든설정을 컴포넌트에 뿌려주는걸 받아야 쓰기 때문
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 5. 재발급받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              Headers: {
                ...operation.getContext().headers, // 전부 다 똑같이 복제하고 인증 토큰만 교체
                authorization: `Bearer ${newAccessToken}`,
              },
            }); // 설정 변경, 실패한 쿼리의 데이터가 저장되어 있는것인데 accessToken만 바꿔치기
            return forward(operation); // 변경된 오퍼레이션 재요청하기
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include", // 쿠키 등록코드
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <div>
      {/* <Head> 모든 페이지에서 카카오 맵을 다운로드 받으므로 비효율적임.
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=811dd70f3a29b4738e996462f46f0322" // 어짜피 카카오 도메인 설정에서 로컬3000에만 해놨으니 빼가도 쓸 의미가 없다.
          // 하지만 불안하다면 프론트말고 백에서 키를 저장해, 우리가 요청하는 방식으로 하는것이 좋다.
        ></script>
        ;
      </Head> */}
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default MyApp;

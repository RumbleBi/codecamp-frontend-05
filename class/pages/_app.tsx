// import "../styles/globals.css";
import "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
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
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
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

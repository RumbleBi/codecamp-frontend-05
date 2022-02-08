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

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

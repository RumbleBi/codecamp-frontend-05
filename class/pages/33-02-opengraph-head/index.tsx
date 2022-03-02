import Head from "next/head";

export default function OpengraphHeadPage() {
  // 우리페이지 시점
  return (
    <div>
      <Head>
        <meta property="og:title" content="내사이트" />
        <meta property="og:descrpition" content="환영합니다." />
      </Head>
      <div>오픈그래프 연습 페이지 입니다!!</div>
    </div>
  );
}

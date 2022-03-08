import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export default function BoardsDetailPage(props) {
  // (두번째 실행)
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myboardData.fetchBoard.title} />
        <meta property="og:description" content={props.myboardData.fetchBoard.contents} />
        <meta property="og:image" content={props.myboardData.fetchBoard.images[0]} />
      </Head>
      <div>안녕하세요! 게시글 상세페이지 입니다!!, 게시글ID는{router.query.boardId}입니다!</div>
    </div>
  );
}

// 정해진 변수명임 변경불가, 이 페이지는 SSR할래!! (맨처음 실행) // context 는 서버에서 데이터를 받아오는 방식으로 query 의 data와 유사한방식으로 받아야한다.
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것!! 카카오톡, 디스코드에 링크를 올릴 때, 미리보기 페이지를 SSR 하기 위해서

  // 위쪽의 default 함수의 props로 들어가게 된다.
  const result = await request("https://backend05.codebootcamp.co.kr/graphql", FETCH_BOARD, {
    boardId: context.query.boardId,
  });
  return {
    // 무조건 props: {} 로 시작해야됨.
    props: {
      myboardData: {
        // ...result // 이런식으로 스프레드 연산자를 사용해 모두 보내버리는 것도 가능
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};

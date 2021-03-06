import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function webEditerDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  // hydration 시발시발시발
  return (
    <div>
      {/* <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      {process.browser && (
        <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div> : (
          <div style={{color: "green"}}/>
        )
      )}
      <div style={{ color: "blue" }}>내용: {data?.fetchBoard.contents}</div> */}
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

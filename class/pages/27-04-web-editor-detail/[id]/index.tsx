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
      // 어떤 게시글을 받아올건지 위치를 잡아줘야함
      variables: { boardId: String(router.query.id) },
    }
  );
  return (
    <div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {process.browser && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }} // 보안에 취약함!! SXX
        />
      )}
    </div>
  );
}

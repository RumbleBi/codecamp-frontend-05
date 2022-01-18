import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

// 여기서 요청하고싶은 내용을 추가하면 왜 나머지 데이터들이 안나오지??
export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.dynamic) },
  });

  return <BoardDetailUI data={data} />;
}

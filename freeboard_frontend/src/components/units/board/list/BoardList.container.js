import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
export default function BoardList() {
  const router = useRouter();
  const [boardNum, setBoardNum] = useState(1);
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);
  return <BoardListUI data={data} />;
}

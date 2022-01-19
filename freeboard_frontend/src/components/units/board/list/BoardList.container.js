import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickMoveBoardWrite() {
    router.push("/boards/new");
  }
  function onClickMoveBoardDetail(event) {
    router.push("/boards" + event.target.id);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}

import { ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { IBoardListProps } from "./BoardList.types";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList(props: IBoardListProps) {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  function onClickMoveBoardWrite(event: ChangeEvent<HTMLInputElement>) {
    router.push("/boards/new");
  }
  function onClickMoveBoardDetail(event: ChangeEvent<HTMLInputElement>) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}

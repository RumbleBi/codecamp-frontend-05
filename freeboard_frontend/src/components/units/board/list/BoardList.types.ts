import { MouseEvent } from "react";

export interface IBoardListProps {}

export interface IBoardListUIProps {
  data?: any;
  el?: any;
  index: number;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveBoardWrite: (event: MouseEvent<HTMLButtonElement>) => void;
}

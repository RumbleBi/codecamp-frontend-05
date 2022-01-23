import { ChangeEvent } from "react";

export interface IBoardListProps {}

export interface IBoardListUIProps {
  data?: any;
  el?: any;
  index: any;
  onClickMoveBoardDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveBoardWrite: (event: ChangeEvent<HTMLInputElement>) => void;
}

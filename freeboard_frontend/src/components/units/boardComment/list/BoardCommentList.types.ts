import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  el?: any;
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}

import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  el?: any;
  data?: Pick<IQuery, "fetchBoardComments">;
  dataList?: Pick<IQuery, "fetchBoardComments">;
  isOpen: boolean;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDelete: () => void;
  onLoadMore?: any;
}

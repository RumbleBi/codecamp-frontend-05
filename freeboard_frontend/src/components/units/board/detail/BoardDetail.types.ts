export interface IBoardDetailProps {}

export interface IBoardDetailUIProps {
  data?: any;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickDeleteBoard: () => void;
  onClickLikeBoard: () => void;
  onClickDislikeBoard: () => void;
}

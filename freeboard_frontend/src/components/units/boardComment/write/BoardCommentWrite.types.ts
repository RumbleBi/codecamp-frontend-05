import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  writer: string;
  content: string;
  onClickCommentWrite: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
}

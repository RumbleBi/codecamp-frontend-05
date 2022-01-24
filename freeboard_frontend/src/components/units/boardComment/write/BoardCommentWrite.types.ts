import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  Writer: string;
  Contents: string;
  onClickCommentWrite: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

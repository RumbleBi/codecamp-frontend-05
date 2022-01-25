import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean; // container
  isActive: boolean;
  data?: any; // 일단 10강에서 any로 설정하게 함.
}

export interface IBoardWriteUIProps {
  isEdit: boolean; // presenter
  isActive: boolean;
  data?: any;
  WriterInputCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  writerInputError: string;
  PasswordInputCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordInputError: string;
  PostInputCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  postInputError: string;
  ContentInputCheck: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contentInputError: string;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}

export interface IRegisterBtnProps {
  isActive: boolean; // style
}

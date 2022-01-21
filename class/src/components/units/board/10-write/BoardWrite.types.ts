import { ChangeEvent } from "react";

export interface IBoardWriteIProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  isActive: boolean;
  data: any;
  bbb: string;
  ccc: () => void;
  xxx: () => void;
  ddd: (event: ChangeEvent<HTMLInputElement>) => void;
  kkk: (event: ChangeEvent<HTMLInputElement>) => void;
  lll: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IMyButtonProps {
  ggg: boolean;
}

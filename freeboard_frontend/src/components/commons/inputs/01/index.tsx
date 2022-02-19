import styled from "@emotion/styled";
import { RefObject } from "react";

interface IProps {
  type: string;
  register: string;
  ref: RefObject<HTMLInputElement>;
}
const MyInput = styled.input``;

export default function Input01(props: IProps) {
  return <MyInput type={props.type} {...props.register} />;
}

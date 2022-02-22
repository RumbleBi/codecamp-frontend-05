import styled from "@emotion/styled";
import { RefObject } from "react";

interface IProps {
  type: string;
  register: string;
  ref: RefObject<HTMLInputElement>;
  defaultValue: string;
}

const MyInput = styled.input`
  height: 8vh;
  margin-top: 1vh;
  width: 70%;
  color: #ffc0d3;
  font-size: 18px;
  padding-left: 1vw;
`;

export default function Input01(props: IProps) {
  return <MyInput type={props.type} {...props.register} />;
}

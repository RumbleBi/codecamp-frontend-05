import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  name: string;
}
const MyButton = styled.button`
  color: #524a4e;
  background-color: #ffc0d3;
  border: none;
  width: 170px;
  height: 70px;
  font-size: 24px;
  border-radius: 10px;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export default function Button02(props: IProps) {
  return <MyButton onClick={props.onClick}>{props.name}</MyButton>;
}

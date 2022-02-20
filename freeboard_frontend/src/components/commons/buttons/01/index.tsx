import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
interface IMyButtonProps {
  isValid: boolean;
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
  name: string;
}
const MyButton = styled.button`
  color: #524a4e;
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "#FFC0D3" : ""};
  border: none;
  :hover {
    font-weight: ${(props: IMyButtonProps) => (props.isValid ? "900" : "")};
    color: ${(props: IMyButtonProps) => (props.isValid ? "#ff5c8d" : "")};
    cursor: ${(props: IMyButtonProps) => (props.isValid ? "pointer" : "")};
  }
  width: 170px;
  height: 70px;
  font-size: 24px;
  border-radius: 10px;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export default function Button01(props: IProps) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}

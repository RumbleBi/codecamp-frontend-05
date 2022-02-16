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
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "#ffc0cb" : ""};
`;

export default function Button01(props: IProps) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}

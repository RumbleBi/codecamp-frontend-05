import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}
interface IProps {
  type: undefined;
  isValid: boolean;
  name: string;
}
const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "#ffd400" : ""};
`;
export default function Button01(props: IProps) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}

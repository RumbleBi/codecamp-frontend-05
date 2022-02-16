import styled from "@emotion/styled";

interface IProps {
  type: string;
  register: string;
}
const MyInput = styled.input``;

export default function Input01(props: IProps) {
  return <MyInput type={props.type} {...props.register} />;
}

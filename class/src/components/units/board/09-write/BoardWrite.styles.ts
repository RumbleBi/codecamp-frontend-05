import styled from "@emotion/styled";

export const MyInput = styled.input``;

interface IProps {
  ggg: boolean;
} //props는 객체 타입이므로 인터페이스를 사용해서 타입을 지정해 준다!!
export const MyButton = styled.button`
  background-color: ${(props: IProps) =>
    props.ggg === true ? "yellow" : "none"};
`;

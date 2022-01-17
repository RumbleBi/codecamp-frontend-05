import styled from "@emotion/styled";

export const Btn = styled.button`
  background-color: ${(props) =>
    props.onChangeColor === true ? "#FFD400" : "none"};
`;

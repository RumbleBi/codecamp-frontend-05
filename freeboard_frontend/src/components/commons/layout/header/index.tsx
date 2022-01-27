import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: #2f2f2f;
  color: #ffd400;
  font-size: 42px;
  font-family: AppleFontKO;
`;
export default function LayoutHeader() {
  return <Wrapper>전국말사랑협회</Wrapper>;
}

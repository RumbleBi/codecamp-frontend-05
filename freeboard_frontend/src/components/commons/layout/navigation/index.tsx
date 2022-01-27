import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  width: 100vw;
  background-color: #2f2f2f;
  color: #ffd400;
  font-size: 20px;
  word-spacing: 20px;
  font-family: AppleFontKO;
`;
export default function LayoutNavigation() {
  return <Wrapper>자유게시판 | 말고기마켓 | 마이페이지</Wrapper>;
}

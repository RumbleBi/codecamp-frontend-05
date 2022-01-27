import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: #2f2f2f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ffd400;
  font-family: AppleFontKO;
  font-family: AppleFontEN;
`;
const Text1 = styled.div`
  font-size: 30px;
  padding-bottom: 3vh;
`;
const Text2 = styled.div``;
const Text3 = styled.div``;
export default function LayoutFooter() {
  return (
    <Wrapper>
      <Text1>전국말사랑협회</Text1>
      <Text2>
        대표자: 조진일 | 연락처: 010-0000-0000 | 이메일: horselover@gmail.com
      </Text2>
      <Text3>
        사업자번호: 000-00-00000 | 협회등록번호: 제 0000호 | 주소: 어디에도있고
        어디에도없음
      </Text3>
    </Wrapper>
  );
}

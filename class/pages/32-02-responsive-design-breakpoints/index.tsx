import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  @media ${breakPoints.moblie} {
    width: 250px;
    height: 250px;
    background-color: blue;
    display: none;
  }
`;

export default function ResopnesiveDesginPage() {
  return (
    <div>
      <Wrapper>상자</Wrapper>
    </div>
  );
}

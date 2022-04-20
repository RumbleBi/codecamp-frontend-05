import styled from "@emotion/styled";
import { useState } from "react";

const Box1 = styled.div`
  width: 200px;
  background: red;
  position: relative;
  overflow: hidden;
`;

const Box2 = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  /* right: -150px; */
  background: green;
  transition: 0.5s;
  left: ${(props) => (props.isTrue === true ? "0px" : "-200px")};
`;

const Button1 = styled.button`
  width: 100px;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1024px;
  min-height: 700px;
  background-color: #ffd400;
`;

const MenuBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  :hover {
    transform: rotate(45deg)
    transition: .5s
  }
`;

const BtnLine1 = styled.span`
  border-bottom: 2px solid black;
  width: 20px;
  padding-bottom: 5px;
`;
const BtnLine2 = styled.span`
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  width: 20px;
`;
const BtnLine3 = styled.span`
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  width: 20px;
`;
// overflow: auto 스크롤생성
// span 태그로 작대기 3개 만들고
// position: absolute;
// display: block;
// tarnsform: rotate(45deg) 로 막대기 움직이게 하기
// transition-delay: .2s ~몇초뒤에 실행해라
// transition: .5s ~몇초안에 실행해라

export default function Transform() {
  const [isTrue, setIsTrue] = useState(false);
  const onClickOpen = () => {
    setIsTrue((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <Box1>
          <Box2 className="test" isTrue={isTrue}></Box2>
        </Box1>
        <MenuBtn>
          <BtnLine1></BtnLine1>
          <BtnLine2></BtnLine2>
          <BtnLine3></BtnLine3>
        </MenuBtn>
        <Button1 onClick={onClickOpen}>누르면 슬라이드가 열린다구</Button1>
      </Wrapper>
    </>
  );
}

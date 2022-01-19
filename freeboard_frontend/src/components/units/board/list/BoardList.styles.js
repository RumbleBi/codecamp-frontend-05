import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 110px;
`;

export const ListWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
`;

export const ListDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 30px;
  width: 90%;
  border-bottom: 1px solid gray;
`;

export const ListWrapperBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
`;

export const ListIndex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 30px;
  border-bottom: 1px solid gray;
`;

export const BoardCreate = styled.button`
  margin: 200px 0px 0px 1100px;
  width: 171px;
  height: 52px;
  font-size: 16px;
  background-color: white;
  padding-left: 40px;
  border-radius: 10px;
  border-color: #f2f2f2;
  cursor: pointer;
  :hover {
    background-color: #f5f2fc;
  }
`;

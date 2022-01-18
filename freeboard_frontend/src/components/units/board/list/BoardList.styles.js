import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled.div`
  width: 1200px;
  height: 600px;
  background-color: blue;
`;

export const ListDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  background-color: red;
  border: 1px solid red;
`;

export const ListIndex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  background-color: red;
  border: 1px solid green;
`;

export const BoardCreate = styled.button`
  margin: 40px 0px 0px 1100px;
  width: 171px;
  height: 52px;
  font-size: 16px;
  background-color: white;
  padding-left: 40px;
  border-radius: 10px;
  border-color: #f2f2f2;
`;

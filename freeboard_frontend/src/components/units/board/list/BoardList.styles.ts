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

export const ListWrapperBottom = styled.div`
  background-color: red;
`;

export const Pagination01Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3vh;
`;

export const BoardCreate = styled.button`
  margin: 200px 0px 0px 1050px;
  width: 171px;
  height: 55px;
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  border-color: #f2f2f2;
  cursor: pointer;
  :hover {
    background-color: #ffd400;
  }
`;

// Icons
export const WriteIcon = styled.img`
  padding-right: 13px;
`;

// export const SearchIcon = styled.img``;
// export const CalendarIcon = styled.img``;

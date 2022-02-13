import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  margin: 0;
`;

export const SearchInput = styled.input`
  margin-left: 48vw;
  margin-bottom: 2vh;
  padding-left: 1vw;
  width: 20%;
  height: 5vh;
`;

export const Word = styled.span`
  width: 70%;
  color: ${(props) => (props.isMatched ? "#FFD400" : "black")};
`;
export const ListWrapperTop = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  border-top: 2px solid black;
  background-color: #ffd400;
`;

export const ListDetail = styled.div`
  width: 70%;
  height: auto;
  border-bottom: 1px solid gray;
`;

export const ListWrapperBody = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: auto;
`;

export const ListIndex = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  mouse :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? "#FFD400" : "gray")};
`;

export const ListIndexNumber = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? "#FFD400" : "gray")};
`;

export const ListIndexWriter = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? "#FFD400" : "gray")};
`;

export const ListIndexDate = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? "#FFD400" : "gray")};
`;
export const ListWrapperBottom = styled.div`
  width: 70%;
  height: auto;
  background-color: red;
`;

export const Pagination01Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5vh;
`;

export const BoardCreate = styled.button`
  width: 12vw;
  height: 7vh;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  border-radius: 10px;
  justify-content: 
  border-color: #f2f2f2;
  float: right;
  margin-top: 5vh;
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

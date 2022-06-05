import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WrapperOpt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const BoardCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #79dae8;
  background-color: #e8f9fd;
  color: #0aa1dd;
  :hover {
    font-weight: bold;
  }
`
export const WriteIcon = styled.img`
  padding-right: 15px;
`
export const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #79dae8;
  border-radius: 10px;
`

export const Word = styled.span`
  width: 70%;
  color: ${(props) => (props.isMatched ? '#FFD400' : 'black')};
`
export const ListWrapperTop = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  border-top: 2px solid black;
  background-color: #ffd400;
`

export const ListDetail = styled.div`
  width: 70%;
  height: auto;
  border-bottom: 1px solid gray;
`

export const ListWrapperBody = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: auto;
`

export const ListIndex = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  mouse :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? '#FFD400' : 'gray')};
`

export const ListIndexNumber = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? '#FFD400' : 'gray')};
`

export const ListIndexWriter = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? '#FFD400' : 'gray')};
`

export const ListIndexDate = styled.div`
  align-items: center;
  width: 70%;
  height: 7vh;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.index % 2 === 0 ? '#FFD400' : 'gray')};
`
export const ListWrapperBottom = styled.div`
  width: 70%;
  height: auto;
  background-color: red;
`

export const Pagination01Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5vh;
`

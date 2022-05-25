import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  background-color: #79dae8;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 60px;
  z-index: 10000;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 0px 10px gray;
`
export const Logo = styled.div`
  font-weight: bold;
`
export const Left = styled.div`
  display: flex;
  div {
    :hover {
      font-weight: bold;
    }
    color: #2155cd;
    margin-left: 20px;
    font-size: 18px;
    cursor: pointer;
  }
`
export const Right = styled.div`
  display: flex;
  color: #2155cd;
  div {
    margin: 20px;
    font-size: 18px;
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`

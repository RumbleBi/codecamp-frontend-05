import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 1200px;
  height: 60px;
  z-index: 10000;
`
export const Left = styled.div`
  display: flex;
  div {
    margin: 20px;
    font-size: 18px;
    cursor: pointer;
  }
`
export const Right = styled.div`
  display: flex;
  div {
    margin: 20px;
    font-size: 18px;
    cursor: pointer;
  }
`

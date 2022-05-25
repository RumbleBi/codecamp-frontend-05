import styled from '@emotion/styled'
export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  margin-bottom: 30px;
  border-bottom: 1px solid #2155cd;
  display: flex;
  justify-content: space-between;
`
export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin-bottom: 30px;
  border-bottom: 1px solid #2155cd;
`
export const QuestionWrapper = styled.div``
export const Name = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  cursor: default;
`
export const Contents = styled.div`
  margin-left: 10px;
  font-size: 20px;
`
export const BtnWrapper = styled.div`
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 100px;
    height: 30px;
    border: none;
    background-color: #2155cd;
    color: #79dae8;
    border-radius: 10px;
    :hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`
export const CommentWrapper = styled.div`
  width: 1200px;
`
export const CommentAnswerWrapper = styled.div`
  min-height: 50px;
`

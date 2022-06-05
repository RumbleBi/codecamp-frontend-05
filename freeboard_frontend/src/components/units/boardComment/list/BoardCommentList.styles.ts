import styled from '@emotion/styled'
import { Rate } from 'antd'
export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  height: 200px;
  margin-bottom: 50px;
  border-bottom: 1px solid #2155cd;
`
export const WrapperComment = styled.div``
export const CommentStar = styled(Rate)``
export const Comment = styled.div``
export const CommentWriter = styled.span`
  font-size: 18px;
  color: #2155cd;
  font-weight: bold;
`
export const CommentCreatedAt = styled.div`
  /* color: red; */
`

export const CommentPencilIcon = styled.img`
  cursor: pointer;
`

export const CommentDeleteIcon = styled.img`
  padding-left: 1.5vw;
  cursor: pointer;
  :hover {
    image-color: #ffd400;
  }
`
export const CommentListInfo = styled.span``

// ----------------------------------
export const PasswordInput = styled.input``

export const CommentOptionWrapper = styled.div``

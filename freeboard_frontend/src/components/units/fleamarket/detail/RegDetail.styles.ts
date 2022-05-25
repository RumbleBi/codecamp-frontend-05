import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  border-radius: 10px;
  background-color: #e8f9fd;
  box-shadow: 0px 0px 10px gray;
`
export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #0aa1dd;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const ProfileWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  border-top: 1px solid #2155cd;
`
export const Name = styled.div`
  color: #0aa1dd;
  font-size: 24px;
`
export const CreatedAt = styled.div`
  color: #0aa1dd;
  font-size: 20px;
`
export const UseditemDetailWrapper = styled.div`
  width: 1200px;
  background-color: #e8f9fd;
  border-top: 1px solid #2155cd;
`
export const Remarks = styled.div`
  padding-left: 20px;
  color: #0aa1dd;
  font-size: 24px;
  border-bottom: 1px solid #2155cd;
`
export const Price = styled.div`
  padding-left: 20px;
  color: #0aa1dd;
  font-size: 24px;
  border-bottom: 1px solid #2155cd;
`
export const AddressTitle = styled.div`
  color: #0aa1dd;
  padding-left: 20px;
  padding-right: 5px;
`
export const Address = styled.div`
  display: flex;
  color: #0aa1dd;
  border-bottom: 1px solid #2155cd;
  div {
    font-size: 24px;
  }
`
export const AddressDetail = styled.div`
  font-size: 24px;
  padding-left: 50px;
`
export const Contents = styled.div`
  width: 1200px;
  min-height: 300px;
  color: #0aa1dd;
  font-size: 20px;
  background-color: white;
  padding-left: 20px;
  padding-top: 10px;
`
export const PickitemWrapper = styled.div`
  border-top: 1px solid #2155cd;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 1200px;
  background-color: #e8f9fd;
  display: flex;
  justify-content: center;
`
export const PickitemBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: #ffd400;
  :hover {
    font-weight: bold;
  }
  cursor: pointer;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`
export const PickitemBtnCancel = styled.button`
  width: 100px;
  height: 100px;
  background-color: gray;
  :hover {
    font-weight: bold;
  }
  cursor: pointer;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`
export const ImageWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 50px;
`
export const ButtonWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`

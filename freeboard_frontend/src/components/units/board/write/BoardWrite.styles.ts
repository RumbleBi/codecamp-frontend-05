// IProps 정의는 스타일 부분 바로 위에 적어두자. ex) submitButton 부분과 같이!!
import styled from '@emotion/styled'
import { IRegisterBtnProps } from './BoardWrite.types'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
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
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #79dae8;
  font-size: 32px;
  font-weight: bold;
`
export const WrapperProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`
export const Label = styled.div`
  color: #79dae8;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`
export const WriterContent = styled.input`
  width: 400px;
  font-size: 18px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`
export const ErrorMassage = styled.div`
  color: red;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 5px;
`
export const PasswordContent = styled.input`
  font-size: 18px;
  width: 400px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`
export const WrapperName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
export const Name = styled.div`
  display: flex;
  color: #79dae8;
  font-size: 20px;
  font-weight: bold;
`
export const NameContent = styled.input`
  width: 930px;
  font-size: 18px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`
export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
export const Content = styled.div`
  display: flex;
  color: #79dae8;
  font-size: 20px;
  font-weight: bold;
`
export const ContentInput = styled.textarea`
  display: flex;
  font-size: 18px;
  width: 930px;
  min-height: 400px;
  padding-top: 10px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`
export const Address = styled.div`
  font-size: 24px;
  color: #ffd400;
  margin-top: 3vh;
  margin-left: 7vw;
`
export const WrapperAddress = styled.div`
  margin-top: 3vh;
  margin-left: 7vw;
`
export const Zipcode = styled.input`
  width: 5vw;
  height: 7vh;
  padding-left: 1vw;
`
export const AddressSearchBtn = styled.button`
  width: 7vw;
  height: 7vh;
  margin-left: 2vw;
  cursor: pointer;
`
export const AddressDetail1 = styled.input`
  width: 75vw;
  height: 7vh;
  margin-top: 3vh;
  margin-left: 7vw;
`
export const AddressDetail2 = styled.input`
  width: 75vw;
  height: 7vh;
  margin-top: 3vh;
  margin-left: 7vw;
`
export const Youtube = styled.div`
  color: #ffd400;
  width: 75vw;
  height: 7vh;
  margin-left: 7vw;
  margin-top: 3vh;
  font-size: 24px;
`
export const YoutubeUrl = styled.input`
  width: 75vw;
  height: 7vh;
  margin-top: 1vh;
  margin-left: 7vw;
  font-size: 18px;
  padding-left: 1vw;
  border: 1px solid #bdbdbd;
`
export const Picture = styled.div`
  color: #ffd400;
  margin-top: 3vh;
  margin-left: 7vw;
  font-size: 24px;
`
export const WrapperPicture = styled.div`
  margin-top: 3vh;
  margin-left: 7vw;
`
export const PictureDetail = styled.button`
  width: 7vw;
  height: 7vh;
  margin-right: 2vw;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #ffd400;
  }
`
export const WrapperSetting = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 7vw;
`
export const MainSetting = styled.div`
  color: #ffd400;
  margin-top: 3vh;
  margin-left: 7vw;
  margin-bottom: 3vh;
  font-size: 24px;
`
export const MainSettingSelect = styled.input`
  margin-top: 1vh;
  margin-right: 1vw;
  :hover {
    cursor: pointer;
  }
`
export const MainSettingFont = styled.div`
  color: #ffd400;
  font-size: 22px;
  padding-right: 1vw;
  margin-bottom: 3vh;
`
export const RegisterBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  width: 90vw;
  height: 7vh;
  border: none;
  font-size: 24px;
  background-color: ${(props: IRegisterBtnProps) =>
    props.isActive === true ? '#FFD400' : 'none'};
  cursor: ${(props: IRegisterBtnProps) =>
    props.isActive === true ? 'pointer' : 'default'};
`

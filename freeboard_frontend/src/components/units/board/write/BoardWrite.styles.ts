// IProps 정의는 스타일 부분 바로 위에 적어두자. ex) submitButton 부분과 같이!!
import styled from "@emotion/styled";
import { IRegisterBtnProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  height: 200vh;
  width: 90vw;
  margin-top: 5%;
  margin-right: 12px;
  margin-bottom: 5%;
  font-family: AppleFontKO;
  font-size: 12px;
`;

export const Title = styled.div`
  color: #ffd400;
  font-family: Arial;
  font-size: 42px;
  font-weight: bold;
  padding-top: 3%;
  letter-spacing: 20px;
`;

export const ErrorMassage = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 5px;
  padding-left: 5px;
`;

export const WrapperProfile = styled.div`
  width: 90vw;
  display: flex;
  padding-top: 3vh;
`;
export const WrapperWriter = styled.div``;

export const WrapperPassword = styled.div``;

export const WriterContent = styled.input`
  font-size: 18px;
  width: 30vw;
  height: 7vh;
  padding-left: 1vw;
  border: 1px solid #bdbdbd;
`;

export const PasswordContent = styled.input`
  font-size: 18px;
  width: 30vw;
  height: 7vh;
  padding-left: 1vw;
  border: 1px solid #bdbdbd;
`;
export const Label = styled.div`
  display: flex;
  color: #ffd400;
  padding-bottom: 1vh;
  font-size: 24px;
  font-family: AppleFontKO;
`;

export const Name = styled.div`
  color: #ffd400;
  margin-top: 3vh;
  font-size: 24px;
`;

export const WrapperName = styled.div`
  margin-left: 7vw;
  padding-top: 20px;
`;

export const NameContent = styled.input`
  font-size: 18px;
  width: 75vw;
  height: 7vh;
  padding-left: 1vw;
  border: 1px solid #bdbdbd;
`;

export const Content = styled.div`
  color: #ffd400;
  margin-top: 1vw;
  margin-left: 7vw;
  margin-bottom: 2vh;
  font-size: 24px;
`;

export const ContentInContent = styled.textarea`
  font-size: 18px;
  display: flex;
  width: 75vw;
  height: 40vh;
  margin-left: 7vw;
  padding-top: 1vh;
  padding-left: 1vw;
  border: 1px solid #bdbdbd;
  resize: none;
`;

export const Address = styled.div`
  font-size: 24px;
  color: #ffd400;
  margin-top: 3vh;
  margin-left: 7vw;
`;

export const WrapperAddress = styled.div`
  margin-top: 3vh;
  margin-left: 7vw;
`;

export const Zipcode = styled.input`
  width: 5vw;
  height: 7vh;
  padding-left: 1vw;
`;

export const AddressSearchBtn = styled.button`
  width: 7vw;
  height: 7vh;
  margin-left: 2vw;
  :hover {
    cursor: pointer;
  }
`;

export const AddressDetail1 = styled.input`
  width: 75vw;
  height: 7vh;
  margin-top: 3vh;
  margin-left: 7vw;
`;

export const AddressDetail2 = styled.input`
  width: 75vw;
  height: 7vh;
  margin-top: 3vh;
  margin-left: 7vw;
`;

export const Youtube = styled.div`
  color: #ffd400;
  width: 75vw;
  height: 7vh;
  margin-left: 7vw;
  margin-top: 3vh;
  font-size: 24px;
`;

export const YoutubeUrl = styled.input`
  width: 75vw;
  height: 7vh;
  margin-top: 1vh;
  margin-left: 7vw;
  font-size: 18px;
  padding-left: 1vw;
  border: 1px solid #bdbdbd;
`;

export const Picture = styled.div`
  color: #ffd400;
  margin-top: 3vh;
  margin-left: 7vw;
  font-size: 24px;
`;

export const WrapperPicture = styled.div`
  margin-top: 3vh;
  margin-left: 7vw;
`;

export const PictureDetail = styled.button`
  width: 7vw;
  height: 7vh;
  margin-right: 2vw;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;
export const WrapperSetting = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 7vw;
`;

export const MainSetting = styled.div`
  color: #ffd400;
  margin-top: 3vh;
  margin-left: 7vw;
  margin-bottom: 3vh;
  font-size: 24px;
`;

export const MainSettingSelect = styled.input`
  margin-top: 1vh;
  margin-right: 1vw;
  :hover {
    cursor: pointer;
  }
`;

export const MainSettingFont = styled.div`
  color: #ffd400;
  font-size: 22px;
  padding-right: 1vw;
  margin-bottom: 3vh;
`;

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
    props.isActive === true ? "#FFD400" : "none"}

  :hover {
    cursor: ${(props: IRegisterBtnProps) =>
      props.isActive === true ? "pointer" : "default"};
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

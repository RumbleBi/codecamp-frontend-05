// IProps 정의는 스타일 부분 바로 위에 적어두자. ex) submitButton 부분과 같이!!
import styled from "@emotion/styled";
import { IRegisterBtnProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  /* height: 1847px; */
  width: 1200px;
  margin: 100px;
  padding: 80px 102px 100px 102px;
`;

export const Title = styled.div`
  color: #ffd400;
  font-family: Arial;
  font-size: 36px;
  font-weight: bold;
`;

export const ErrorMassage = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 5px;
  padding-left: 5px;
`;

export const WrapperProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;
export const WrapperWriter = styled.div`
  padding-top: 40px;
`;

export const WrapperPassword = styled.div`
  padding-top: 40px;
`;

export const WriterContent = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const PasswordContent = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Label = styled.div`
  color: #ffd400;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Name = styled.div`
  color: #ffd400;
  padding-top: 40px;
  padding-right: 968px;
  font-size: 16px;
`;

export const WrapperName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const NameContent = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Content = styled.div`
  color: #ffd400;
  padding-top: 40px;
  padding-right: 968px;
  padding-bottom: 20px;
  font-size: 16px;
`;

export const ContentInContent = styled.textarea`
  width: 996px;
  height: 52px;
  padding-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Address = styled.div`
  color: #ffd400;
  padding-top: 30px;
  padding-bottom: 16px;
  padding-right: 968px;
  font-size: 16px;
  font-weight: 500;
`;

export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-right: 829px;
`;

export const AddressNumber = styled.input`
  width: 70px;
  height: 40px;
  padding-left: 15px;
`;

export const AddressSearch = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const AddressDetail1 = styled.input`
  width: 996px;
  height: 40px;
  margin-bottom: 25px; //왜 padding을 쓰면 content부분이 움직일까
`;

export const AddressDetail2 = styled.input`
  width: 100%;
  height: 40px;
`;

export const Youtube = styled.div`
  color: #ffd400;
  padding-top: 40px;
  padding-right: 954px;
  padding-bottom: 20px;
  font-size: 16px;
`;

export const YoutubeLink = styled.input`
  width: 100%;
  height: 40px;
`;

export const Picture = styled.div`
  color: #ffd400;
  padding-top: 40px;
  padding-right: 936px;
  padding-bottom: 20px;
  font-size: 16px;
`;

export const WrapperPicture = styled.div`
  padding-right: 786px;
`;

export const PictureDetail = styled.button`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;
export const WrapperSetting = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;
`;

export const MainSetting = styled.div`
  color: #ffd400;
  padding-top: 40px;
  padding-right: 936px;
  padding-bottom: 20px;
  font-size: 16px;
`;

export const MainSettingSelect = styled.input`
  :hover {
    cursor: pointer;
  }
`;

export const MainSettingFont = styled.div`
  color: #ffd400;
`;

export const RegisterBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
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
import styled from "@emotion/styled";

export const Position = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  border: 0;
  height: auto;
  background-color: #524a4e;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;
export const FormContentWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;
export const ButtonWrapper = styled.form`
  display: flex;
`;
export const ContentTitle = styled.div`
  padding-top: 5vh;
  color: #ff5c8d;
  font-size: 28px;
`;
export const ContentInput = styled.div`
  width: 70%;
  background-color: white;
  border: none;
  .ql-editor {
    height: 350px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostTitle = styled.div`
  color: #ff5c8d;
  font-size: 28px;
`;

export const PostInput = styled.input`
  height: 8vh;
  margin-top: 1vh;
  width: 70%;
  color: #ffc0d3;
  font-size: 18px;
  padding-left: 1vw;
`;
export const PostNumberWrapper = styled.div`
  width: 70%;
  margin-top: 2vh;
  margin-bottom: 3vh;
`;

export const PostZipcode = styled.input`
  margin-right: 1vw;
  text-align: center;
`;

export const PostSearchBtn = styled.button`
  color: #ff5c8d;
  background-color: #ffc0d3;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  margin-top: 3vh;
  width: 70%;
  height: 20vh;
`;

export const ImageTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #ff5c8d;
  font-size: 28px;
  margin-bottom: 3vh;
`;

export const ImageInputs = styled.div`
  display: flex;
  justify-content: center;
`;

import styled from "@emotion/styled";

export const RecentItems = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  background-color: green;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TopWrapper = styled.div`
  margin-top: 3vh;
  margin-bottom: 3vh;
  display: flex;
  justify-content: space-around;
`;
export const WelcomeTitle = styled.div`
  width: 10vw;
  hegith: 10vh;
  font-size: 24px;
  background-color: #ffc0d3;
  color: #ff5c8d;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  margin-top: 3vh;

  background-color: #ffc0d3;
  color: #ff5c8d;
  padding-left: 1vw;
  border: 3px solid #ff5c8d;
`;

export const Position = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
  background-color: #ff5c8d;
  width: 100%;
  height: auto;
  padding-left: 2vw;
  border-radius: 10px;
`;
export const DataList = styled.div`
  height: 40vh;
  width: 100%;
  color: #ffc0d3;
  margin-top: 5vh;
  border-bottom: 1px solid #ffc0d3;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #524a4e;
  border-radius: 10px;
  padding: 0 1vw 0 1vw;
  cursor: pointer;
  white-space: pre-wrap;
  /* overflow: scroll; */
`;

export const DataTitle = styled.span``;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const RegButton = styled.button`
  width: 10vw;
  border: none;
  font-size: 24px;
  background-color: #ffc0d3;
  color: #ff5c8d;
  border-radius: 10px;
  cursor: pointer;
`;

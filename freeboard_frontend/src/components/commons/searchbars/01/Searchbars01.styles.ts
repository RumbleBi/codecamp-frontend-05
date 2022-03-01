import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 50%;
  height: 10vh;
  border-radius: 15px;
  background-color: #ffc0d3;
  color: #ff5c8d;
  padding: 0px 20px;
  border: 1px solid 
  display: flex;
  flex-direction: row;
  align-items: center;

  
  
  
`;

export const SearchIcon = styled(SearchOutlined)`
  color: #ff5c8d;
  font-size: 25px;
  cursor: pointer;
`;

export const SearchbarInput = styled.input`
  ::placeholder {
    color: #ff5c8d;
    font-style: italic;
  }
  color: #ff5c8d;
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  padding-left: 1vw;
`;

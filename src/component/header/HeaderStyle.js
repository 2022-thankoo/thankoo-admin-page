import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #717070;
  border: 1px solid #7E7E7E;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const HeaderWrapper = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateBox = styled.div`
  height: 30px;
  width: 320px;
  display: flex;
  justify-content: space-between;
`;

export const DateSelection = styled.input.attrs({type: 'date'})`
  height: 20px;
  border: 1.5px solid black;
`;

export const ListSelection = styled.select`
  height: 22px;
  width: 200px;
  margin-bottom: 5px;
`;

export const SearchButton = styled.button.attrs({type: 'submit'})`
  margin-bottom: 5px;
`;